import { Link } from "react-router-dom";
import Dashboard from "../img/icon/dashboard.png";
import Transaction from "../img/icon/transaction.png";
import DashboardComp from "../pages/UserProfile/Dashboard";
import { useAuth } from "../hooks/use-auth";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const {authUser} = useAuth()
  const location = useLocation();
  // console.log(location.pathname)
  return (
    <div className="flex h-[75vh] w-[30vh]  border ">
      <div className="flex flex-col ">
        <div className={`flex justify-center hover:bg-gray-200 cursor-pointer hover:border-l-4 ${location.pathname=="/admin/profile/dashboard"  ?"border-l-red-600 border-l-4 bg-gray-100":""} ` }>
        {authUser.role === "ADMIN" ? (<Link to="/admin/profile/dashboard">
            <div className="flex items-center  p-8 gap-3 w-full justify-center ">
              <img src={Dashboard} alt="dashboard" className="w-6 h-6" />
              <span>Dashboard</span>
            </div>
          </Link>)
          :
          (<Link to="/profile/dashboard">
            <div className="flex items-center  p-8 gap-3 w-full justify-center ">
              <img src={Dashboard} alt="dashboard" className="w-6 h-6" />
              <span>Dashboard</span>
            </div>
          </Link>)}
        </div>

        <div className={`flex justify-center hover:bg-gray-200 w-52 cursor-pointer hover:border-l-4 ${location.pathname=="/admin/profile/deposithistory" || location.pathname=="/admin/profile/transactionhistory "  ?"border-l-red-600 border-l-4 bg-gray-100":""} `}>
        {authUser.role === "ADMIN" ? (<Link to="/admin/profile/deposithistory">
            <div className="flex items-center  p-8 gap-3  w-full justify-center">
              <img src={Transaction} alt="transaction" className="w-7 h-7" />
              <span>Transaction</span>
            </div>
          </Link>)
          :
          (<Link to="/profile/transactionhistory">
            <div className="flex items-center  p-8 gap-3  w-full justify-center">
              <img src={Transaction} alt="transaction" className="w-7 h-7" />
              <span>Transaction</span>
            </div>
          </Link>)}
        </div>
      </div>
  
    </div>
  );
}
