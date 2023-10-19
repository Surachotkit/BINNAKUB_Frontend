import MarketContent from "../market/MarketContent";
import AdminMarketItem from "./AdminMarketItem";
import AdminMarketMenu from "./AdminMarketMenu";
import AdminAddcoin from "./addcoin/AdminAddcoin";
import AdminButton from "./addcoin/AdminButton";
import { useAuth } from "../../hooks/use-auth";
import Modal from "../../components/Modal";
import AdminAddQuanity from "./addStock/AdminAddQuanity";

export default function AdminMarketForm() {
  const { isOpenAddcoin, isOpenAddQuantity, setIsOpenAddQuantity } = useAuth();

  return (
    <div className="flex flex-col gap-4">
      {isOpenAddcoin && (
        <Modal>
          <AdminAddcoin />
        </Modal>
      )}

      {isOpenAddQuantity && (
        <Modal>
          <AdminAddQuanity />
        </Modal>
      )}

      <div className="flex justify-center items-center">
        <MarketContent />
      </div>
      <div className="flex justify-center items-center">
        <AdminMarketMenu />
      </div>

      <div className="flex flex-col justify-center items-center">
        <AdminMarketItem />
        <AdminMarketItem />
        <AdminMarketItem />
        <AdminMarketItem />
        <AdminButton />
      </div>
    </div>
  );
}
