import React, { useState, useEffect } from "react";
import axios from "../../config/axios";
import axiosDefault from "axios";
import Modal from "../../components/Modal";
import MarketContent from "./MarketContent";
import MarketItem from "./MarketItem";
import MarketMenu from "./MarketMenu";
import PaymentSell from "../payment/PaymentSell";
import PaymentBuy from "../payment/PaymentBuy";
import { useAuth } from "../../hooks/use-auth";

export default function MarketForm() {
  const { isOpenSell, toggleModalSell, isOpenBuy, toggleModalBuy } = useAuth();
  const [mergeList, setMergeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: coinData } = await axios.get("/coinlist/market");
        console.log("🚀 ~ file: MarketForm.jsx:20 ~ fetchData ~ coinData:", coinData)
        const { data: realTimeData } = await axiosDefault.get("https://api.coincap.io/v2/assets");

        if (coinData[0] && realTimeData.data) {
          const allItem = coinData[0].getCoinList;
          const listCoinRealtime = realTimeData.data;

          const combinedList = allItem.map(item1 => {
            const matchedItem = listCoinRealtime.find(item2 => item2.symbol === item1.coin_name);
            if (matchedItem) {
              return {
                coin_name: item1.coin_name,
                price: parseFloat(matchedItem.priceUsd).toLocaleString(2),
                change: parseFloat(matchedItem.changePercent24Hr).toLocaleString(2),
                marketCap: parseFloat(matchedItem.marketCapUsd).toLocaleString(2),
                amount: parseFloat(item1.quantity).toLocaleString(2),
              };
            }
            return null;
          }).filter(Boolean);
          console.log("🚀 ~ file: MarketForm.jsx:39 ~ combinedList ~ combinedList:", combinedList)

          setMergeList(combinedList);
        }
      } catch (err) {
        console.error(err);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {isOpenBuy && (
        <Modal>
          <PaymentBuy />
        </Modal>
      )}
      {isOpenSell && (
        <Modal>
          <PaymentSell />
        </Modal>
      )}
      <div className="flex justify-center items-center">
        <MarketContent />
      </div>
      <div className="flex justify-center items-center">
        <MarketMenu />
      </div>
      <div className="flex flex-col justify-center items-center">
        {mergeList.map(el => (
          <MarketItem 
            coinName={el.coin_name} 
            price={el.price} 
            change={el.change} 
            marketCap={el.marketCap}
            amount={el.amount}
          />
        ))}
      </div>
    </div>
  );
}
