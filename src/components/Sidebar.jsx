import Dashboard from "../img/icon/dashboard.png"
import Transaction from "../img/icon/transaction.png"


export default function Sidebar() {
  return (
    <div className="flex h-[75vh] border">
      <div className="flex flex-col ">
        <div className="flex justify-center hover:bg-gray-200 cursor-pointer">

          <div className="flex items-center  p-8 gap-3 w-full justify-center hover:border-l-4 border-l-red-600">
            <img src={Dashboard} alt="dashboard" className="w-6 h-6" />
            <span>Dashboard</span>
          </div>
        </div>

        <div className="flex justify-center hover:bg-gray-200 w-52 cursor-pointer hover:border-l-4 border-l-red-600">

          <div className="flex items-center  p-8 gap-3  w-full justify-center">
          <img src={Transaction} alt="transaction" className="w-7 h-7" />
            <span>Transaction</span>
          </div>
        </div>
      </div>
    </div>
  );
}
