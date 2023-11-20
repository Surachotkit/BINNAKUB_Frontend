import Profile from "../img/icon/profile.png";
import Edit from "../img/icon/edit.png";
import { useAuth } from "../hooks/use-auth";
import React, { useState, useEffect } from "react";
import axiosDefault from "axios";
import axios from "../../src/config/axios";

export default function TabBarProfile() {

  const { authUser } = useAuth();

  // reduce ผลรวม total
  const [mergeList, setMergeList] = useState([]);

  const result = mergeList.map((data) => {
    const returnAmount = data.price 
    return returnAmount
  })
 

  const sumAmount = result.reduce((acc, el) => {
    return acc+ Number(el);
  }, 0);


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

  
    } catch (err) {
      console.error("Error fetching user profile:", err);
    }
  };

  useEffect(() => {
    fetchData()
  }, [] )

  return (
    <div className="flex border p-2 bg-gray-100 h-[15vh]  ">
      <div className="flex justify-evenly items-center w-full gap-2">
        <div className="flex gap-4">
          <img src={Profile} alt="profile" />
          <div className="">
            <span>{authUser?.email}</span>
            <img src={Edit} alt="edit" className="cursor-pointer pt-1 w-4" />
          </div>
        </div>
    
        <div className="flex bg-white justify-evenly w-[70vh]  p-2 rounded-xl">
    
          <div  className="flex flex-col ">
            <span className="font-bold flex items-center justify-center">Total</span>
            <span className="flex justify-center">$ {(sumAmount).toLocaleString()}</span>
          </div>
      
          
          <div className="flex justify-center items-center flex-col">
            <span className="font-bold">User ID</span>
            <span>{authUser?.user_id}</span>
          </div>
          <div className="flex justify-center items-center flex-col">
            <span className="font-bold">User Type</span>
            <span>{authUser?.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
