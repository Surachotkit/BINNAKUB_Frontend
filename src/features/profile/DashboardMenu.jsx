export default function DashboardMenu() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-evenly  w-[100vh] p-2 border-b-2">
        <span className="flex flex-1 pl-20">Name</span>
        <span className="flex flex-1">Amount</span>
        <span className="flex flex-1">Price ( $USDT )</span>
      </div>
    </div>
  );
}
