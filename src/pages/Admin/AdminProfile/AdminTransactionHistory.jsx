import { Link } from "react-router-dom";
import AdminDepositMenu from "../../../features/profile-Admin/AdminDepositMenu";
import AdminTransactionItem from "../../../features/profile-Admin/AdminTransactionItem";
import AdminTransactionMenu from "../../../features/profile-Admin/AdminTransactionMenu";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../../config/axios";

export default function AdminTransactionHistory() {
  const [ dataList, setDataList ] = useState([])
  console.log("🚀 ~ file: TransactionHistory.jsx:10 ~ TransactionHistory ~ dataList:", dataList)

  useEffect(() => {
    const getDataTransactionProfileAdmin = async () => {
      try {
      const { data: getTransaction } = await axios.get("/admin/transactionhistory");
      const AllItemTransaction = getTransaction.findTransactionHistory
      setDataList(AllItemTransaction)
     
    
      } catch (err) {
        console.error(err);
      }
    };
  
    getDataTransactionProfileAdmin();
  }, []);

  return (
    <div className="flex justify-center w-full pt-20">
      <div className="flex flex-col">
        <div className="flex gap-8 py-2">
          <Link to="/admin/profile/transactionhistory">
            <div className="hover:border-b-4 border-red-500 py-2 cursor-pointer">
              Transaction History
            </div>
          </Link>
          <Link to="/admin/profile/deposithistory">
            <div className="hover:border-b-4 border-red-500 py-2 cursor-pointer">
              Deposit History
            </div>
          </Link>
        </div>
        <AdminTransactionMenu/>

        {dataList.map(el => <AdminTransactionItem coin_name={el.coin_name} quantity={el.quantity} price={el.price} type={el.type} fee={el.fee} user_id={el.user_id}   />)}
     

      </div>
    </div>
  );
}
