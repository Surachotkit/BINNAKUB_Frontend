import { useEffect } from "react";
import bitCoin from "../../img/icon/btc.png";
import axios from "axios";
import { useState } from "react";
import AdminMarketEdit from "./action/AdminMarketEdit";

export default function AdminMarketItem() {
  const [coinName, setCoinName] = useState(null);
  const [coinSubName, setCoinSubName] = useState(null);
  const [price, setPrice] = useState(null);
  const [change, setChange] = useState(null);
  const [marketCap, setMarketCap] = useState(null);

  useEffect(() => {
    const axiosData = async () => {
      try {
        const res = await axios.get("https://api.coincap.io/v2/assets");
        setCoinName(res.data.data[0].id);
        setCoinSubName(res.data.data[0].symbol);
        setPrice(res.data.data[0].priceUsd);
        setChange(res.data.data[0].changePercent24Hr);
        setMarketCap(res.data.data[0].marketCapUsd);
        // console.log(
        //   "🚀 ~ file: MarketItem.jsx:14 ~ axiosData ~ res:",
        //   res.data.data[0].id
        // );
   
      } catch (err) {
        console.log(err);
      }
    };
    axiosData();
  }, []);



  return (
    <div className="flex flex-col gap-5 flex-1 w-[180vh]">
      <div className="flex items-center justify-evenly hover:bg-gray-50 py-5 border-b">
        <span className="flex items-center justify-center gap-2">
          <img src={bitCoin} alt="bitcoin" className=" w-9 h-9" />

          <div className="flex flex-col">
            <span>{coinSubName}</span>
            <span className="text-sm text-gray-500">{coinName}</span>
          </div>
        </span>
        <span>{price}</span>
        <span className=" text-green-500">{change}%</span>
        <span>{marketCap}</span>
        <span>10,000</span>
        <AdminMarketEdit/>
       
      </div>
    </div>
  );
}
