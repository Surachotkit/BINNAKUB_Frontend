import { useState } from "react";
import axios from "../../../config/axios";
import { useEffect } from "react";
import { useAuth } from "../../../hooks/use-auth";

export default function ListCoin({Cancel,coinId,coinList,photoCoin,status,fechListCoinInDatabases}) {
  const [listCoin, setListCoin] = useState({
    coin_list_id: coinId,
    coin_name: coinList,

  })
  const {SetRefresh,refresh} =useAuth()

  const handleClick = async () => {
    try{
      setListCoin(listCoin)
      console.log(listCoin)
     await axios.post("/admin/addcoin", listCoin)
      SetRefresh(!refresh)
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
        <span>{coinList}</span>
      </div>
    </div>
  );
}
