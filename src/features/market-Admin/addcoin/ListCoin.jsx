import { useState } from "react";
import axios from "../../../config/axios";

export default function ListCoin({Cancel,coinId,coinList,photoCoin,status}) {
  const [listCoin, setListCoin] = useState({
    coin_list_id: coinId,
    coin_name: coinList,
    // status: status
  })
  // console.log("🚀 ~ file: ListCoin.jsx:9 ~ ListCoin ~ listCoin:", listCoin)
  const handleClick = () => {
    try{
      setListCoin(listCoin)
      console.log(listCoin)
      axios.post("/admin/addcoin", listCoin)
      Cancel()
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className="flex  hover:bg-gray-50 cursor-pointer" onClick={handleClick}>
      <div className="flex items-center justify-center">
        <img src={photoCoin} alt="bitcoin" className="flex w-7 h-7" />
      </div>
      <div className="flex flex-col justify-center p-2  ">
        {/* <span>{getCoinListInDatabase[0].coin_name}</span> */}
        <span>{coinList}</span>
      </div>
    </div>
  );
}
