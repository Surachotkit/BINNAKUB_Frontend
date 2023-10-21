import { Link } from "react-router-dom";
import AdminDepositMenu from "../../../features/profile-Admin/AdminDepositMenu";
import AdminDepositItem from "../../../features/profile-Admin/AdminDepositItem";


export default function AdminDepositHistory() {
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

        <AdminDepositItem/>
        <AdminDepositItem/>
        <AdminDepositItem/>
        <AdminDepositItem/>
        <AdminDepositItem/>
        <AdminDepositItem/>
      </div>
    </div>
  );
}