import usd from "../../img/icon/usd.png";
import usdt from "../../img/icon/usdt.png";
import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import axios from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Deposit({ onClose }) {
  const { authUser } = useAuth();
  // console.log(
  //   "🚀 ~ file: Deposit.jsx:16 ~ Deposit ~ authUser:",
  //   authUser.user_id
  // );
  const [deposit, setDeposit] = useState({
    amount: "",
    user_id: authUser.user_id,
  });
  const [topup, setTopup] = useState({
    quantity: ""
  })
  // console.log("🚀 ~ file: Deposit.jsx:12 ~ Deposit ~ deposit:", deposit);
  const navigate = useNavigate();


  const handleSubmitForm = (e) => {
    e.preventDefault();
    setDeposit(deposit);
    axios.post("/deposit/create", deposit);
    axios.patch("/deposit/topup", topup)
    toast("Deposit success")
    onClose()
    // navigate("/");
  };
  // const handleClickAddTopup = () => {

  //   setTopup(topup)
  //   axios.patch("/deposit/topup", topup )
  // }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex justify-between p-4 text-xl">
        <div className="flex items-center gap-2">
          <img src={usd} alt="usd" />
          <span className="font-bold">US Dollar</span>
          <span className="flex text-sm">(USD)</span>
        </div>
      </div>

      <div className="flex justify-between">
        <span className="flex px-6 pb-4">$ 1</span>
        <span className="flex px-6  text-gray-400 text-sm">
          Balance : 500 USDT
        </span>
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-2 w-full px-6">
          <input
            type="text"
            className="border p-2 bg-gray-50 rounded-md w-full"
            placeholder="Please enter amount"
            value={deposit.amount}
            onChange={(e) => setDeposit({ ...deposit, amount: e.target.value })}
          />

          <div className="flex justify-center items-center gap-1 bg-gray-200 w-[8rem] rounded-lg">
            <img src={usd} alt="usd" className="w-8" />
            <span>USD</span>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="flex gap-2 w-full px-6">
            <input
              type="text"
              className="border p-2 bg-gray-50 rounded-md w-full"
              placeholder="0.00"
              value={deposit.amount}
              onChange={(e) =>
                setDeposit({ ...deposit, amount: e.target.value })
              }
       
            />
            <div className="flex justify-center items-center gap-1 bg-gray-200 w-[8rem] rounded-lg">
              <img src={usdt} alt="usd" className="w-8" />
              <span>USDT</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end w-full">
          <span className="flex px-6 text-gray-400 text-sm -mb-2">
            Fee : 0.0125
          </span>
        </div>

        {/* button */}
        <div className="flex justify-center items-center w-full px-5 gap-4">
          <button className="bg-red-500 hover:bg-red-600 w-full rounded-md  text-white h-full p-2"  >
            Deposit
          </button>
          <button
            className="bg-gray-200 w-full rounded-md hover:bg-gray-300 text-[#6D6D6D] h-full p-2"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
