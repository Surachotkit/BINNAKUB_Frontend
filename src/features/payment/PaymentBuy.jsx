import React, { useState, useEffect } from "react";import usdt from "../../img/icon/usdt.png";
import { useAuth } from "../../hooks/use-auth";
import axios from "../../config/axios";
import constantStatus from '../../utils/constant/status';
import { toast } from "react-toastify";


export default function PaymentBuy({ coinName,price,image_coin,setIsOpenBuy}) {
  const { authUser } = useAuth();
  const [ getUsdt, setGetUsdt ] = useState([])
  const [cryptoAmount, setCryptoAmount] = useState('');
  const [usdtAmount, setUsdtAmount] = useState('');
  
  const handleUsdtAmountChange = async (e) => {
    // จำนวน usdt ที่ user กรอกมา
    const inputAmount = e.target.value;
    setUsdtAmount(inputAmount);
    
    if (parseFloat(inputAmount) > 0) {
      const USDT = parseFloat(inputAmount);
      setCryptoAmount(USDT / parseFloat(price.replace(/,/g, '')));  // สูตรคำนวน ซื้อ USDT เท่าไร จะได้ เหรียญ กี่เหรียญ
    } else {
      setCryptoAmount(0);
    }
  };
  
  const handleBuyButtonClick = async () => {
     // user กรอก ราคา มาเกินกว่า balance ไหม
    try{
      if(parseFloat(usdtAmount) > parseFloat(getUsdt?.quantity)){
        toast.error(`Your $USDT amount is not enough.`)
      }else{
          // validate
          const bodyForValidate = {
            user_id: authUser.user_id,
            coin_name: coinName
          };
          let responseValue; 

          const checkValidate = await axios.post('/transaction/validate', bodyForValidate);
          console.log('Check Validate Response:', checkValidate.data.response.validate);

          const bodyTransaction = {
            coin_name: coinName,
            type: constantStatus?.BUY,
            price: parseInt(price.replace(/,/g, '')), /// 123,900.12 ---> 123900.12
            quantity: parseFloat(cryptoAmount) > 0 ? parseFloat(cryptoAmount) : 0,
            fee: 0,
            user_id: authUser?.user_id,
            status: "",
            amountUsdt:  parseFloat(usdtAmount)
          }
          // ถ้าไม่มีให้ create
          if (checkValidate.data.response.validate === constantStatus.FALSE) {
            responseValue = await axios.post("/transaction/create", bodyTransaction);
            if(responseValue.data.response.status === constantStatus.SUCCEDD){ 
              toast.success(`Buy ${coinName} Success`)
              setIsOpenBuy(false);
            }
            // ถ้ามี ให้ update
          } else if (checkValidate.data.response.validate === constantStatus.TRUE) {
            responseValue = await axios.post("/transaction/update", bodyTransaction);
            if(responseValue.data.response.status === constantStatus.SUCCEDD){ 
              toast.success(`Buy ${coinName} Success`)
              setIsOpenBuy(false);
            }
          } else {
            console.log('Validation failed or other status:', checkValidate.data.response.status);
        }
      }
    }catch(error){
      console.log(error)
    }
   
  };
  

  const fetchData = async () => {
   // show balance 
    try {
      const { data: getUsdtByUserId } = await axios.get("/user-profile/getUsdtByUserId");
      setGetUsdt(getUsdtByUserId?.findPortfolioByUserId)
    } catch (err) {
      console.error("Error fetching user profile:", err);
    }
  };

  useEffect(() => {
      fetchData()  
  }, [])


  return (
    <div>
      <div className="flex justify-between p-4 text-xl">
        <div className="flex items-center gap-2">
          <img src={image_coin} alt="usd" className="w-8" />
          <span className="font-bold">{coinName}</span>
        </div>
      </div>

      <div className="flex justify-between">
        <span className="flex px-6 pb-4">$ {price}</span>
        <span className="flex px-6  text-gray-400 text-sm">
          Balance : {parseFloat(getUsdt?.quantity) > 0 ? parseFloat(getUsdt?.quantity) : '0.00'} USDT
        </span>
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-2 w-full px-6">
        <input
            type="text"
            className="border p-2 bg-gray-50 rounded-md w-full"
            placeholder="0.00"
            value={cryptoAmount}
            disabled={true}
          />
          <div className="flex justify-center items-center gap-1 bg-gray-200 w-[8rem] rounded-lg">
            <img src={image_coin} alt="usd" className="w-8" />
            <span>{coinName}</span>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="flex gap-2 w-full px-6">
          <input
              type="text"
              className="border p-2 bg-gray-50 rounded-md w-full"
              placeholder="Please select amount"
              value={usdtAmount}
              onChange={handleUsdtAmountChange}
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
        <div className="flex justify-center items-center w-full px-5 gap-4">
        <button
              className="bg-[#45E468] hover:bg-green-500 w-full rounded-md text-white h-full p-2"
              onClick={handleBuyButtonClick}
            >
            Buy
          </button>
          <button
            className="bg-gray-200 w-full rounded-md hover:bg-gray-300 text-[#6D6D6D] h-full p-2"
            onClick={() => setIsOpenBuy(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}