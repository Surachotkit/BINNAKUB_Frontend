import { useState } from "react";
import Modal from "../../components/Modal";
import MarketContent from "./MarketContent";
import MarketItem from "./MarketItem";
import MarketMenu from "./MarketMenu";
import PaymentSell from "../payment/PaymentSell";
import PaymentBuy from "../payment/PaymentBuy";
import { useAuth } from "../../hooks/use-auth";
import { useEffect } from "react";
import axios from "../../config/axios";


export default function MarketForm() {
  const {isOpenSell, toggleModalSell} = useAuth()
  const {isOpenBuy, toggleModalBuy} = useAuth()

  // List_1 from data
  const [allItem, setAllItem] = useState([])

  // List_2 from data Real time
  const [listCoinRealtime, setListCoinRealtime] = useState([])

  // List_3 emtry
  const [mergeList, setMergeList] = useState([])
 
  useEffect(() => {
    const axiosData = async () => {
      try {
        const getQuantityInDatabase = await axios.get("http://localhost:8080/coinlist/market");
        setAllItem(getQuantityInDatabase.data[0].getCoinList)

        const getCoinRealTime = await axios.get("https://api.coincap.io/v2/assets");
        setListCoinRealtime(getCoinRealTime.data.data)

        let listIncluded = []  
        // filter ------> list_1 + list_2 = list_3

        // ROW 2 ---> ETH
        if(allItem?.length > 0 && listCoinRealtime?.length > 0){
          allItem.forEach(item1 => {
            // symbol: BTC = coin_name: BTC
            const matchingItem = listCoinRealtime?.filter(item2 => item2?.symbol === item1?.coin_name)
            
            if(matchingItem){
              listIncluded.push({
                coin_name: item1?.coin_name,
                price: parseFloat(matchingItem[0]?.priceUsd).toLocaleString(2),
                change: parseFloat(matchingItem[0]?.changePercent24Hr).toLocaleString(2),
                marketCap: parseFloat(matchingItem[0]?.marketCapUsd).toLocaleString(2),
                amount: parseFloat(item1?.quantity).toLocaleString(2)
              })
            }
          })
        }
        setMergeList(listIncluded)

   
      } catch (err) {
        console.log(err);
      }
    };
    axiosData();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {isOpenBuy && (
        <Modal >
          <PaymentBuy />
        </Modal>
      )}

      {isOpenSell && (
        <Modal >
          <PaymentSell/>
        </Modal>
      )}
    
      <div className="flex justify-center items-center">
        <MarketContent />
      </div>
      <div className="flex justify-center items-center">
        <MarketMenu />
      </div>

      <div className="flex flex-col justify-center items-center">
        {mergeList?.map((el) => <MarketItem 
            coinName={el.coin_name} 
            price={el.price} 
            change={el.change} 
            marketCap={el.marketCap}
            amount={el.amount}
        />)}
       
   
      </div>
    </div>
  );
}
