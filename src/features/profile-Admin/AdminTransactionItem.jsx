

export default function AdminTransactionItem({coin_name, quantity, price, type, fee, user_id}) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-[150vh] ">
      <div className="flex justify-evenly items-center hover:bg-gray-50 py-5 border-b w-full">
        <span className="flex gap-2">
      
          {coin_name}
        </span>
        <span>{quantity}</span>
        <div className="flex justify-center items-center flex-col">
          <span>$ {price}</span>

        </div>
        <div className="flex justify-center items-center rounded-full px-10 w-8 h-8 bg-[#C3FFCD] ">

        <span>{type}</span>
        </div>
        <div className="flex justify-start items-center flex-col">
          <span>$ {price}</span>
 
        </div>
        <span>$ {fee}</span>
        <span>{user_id}</span>
      </div>
    </div>
  );
}
