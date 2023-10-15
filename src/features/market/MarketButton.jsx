import { useAuth } from "../../hooks/use-auth";

export default function MarketButton() {
  const { toggleModalBuy, toggleModalSell } = useAuth();
  return (
    <div className="flex gap-4">
      <button className="bg-green-200 w-20 h-full rounded-full hover:bg-green-300" onClick={toggleModalBuy}>
        Buy
      </button>
      <button
        className="bg-red-200 w-20 h-full rounded-full hover:bg-red-300"
        onClick={toggleModalSell}
      >
        Sell
      </button>
    </div>
  );
}
