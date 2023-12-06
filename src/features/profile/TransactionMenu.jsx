export default function TransactionMenu() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-evenly  w-[150vh] p-2 border-y-[1px]">
        <span className="flex flex-1 pl-20">Name</span>
        <span className="flex flex-1">Amount</span>
        <span className="flex flex-1">Price</span>
        <span className="flex flex-1 pl-5">Type</span>
        <span className="flex flex-1 pl-16">Amount</span>
        {/* <span className="flex flex-1 pl-5">Fee</span> */}
      </div>
    </div>
  );
}
