import { Link } from "react-router-dom";
import DepositItem from "../../features/profile/DepositItem";
import DepositMenu from "../../features/profile/DepositMenu";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../config/axios";


export default function DepositHistory() {
  const [ dataList, setDataList ] = useState([])
  console.log("🚀 ~ file: DepositHistory.jsx:11 ~ DepositHistory ~ dataList:", dataList)
 
  useEffect(() => {
    const getDataDepositProfile = async () => {
      try {
      const { data: getDeposit } = await axios.get("/user-profile/getDepositProfile");
      const AllItemTransaction = getDeposit.findDepositHistory
      setDataList(AllItemTransaction)
     
    
      } catch (err) {
        console.error(err);
      }
    };
  
    getDataDepositProfile();
  }, []);
  return (
    <div className="flex justify-center w-full pt-20">
      <div className="flex flex-col">
        <div className="flex gap-8 py-2">
          
          <Link to="/profile/transactionhistory">
          <div className="hover:border-b-4 border-red-500 py-2 cursor-pointer">Transaction History </div>

          </Link>
          <Link to="/profile/deposithistory">
          
          <div className="hover:border-b-4 border-red-500 py-2 cursor-pointer">Deposit History </div>
          </Link>
        </div>
        <DepositMenu />
        {dataList.map(el => <DepositItem  history_payment_id={el.history_payment_id} amount={el.amount} user_id={el.user_id} />)}
    
 
 
      </div>
    </div>
  );
}
