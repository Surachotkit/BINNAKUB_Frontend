import { useState } from "react";
import Modal from "../../components/Modal";
import MarketContent from "./MarketContent";
import MarketItem from "./MarketItem";
import MarketMenu from "./MarketMenu";

export default function MarketForm() {
  const [isOpen, setIsOpen] = useState(true);
  // console.log(isOpen)


  const toggleModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="flex flex-col gap-4">
      {isOpen && (<Modal open={isOpen} onClose={toggleModal} />)}
      <div className="flex justify-center items-center">
        <MarketContent />
      </div>
      <div className="flex justify-center items-center">
        <MarketMenu />
      </div>

      <div className="flex flex-col justify-center items-center">
        <MarketItem />
        <MarketItem />
        <MarketItem />
        <MarketItem />
        <MarketItem />
        <MarketItem />
      </div>
    </div>
  );
}
