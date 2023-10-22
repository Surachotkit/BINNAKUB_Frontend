import { useAuth } from "../../../hooks/use-auth";
import find from "../../../img/icon/find.png";
import AdminCreateToDatabase from "./AdminCreateToDatabase";
import axios from "../../../config/axios";
import { useState } from "react";
import { useEffect } from "react";
import ListCoin from "./ListCoin";

export default function AdminAddcoin({coin_list_id ,coinName,setIsOpenAddcoin}) {
console.log("🚀 ~ file: AdminAddcoin.jsx:10 ~ AdminAddcoin ~ coinName:", coinName)
console.log("🚀 ~ file: AdminAddcoin.jsx:10 ~ AdminAddcoin ~ coin_list_id:", coin_list_id)

  const [isOpenAddcoinMore , setIsOpenAddcoinMore] = useState(false)
    
  // upload photo
  const addCoin = async (data) => {
    try {
      const res = await axios.post("/admin/create", data);
      console.log("🚀 ~ file: AdminAddcoin.jsx:15 ~ addCoin ~ res:", res);
    } catch (error) {
      console.log(error);
    }
  };

  const Cancel = () => {
    setIsOpenAddcoin(false);
  };

    // get coin Inactive
    const [getCoinListInDatabase, setGetCoinListInDatabase] = useState([]);
    // console.log(
    //   "🚀 ~ file: AdminMarketForm.jsx:20 ~ AdminMarketForm ~ getCoinListInDatabase:",
    //   getCoinListInDatabase
    // );

  useEffect(() => {
    const fechListCoinInDatabase = async () => {
      try {
        const { data: coinListInDatabase } = await axios.get("/coinlist/list/database");
        // console.log(
        //   "🚀 ~ file: AdminAddcoin.jsx:40 ~ useEffect ~ coinListInDatabase:",
        //   coinListInDatabase
        // );
        const list = coinListInDatabase[0].getCoinListInActive
        // console.log("🚀 ~ file: AdminAddcoin.jsx:44 ~ fechListCoinInDatabase ~ list:", list)
        setGetCoinListInDatabase(coinListInDatabase[0].getCoinListInActive);
      } catch (err) {
        console.log(err);
      }
    };
    fechListCoinInDatabase();
  }, []);

  return (
    <div className="flex flex-col gap-2 px-4">
      <div className="flex text-lg justify-between ">
        {isOpenAddcoinMore && (
          <AdminCreateToDatabase addCoin={addCoin} onClose={() => Cancel()} />
        )}

        <span className="font-bold ">Add Coin</span>
        <button
          className="w-14 text-sm rounded-full bg-red-500 text-white hover:bg-red-600"
          onClick={() => setIsOpenAddcoinMore(true)}
        >
          More
        </button>
      </div>


      <div className="flex flex-col gap-2 overflow-y-auto h-[15rem]">
        {getCoinListInDatabase.map(el => <ListCoin coinList={el.coin_name} photoCoin={el.image_coin} />) }
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
