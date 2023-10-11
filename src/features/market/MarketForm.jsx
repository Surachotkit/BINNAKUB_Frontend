import Modal from "../../components/Modal";
import MarketButton from "./MarketButton";
import MarketContent from "./MarketContent";
import MarketItem from "./MarketItem";
import MarketMenu from "./MarketMenu";

export default function MarketForm() {
  return (
    <div className="flex flex-col gap-4">
      <Modal/>
      <div className="flex justify-center items-center">
        <MarketContent />
      </div>
      <div className="flex justify-center items-center">
        <MarketMenu />
      </div>

      <div className="flex flex-col justify-center items-center">
        <MarketItem />
        <MarketItem />
        <MarketItem />
        <MarketItem />
        <MarketItem />
        <MarketItem />
      </div>
    </div>
  );
}
