import { Link } from "react-router-dom";
import TransactionItem from "../../features/profile/TransactionItem";
import TransactionMenu from "../../features/profile/TransactionMenu";
import axios from "../../config/axios";
import { useEffect } from "react";
import { useState } from "react";

export default function TransactionHistory() {
  const [ dataList, setDataList ] = useState([])
  console.log("🚀 ~ file: TransactionHistory.jsx:10 ~ TransactionHistory ~ dataList:", dataList)

  useEffect(() => {
    const getDataTransactionProfile = async () => {
      try {
      const { data: getTransaction } = await axios.get("/user-profile/getTransactionProfile");
      const AllItemTransaction = getTransaction.findTransactionHistory
      setDataList(AllItemTransaction)
     
    
      } catch (err) {
        console.error(err);
      }
    };
  
    getDataTransactionProfile();
  }, []);


  return (
    <div className="flex justify-center w-full pt-20">
      <div className="flex flex-col">
        <div className="flex gap-8 py-2">
          <Link to="/profile/transactionhistory">
            <div className="hover:border-b-4 border-red-500 py-2 cursor-pointer">
              Transaction History
            </div>
          </Link>
          <Link to="/profile/deposithistory">
            <div className="hover:border-b-4 border-red-500 py-2 cursor-pointer">
              Deposit History
            </div>
          </Link>
        </div>
        <TransactionMenu />
        {dataList.map(el => <TransactionItem coin_name={el.coin_name} quantity={el.quantity} price={el.price} type={el.type} fee={el.fee}  />)}
    
      </div>
    </div>
  );
}
