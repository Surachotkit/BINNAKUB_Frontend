import { useAuth } from "../../hooks/use-auth";

export default function MarketButton() {
  
  const { toggleModalBuy, toggleModalSell, authUser } = useAuth();
  
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
      onClick={toggleModalBuy}>
        Buy
      </button>
      <button
      disabled={!authUser}
        className={isSell("sell")}
        onClick={toggleModalSell}
      >
        Sell
      </button>
    </div>
  );
}
