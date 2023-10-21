export default function MarketMenu() {
  return (
    <div className="flex flex-col  w-[180vh]">
      <div className="flex justify-center items-center">
        <div className="flex items-center justify-center bg-gray-50 w-full gap-24 ">
          <span className="flex"></span>
          <span className="flex flex-1 ">Name</span>
          <span className="flex flex-1">Price</span>
          <span className="flex flex-1">Change</span>
          <span className="flex flex-auto pl-8 ">Market Cap</span>
          <span className="flex flex-auto ">Amount</span>
          <span className="flex flex-auto ">Trade</span>
        </div>
      </div>
    </div>
  );
}
