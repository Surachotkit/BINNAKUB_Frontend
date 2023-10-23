
import { useState } from "react";
import Modal from "../../components/Modal";
import AdminMarketEdit from "./action/AdminMarketEdit";
import AdminAddQuanity from "./addStock/AdminAddQuanity";
import AdminAddcoin from "./addcoin/AdminAddcoin";
import { useAuth } from "../../hooks/use-auth";


export default function AdminMarketItem({coinName, price, change, marketCap, amount, coin_list_id, deleteCoin,photoCoin}) {

  const [isModalOpen , setIsModalOpen] = useState(false)

  return (
    <div className="flex flex-col flex-1 w-[180vh]">
      <div className="flex items-center justify-evenly hover:bg-gray-50 py-5 border-b ">
        
      {isModalOpen && (
        <Modal>
          <AdminAddQuanity coinName={coinName} amount={amount} />
        </Modal>
      )}
    
        <span className="flex flex-1 items-center justify-center gap-2 pl-2">
          <img src={photoCoin} alt="imgcoin" className=" w-9 h-9" />
          <div className="flex flex-col ">
            <span>{coinName}</span>
          </div>
        </span>
        <span className="flex flex-1 pl-20">{price}</span>
        <span className="flex flex-1 text-green-500 ">{change}%</span>
        <span className="flex flex-1">{marketCap}</span>
        <span className="flex flex-1 pl-5">{amount}</span>
        <AdminMarketEdit  coin_list_id={coin_list_id} deleteCoin={deleteCoin} setIsModalOpen={setIsModalOpen}/>

      
      </div>
    </div>
  );
}
