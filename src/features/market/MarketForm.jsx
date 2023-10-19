import { useState } from "react";
import Modal from "../../components/Modal";
import MarketContent from "./MarketContent";
import MarketItem from "./MarketItem";
import MarketMenu from "./MarketMenu";
import PaymentSell from "../payment/PaymentSell";
import PaymentBuy from "../payment/PaymentBuy";
import { useAuth } from "../../hooks/use-auth";

export default function MarketForm() {


  const {isOpenSell, toggleModalSell} = useAuth()
  const {isOpenBuy, toggleModalBuy} = useAuth()


  return (
    <div className="flex flex-col gap-4">
      {isOpenBuy && (
        <Modal >
          <PaymentBuy />
        </Modal>
      )}

      {isOpenSell && (
        <Modal >
          <PaymentSell/>
        </Modal>
      )}
    
      <div className="flex justify-center items-center">
        <MarketContent />
      </div>
      <div className="flex justify-center items-center">
        <MarketMenu />
      </div>

      <div className="flex flex-col justify-center items-center">
        <MarketItem />
   
      </div>
    </div>
  );
}
