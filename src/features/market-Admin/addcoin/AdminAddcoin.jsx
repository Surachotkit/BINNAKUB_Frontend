import { useAuth } from "../../../hooks/use-auth";
import find from "../../../img/icon/find.png";
import bitCoin from "../../../img/icon/btc.png";
import AdminCreateToDatabase from "./AdminCreateToDatabase";
import axios from "../../../config/axios";
import { useState } from "react";



export default function AdminAddcoin() {
  const { isOpenAddcoinMore, setIsOpenAddcoin, setIsOpenAddcoinMore } = useAuth();
  const [onClose, setOnClose] = useState(false);

  // upload photo
  const addCoin = async(data) => {
    try {
      const res = await axios.post('/admin/create', data)
      console.log("🚀 ~ file: AdminAddcoin.jsx:15 ~ addCoin ~ res:", res)      
    } catch (error) {
      console.log(error)
    }

  }

  const Cancel = () => {
    setIsOpenAddcoin(false)
  }

  return (
    <div className="flex flex-col gap-2 px-4">
      <div className="flex text-lg justify-between ">
        {isOpenAddcoinMore && <AdminCreateToDatabase addCoin={addCoin} onClose={() => Cancel()}/>}

        <span className="font-bold ">Add Coin</span>
        <button
          className="w-14 text-sm rounded-full bg-red-500 text-white hover:bg-red-600"
          onClick={() => setIsOpenAddcoinMore(true)}
        >
          More
        </button>
      </div>

      <div className="flex relative">
        <img
          src={find}
          alt="find"
          className="flex absolute left-1 top-1 h-4 w-4 "
        />
        <input
          type="text"
          className="border w-full  pl-7  rounded-md"
          placeholder="search coin"
        />
      </div>

      <div className="flex  overflow-y-scroll hover:bg-gray-50 cursor-pointer">
        <div className="flex items-center justify-center  ">
          <img src={bitCoin} alt="bitcoin" className="flex w-7 h-7" />
        </div>
        <div className="flex flex-col justify-center p-2  ">
          <span>Bitcoin</span>
        </div>
        <span className="flex items-center justify-center text-sm text-gray-500">
          BTC
        </span>
      </div>

      {/* button */}
      <div className="flex justify-center items-center w-full pt-4 gap-4">
        <button
          className="bg-gray-200 w-52 rounded-md hover:bg-gray-300 text-[#6D6D6D] h-full p-2"
          onClick={() => Cancel()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
