import { Link } from "react-router-dom";
import TransactionItem from "../../features/profile/TransactionItem";
import TransactionMenu from "../../features/profile/TransactionMenu";
import axios from "../../config/axios";
import { useEffect } from "react";
import { useState } from "react";
import axiosDefault from "axios";
import { useLocation } from "react-router-dom";


export default function TransactionHistory() {


  const location = useLocation();
  console.log("🚀 ~ file: TransactionHistory.jsx:15 ~ TransactionHistory ~ location:", location.pathname)
  // realtime ***
  const [mergeList, setMergeList] = useState([]);
  // console.log("🚀 ~ file: DashboardItem.jsx:14 ~ DashboardItem ~ mergeList:", mergeList)

  const fetchData = async () => {
    try {
      const { data: userProfile } = await axios.get("/user-profile/getTransactionProfile");
      const { data: realTimeData } = await axiosDefault.get("https://api.coincap.io/v2/assets");

      if (userProfile && realTimeData.data) {
        const allItem = userProfile.findTransactionHistory;
        const listCoinRealtime = realTimeData.data;

          const combinedList = allItem.map(item1 => {
            const matchedItem = listCoinRealtime.find(item2 => item2.symbol === item1.coin_name);
            if (matchedItem) {
              return {
                coin_list_id: item1.coin_list_id,
                coin_name: item1.coin_name,
                image_coin: item1.image_coin,
                type: item1.type,
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

      // setDataList(userProfile?.findPortfolioByUserId || []);
    } catch (err) {
      console.error("Error fetching user profile:", err);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);


  return (
    <div className="flex justify-center w-full pt-20">
      <div className="flex flex-col">
        <div className="flex gap-8 py-2 ">
          <Link to="/profile/transactionhistory">
            <div className={`hover:border-b-4 border-red-500 py-2 cursor-pointer ${location.pathname=="/admin/profile/transactionhistory "?"border-b-red-600 border-b-4 ":""} `}>
              Transaction History
            </div>
          </Link>
          <Link to="/profile/deposithistory">
            <div className={`hover:border-b-4 border-red-500 py-2 cursor-pointer${location.pathname=="/admin/profile/deposithistory "?"border-b-red-600 border-b-4 bg-gray-500 ":""}` }>
              Deposit History
            </div>
          </Link>
        </div>
        <TransactionMenu />
        {mergeList.map((el,index) => <TransactionItem key={index} el={el}  />)}
     
    
      </div>
    </div>
  );
}
