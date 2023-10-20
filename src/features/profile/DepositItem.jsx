import Usd from "../../img/icon/usd.png"

export default function DepositItem() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-[150vh] ">
      <div className="flex justify-evenly items-center hover:bg-gray-50 py-5 border-b w-full">
        <span className="flex gap-2">
          <img src={Usd} alt="bitcoin" className="w-8 h-8" />
          USD
        </span>
        <span>10,500</span>
        <div className="flex justify-center items-center flex-col">
          <span>-</span>
        </div>
        <div className="flex justify-center items-center rounded-full px-10 w-8 h-8 bg-[#C3FFCD] ">

        <span>Buy</span>
        </div>
        <div className="flex justify-start items-center flex-col">
          <span>$10,500.00</span>
        </div>
        <span>$ 0.00</span>

        {/* <MarketButton /> */}
      </div>
    </div>
  );
}
