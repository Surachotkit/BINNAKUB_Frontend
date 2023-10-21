
import fee from "../../../img/icon/fee.png"
import coin from "../../../img/icon/coin.png"
import { useState } from "react";
import { useAuth } from "../../../hooks/use-auth";


export default function AdminAddQuanity() {
  const [addQuantity, setAddQuantity] = useState({
    quantity: ""
  });

  const { setIsOpenAddQuantity } = useAuth();
  const Cancel = () => {
    setIsOpenAddQuantity(false)
  }
  return (
    <form>
      <div className="flex justify-between p-4 text-xl">
        <div className="flex items-center gap-2">
          <img src={fee} alt="fee" className="w-8" />
          <span className="font-bold">Add Quantity</span>
        </div>
      </div>

      <div className="flex justify-end pb-2">
        <span className="flex px-6  text-gray-400 text-sm">
          Amount : 5000
        </span>
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-2 w-full px-6">
          <input
            type="text"
            className="border p-2 bg-gray-50 rounded-md w-full"
            placeholder="Please enter quantity"
            value={addQuantity.quantity}
            onChange={(e) => setAddQuantity({ ...addQuantity, quantity: e.target.value })}
          />
          <div className="flex justify-center items-center gap-1 bg-gray-200 w-[4rem] rounded-lg">
            <img src={coin} alt="fee" className="w-6" />
        
          </div>
        </div>



        {/* button */}
        <div className="flex justify-center items-center w-full px-5 gap-4">
          <button
            className="bg-[#FF2147] hover:bg-red-500 w-full rounded-md  text-white h-full p-2"
        
          >
            Submit
          </button>
          <button
            className="bg-gray-200 w-full rounded-md hover:bg-gray-300 text-[#6D6D6D] h-full p-2"
            onClick={() => Cancel(false)}
      
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
