import MarketContent from "../market/MarketContent";
import AdminMarketItem from "./AdminMarketItem";
import AdminMarketMenu from "./AdminMarketMenu";
import AdminAddcoin from "./addcoin/AdminAddcoin";
import AdminButton from "./addcoin/AdminButton";
import Modal from "../../components/Modal";
import { useState } from "react";
import { useEffect } from "react";
import axiosDefault from "axios";
import axios from "../../config/axios";
import { useAuth } from "../../hooks/use-auth";

export default function AdminMarketForm() {

  const { isOpenAddcoin, setIsOpenAddcoin,refresh } = useAuth();

  const [mergeList, setMergeList] = useState([]);

  // const [isLoading,setIsLoading] = useState(false)
  // console.log("🚀 ~ file: AdminMarketForm.jsx:19 ~ AdminMarketForm ~ isLoading:", isLoading)
  
  // del coin
  const deleteCoin = async (CoinId) => {
    // console.log("🚀 ~ file: AdminMarketForm.jsx:22 ~ deleteCoin ~ CoinId:", CoinId)
    try{
      console.log(mergeList);
      await axios.delete(`/admin/delete/${CoinId}`)
      console.log(mergeList);
      setMergeList(mergeList.filter(el => el.coin_list_id !== CoinId))
      console.log(mergeList);
      // setIsLoading(true)

    }catch(err){
      console.log(err)
    }
  }

  // console.log(mergeList);



  useEffect(() => {

    fetchData();
    console.log("USE EFFECT")

  }, [refresh]);

  const fetchData = async () => {
    try {
      const { data: coinData } = await axios.get("/coinlist/market");
      console.log(coinData,"VVVVV")
      const { data: realTimeData } = await axiosDefault.get("https://api.coincap.io/v2/assets");

      if (coinData[0] && realTimeData.data) {
        const allItem = coinData[0].getCoinList;
        const listCoinRealtime = realTimeData.data;

        const combinedList = allItem.map(item1 => {
          const matchedItem = listCoinRealtime.find(item2 => item2.symbol === item1.coin_name);
          // console.log("🚀 ~ file: AdminMarketForm.jsx:58 ~ combinedList ~ matchedItem:", matchedItem)
          if (matchedItem) {
            return {
              coin_list_id: item1.coin_list_id,
              coin_name: item1.coin_name,
              image_coin: item1.image_coin,
              price: parseFloat(matchedItem.priceUsd).toLocaleString(2),
              change: parseFloat(matchedItem.changePercent24Hr).toLocaleString(2),
              marketCap: parseFloat(matchedItem.marketCapUsd).toLocaleString(2),
              amount: parseFloat(item1.quantity).toLocaleString(2),
            };
          }
          // console.log(item1.coin_list_id);
          return null;
        }).filter(Boolean);
        // console.log("🚀 ~ file: MarketForm.jsx:39 ~ combinedList ~ combinedList:", combinedList)
        setMergeList(combinedList);
 
      }
    } catch (err) {
      console.error(err);
    }
  };




  return (
    <div className="flex flex-col gap-4">
      {isOpenAddcoin && (
        <Modal>
          
          <AdminAddcoin  setIsOpenAddcoin={setIsOpenAddcoin} />
         
        </Modal>
      )}


      <div className="flex justify-center items-center">
        <MarketContent />
      </div>
      <div className="flex justify-center items-center">
        <AdminMarketMenu />
      </div>

      <div className="flex flex-col justify-center items-center">
      {mergeList.map((el,index) => (
          <AdminMarketItem key={index}
            coin_list_id={el.coin_list_id}
            coinName={el.coin_name} 
            price={el.price} 
            change={el.change} 
            marketCap={el.marketCap}
            amount={el.amount}
            deleteCoin={deleteCoin}
            photoCoin={el.image_coin}

          />
        ))}
  
        <AdminButton setIsOpenAddcoin={() => setIsOpenAddcoin(true)} />
      </div>
    </div>
  );
}
