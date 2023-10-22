import { useAuth } from "../../hooks/use-auth";

export default function MarketButton({data, setIsOpenBuy, setIsOpenSell}) {
  console.log("🚀 ~ file: MarketButton.jsx:4 ~ MarketButton ~ data:", data)
  
  const { authUser } = useAuth();
  
  const isSell = (params) => { 

    if(params==="sell")
      return authUser ? "bg-red-200 w-20 h-full rounded-full hover:bg-red-300 cursor-pointer " : "bg-gray-100 w-20 h-full rounded-full  cursor-no-drop"
    else
      return authUser ? "bg-green-200 w-20 h-full rounded-full hover:bg-green-300 cursor-pointer" : "bg-gray-100 w-20 h-full rounded-full  cursor-no-drop"
  
    }
    
  
  return (
    <div className="flex gap-4 flex-1 ">
      <button disabled={!authUser} 
      className={isSell("buy")}
      onClick={() => setIsOpenBuy(true)}>
        Buy
      </button>
      <button
      disabled={!authUser}
        className={isSell("sell")}
        onClick={() => setIsOpenSell(true)}
      >
        Sell
      </button>
    </div>
  );
}
