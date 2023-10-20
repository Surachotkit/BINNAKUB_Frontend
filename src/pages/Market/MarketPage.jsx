
import AdminMarketForm from "../../features/market-Admin/AdminMarketForm";
import MarketForm from "../../features/market/MarketForm";
import { useAuth } from "../../hooks/use-auth";

export default function MarketPage() {
  const { authUser } = useAuth();
  
  return (
    <div>
      {authUser?.role === "ADMIN" ? <AdminMarketForm/> : <MarketForm />}
    </div>
  );
}
