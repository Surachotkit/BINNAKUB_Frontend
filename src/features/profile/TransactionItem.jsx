
export default function TransactionItem({
  coin_name,
  quantity,
  price,
  type,
  fee,
  el
}) {
  console.log("🚀 ~ file: TransactionItem.jsx:10 ~ el:", el)
  

  return (
    <div className="flex flex-col justify-center items-center gap-5 w-[150vh] ">
      
      <div className="flex justify-evenly items-center hover:bg-gray-50 py-5 border-b w-full ">
        <span className="flex gap-2 flex-1 pl-24">{el.coin_name}</span>
        <span className="flex flex-1">{el.amount}</span>
   
        
        <span className="flex flex-1 ">$ {parseFloat(el.price).toLocaleString()}</span>
     
        {el.type === "BUY" ? (<div className="flex justify-center items-center rounded-full px-10 w-8 h-8 bg-[#C3FFCD] ">
          <span className="flex flex-1 ">{el.type}</span>
        </div>)
        :
        (<div className="flex justify-center items-center rounded-full px-10 w-8 h-8 bg-red-400 ">
          <span className="flex flex-1 ">{el.type}</span>
        </div>)}

        <div className="flex flex-1"></div>
       
        <span className="flex flex-1 ">$ {parseFloat(el.price).toLocaleString()}</span>
        
   
        {/* <span className="flex flex-1">$ {fee}</span> */}
       
      </div>
     
    </div>
  );
}
