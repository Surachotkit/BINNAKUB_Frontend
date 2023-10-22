
import usdt from "../../img/icon/usdt.png";



export default function PaymentBuy({coinName,price,image_coin,setIsOpenBuy}) {
  return (
    <div>
      <div className="flex justify-between p-4 text-xl">
        <div className="flex items-center gap-2">
          <img src={image_coin} alt="usd" className="w-8" />
          <span className="font-bold">{coinName}</span>
        </div>
      </div>

      <div className="flex justify-between">
        <span className="flex px-6 pb-4">$ {price}</span>
        <span className="flex px-6  text-gray-400 text-sm">
          Balance : 5,000 USDT
        </span>
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-2 w-full px-6">
          <input
            type="text"
            className="border p-2 bg-gray-50 rounded-md w-full"
            placeholder="Please enter amount"
          />
          <div className="flex justify-center items-center gap-1 bg-gray-200 w-[8rem] rounded-lg">
            <img src={image_coin} alt="usd" className="w-8" />
            <span>{coinName}</span>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="flex gap-2 w-full px-6">
            <input
              type="text"
              className="border p-2 bg-gray-50 rounded-md w-full"
              placeholder="0.00"
            />
            <div className="flex justify-center items-center gap-1 bg-gray-200 w-[8rem] rounded-lg">
              <img src={usdt} alt="usd" className="w-8" />
              <span>USDT</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end w-full">
          <span className="flex px-6 text-gray-400 text-sm -mb-2">
            Fee : 0.0125
          </span>
        </div>

        {/* button */}
        <div className="flex justify-center items-center w-full px-5 gap-4">
          <button
            className="bg-[#45E468] hover:bg-green-500 w-full rounded-md  text-white h-full p-2"
        
          >
            Buy
          </button>
          <button
            className="bg-gray-200 w-full rounded-md hover:bg-gray-300 text-[#6D6D6D] h-full p-2"
            onClick={() => setIsOpenBuy(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
