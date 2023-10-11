import bitCoin from "../../img/icon/btc.png";
import MarketButton from "./MarketButton";

export default function MarketItem() {
  return (
    <div className="flex flex-col gap-5 flex-1 w-[180vh] ">
      <div className="flex justify-evenly hover:bg-gray-50 py-5 border-b">
        <span className="flex gap-2">
          <img src={bitCoin} alt="" />
          BTC
        </span>
        <span>$21,644.03</span>
        <span className="text-green-500">0.38%</span>
        <span>$229.33B</span>
        <span>10,000</span>
        <MarketButton/>
      </div>
    </div>
  );
}
