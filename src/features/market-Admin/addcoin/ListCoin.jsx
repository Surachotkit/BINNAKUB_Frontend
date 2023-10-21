
export default function ListCoin({coinList,photoCoin}) {
  
  return (
    <div className="flex  hover:bg-gray-50 cursor-pointer">
      <div className="flex items-center justify-center  ">
        <img src={photoCoin} alt="bitcoin" className="flex w-7 h-7" />
      </div>
      <div className="flex flex-col justify-center p-2  ">
        {/* <span>{getCoinListInDatabase[0].coin_name}</span> */}
        <span>{coinList}</span>
      </div>
    </div>
  );
}
