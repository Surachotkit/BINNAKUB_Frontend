import { Link } from "react-router-dom";
import DepositItem from "../../features/profile/DepositItem";
import DepositMenu from "../../features/profile/DepositMenu";


export default function Deposit() {
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
        <DepositItem />
        <DepositItem />
        <DepositItem />
      </div>
    </div>
  );
}
