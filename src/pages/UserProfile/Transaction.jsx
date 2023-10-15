import TransactionItem from "../../features/profile/TransactionItem";
import TransactionMenu from "../../features/profile/TransactionMenu";

export default function Transaction() {
  return (
    <div className="flex justify-center w-full pt-20">
      <div className="flex flex-col">
        <div className="flex gap-8 py-2">
          <div className="hover:border-b-4 border-red-500 py-2 cursor-pointer">Transaction History </div>
          <div className="hover:border-b-4 border-red-500 py-2 cursor-pointer">Deposit History </div>
        </div>
        <TransactionMenu />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </div>
    </div>
  );
}
