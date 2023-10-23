import React, { useState, useEffect } from "react";
import bitCoin from "../../img/icon/btc.png"
import { useAuth } from "../../hooks/use-auth";
import axiosDefault from "axios";
import axios from "../../config/axios";
import { cache } from "joi";


export default function DashboardItem() {

  const { authUser } = useAuth();
  const [ dataList, setDataList ] = useState([])
  const [mergeList, setMergeList] = useState([]);
  console.log("🚀 ~ file: DashboardItem.jsx:14 ~ DashboardItem ~ mergeList:", mergeList)

  const fetchData = async () => {
    try {
      const { data: userProfile } = await axios.get("/user-profile/");
      const { data: realTimeData } = await axiosDefault.get("https://api.coincap.io/v2/assets");

      if (userProfile && realTimeData.data) {
        const allItem = userProfile.findPortfolioByUserId;
        const listCoinRealtime = realTimeData.data;

          const combinedList = allItem.map(item1 => {
            const matchedItem = listCoinRealtime.find(item2 => item2.symbol === item1.coin_name);
            if (matchedItem) {
              return {
                coin_list_id: item1.coin_list_id,
                coin_name: item1.coin_name,
                image_coin: item1.image_coin,
                price: parseFloat(item1.quantity) * parseFloat(matchedItem.priceUsd),
                change: parseFloat(matchedItem.changePercent24Hr).toLocaleString(2),
                marketCap: parseFloat(matchedItem.marketCapUsd).toLocaleString(2),
                amount: parseFloat(item1.quantity).toLocaleString(2),
              };
            }
          return null;
        }).filter(Boolean);
        setMergeList(combinedList);
      }

      setDataList(userProfile?.findPortfolioByUserId || []);
    } catch (err) {
      console.error("Error fetching user profile:", err);
    }
  };

  useEffect(() => {
    fetchData()
  }, [] )


  return (
    <div className="flex flex-col justify-center items-center gap-5 w-[100vh]">
    {mergeList.map(({ coin_name, amount, weight, price }, index) => (
      <div key={index} className="flex justify-evenly items-center hover:bg-gray-50 py-5 border-b w-full">
        <span className="flex gap-2">
          {/* <img src={bitCoin} alt="bitcoin" /> */}
          {coin_name}
        </span>
        <span>{amount + ' ' +`${coin_name}`}</span>
        <span className="text-green-500">{parseFloat(price).toLocaleString(2)} USDT </span>
      </div>
    ))}
  </div>
  );
}