import { Link } from "react-router-dom";
import AdminDepositMenu from "../../../features/profile-Admin/AdminDepositMenu";
import AdminDepositItem from "../../../features/profile-Admin/AdminDepositItem";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../../config/axios";


export default function AdminDepositHistory() {
  const [ dataList, setDataList ] = useState([])
  console.log("🚀 ~ file: TransactionHistory.jsx:10 ~ TransactionHistory ~ dataList:", dataList)

  useEffect(() => {
    const getDataTransactionProfile = async () => {
      try {
      const { data: getTransaction } = await axios.get("/admin/deposithistory");
      const AllItemTransaction = getTransaction.findDepositHistory
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
          
          <Link to="/admin/profile/transactionhistory">
          <div className="hover:border-b-4 border-red-500 py-2 cursor-pointer">Transaction History </div>

          </Link>
          <Link to="/admin/profile/deposithistory">
          
          <div className="hover:border-b-4 border-red-500 py-2 cursor-pointer">Deposit History </div>
          </Link>
        </div>
        <AdminDepositMenu/>

        {dataList.map(el => <AdminDepositItem history_payment_id={el.history_payment_id} amount={el.amount} user_id={el.user_id}   />)}
      
      </div>
    </div>
  );
}
