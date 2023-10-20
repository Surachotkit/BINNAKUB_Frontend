import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import TabBarProfile from "../../components/TabBarProfile";
import Dashboard from "./Dashboard";
import Transaction from "./TransactionHistory";
import Deposit from "./DepositHistory";

export default function ProfilePage() {
  return (
    <div className="flex flex-col flex-1 h-[75vh]">
      <div>
        {/* <TabBarProfile /> */}
        
      </div>

   
      <div className="flex">
        {/* <Sidebar /> */}

        <Dashboard />
        {/* <Transaction/> */}
        {/* <Deposit/> */}
        
      </div>

    </div>
  );
}
