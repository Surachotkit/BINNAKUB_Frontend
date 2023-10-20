import bitCoin from "../../img/icon/btc.png"

export default function DashboardItem() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-[100vh] ">
      <div className="flex justify-evenly items-center hover:bg-gray-50 py-5 border-b w-full">
        <span className="flex gap-2">
          <img src={bitCoin} alt="bitcoin" />
          BTC
        </span>
        <span>10</span>
        <div className="flex justify-center items-center flex-col">

        <span>$21,644.03</span>
        <span className="text-green-500">0.38%</span>
        </div>
        <span className="text-green-500">2.38%</span>
        {/* <MarketButton /> */}
      </div>
    </div>
  );
}
