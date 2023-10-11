export default function MarketButton() {
  return (
    <div className="flex gap-4">
      <button className="bg-green-200 w-20 h-full rounded-full hover:bg-green-300">Buy</button>
      <button className="bg-red-200 w-20 h-full rounded-full hover:bg-red-300">Sell</button>
    </div>
  );
}
