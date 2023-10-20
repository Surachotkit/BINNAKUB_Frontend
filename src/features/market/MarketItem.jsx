import { useEffect } from "react";
import { useAuth } from "../../hooks/use-auth";
import bitCoin from "../../img/icon/btc.png";
import MarketButton from "./MarketButton";
import axios from "axios";
import { useState } from "react";
// import axios from "../../config/axios";


const MarketItem = ({ coinName, price, change, marketCap, amount }) => {


  return (
    <div className="flex flex-col gap-5 flex-1 w-[180vh]">
      <div className="flex items-center justify-evenly hover:bg-gray-50 py-5 border-b">
        <span className="flex items-center justify-center gap-2">
          <img src={bitCoin} alt="bitcoin" className=" w-9 h-9" />

          <div className="flex flex-col">
            {/* <span>{coinSubName}</span> */}
            <span className="text-sm text-gray-500">{coinName}</span>
          </div>
        </span>
        <span>{price}</span>
        <span className=" text-green-500">{change}%</span>
        <span>{marketCap}</span>
        <span>{amount}</span>
        <MarketButton />
       
      </div>
    </div>
  );
}

export default MarketItem