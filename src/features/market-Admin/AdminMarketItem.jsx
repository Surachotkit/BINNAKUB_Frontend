import { useEffect } from "react";
import bitCoin from "../../img/icon/btc.png";
import axios from "axios";
import { useState } from "react";
import AdminMarketEdit from "./action/AdminMarketEdit";


export default function AdminMarketItem({ coinName, price, change, marketCap, amount, coin_list_id, deleteCoin }) {


  return (
    <div className="flex flex-col gap-5 flex-1 w-[180vh]">
      <div className="flex items-center justify-evenly hover:bg-gray-50 py-5 border-b">
        <span className="flex items-center justify-center gap-2">
          {coin_list_id}
          <img src={bitCoin} alt="bitcoin" className=" w-9 h-9" />

          <div className="flex flex-col">
            <span>{coinName}</span>
          </div>
        </span>
        <span>{price}</span>
        <span className=" text-green-500">{change}%</span>
        <span>{marketCap}</span>
        <span>{amount}</span>
        <AdminMarketEdit amount={amount} coin_list_id={coin_list_id} deleteCoin={deleteCoin}/>

       
      </div>
    </div>
  );
}
