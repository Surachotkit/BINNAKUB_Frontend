
import MarketButton from "./MarketButton";



const MarketItem = ({ coinName, price, change, marketCap, amount, photoCoin }) => {


  return (
    <div className="flex flex-col gap-5 w-[180vh]">
      <div className="flex items-center justify-evenly hover:bg-gray-50 py-5 border-b gap-24 ">
        <span className="flex flex-1 items-center justify-center gap-2">
          <span className="flex flex-1"></span>
          <img src={photoCoin} alt="photoCoin" className="flex w-9 h-9 " />

          <div className="flex flex-col flex-1">
            <span>{coinName}</span>
          </div>
        </span>
        <span className="flex flex-1">{price}</span>
        <span className=" text-green-500 flex flex-1">{change}%</span>
        <span className="flex flex-1">{marketCap}</span>
        <span className="flex flex-1">{amount}</span>
        <MarketButton />
       
      </div>
    </div>
  );
}

export default MarketItem