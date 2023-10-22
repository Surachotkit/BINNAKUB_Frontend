import { useState } from "react";
import MarketButton from "./MarketButton";
import Modal from "../../components/Modal";
import PaymentBuy from "../payment/PaymentBuy";
import PaymentSell from "../payment/PaymentSell";

const MarketItem = ({ coin_list_id, coinName,image_coin, price, change, marketCap, amount, photoCoin }) => {

  const [clickedData, setClickedData] = useState([]);
  const [isOpenBuy , setIsOpenBuy] = useState(false)
  const [isOpenSell , setIsOpenSell] = useState(false)
  const handleItemClick = () => {
    const newClickedData = { coin_list_id, coinName, price, change, marketCap, amount, photoCoin };
    setClickedData(prevData => [...prevData, newClickedData]);
  };


  return (
    <div className="flex flex-col gap-5 w-[180vh]">
      <div className="flex items-center justify-evenly hover:bg-gray-50 py-5 border-b gap-24 " onClick={handleItemClick}>
      {isOpenBuy && (
        <Modal>
          <PaymentBuy coinName={coinName} image_coin={image_coin} price={price} setIsOpenBuy={setIsOpenBuy} />
        </Modal>
      )}

      
      {isOpenSell && (
        <Modal>
          <PaymentSell coinName={coinName} image_coin={image_coin} price={price} setIsOpenSell={setIsOpenSell}/>
        </Modal>
      )}
        <span className="flex flex-1 items-center justify-center gap-2">
          <span className="flex flex-1"></span>
          <img src={photoCoin} alt="photoCoin" className="flex w-9 h-9 " />
          <div className="flex flex-col flex-1">
            <span>{coinName}</span>
          </div>
        </span>
        <span className="flex flex-1">{price}</span>
        <span className=" text-green-500 flex flex-1">{change}%</span>
        <span className="flex flex-1">{marketCap}</span>
        <span className="flex flex-1">{amount}</span>
        <MarketButton data={clickedData} setIsOpenBuy={setIsOpenBuy} setIsOpenSell={setIsOpenSell} />
      </div>
    </div>
  );
}

export default MarketItem;