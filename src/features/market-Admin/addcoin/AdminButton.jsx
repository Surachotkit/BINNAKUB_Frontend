

export default function AdminButton({setIsOpenAddcoin}) {
  
  return (
    <div className="flex flex-col gap-5 flex-1 w-[180vh]">
      <div className="flex items-center justify-center hover:bg-gray-50 py-5 border-b">
        <span
          className="flex justify-center items-center bg-red-200 w-8 h-8 rounded-full text-2xl cursor-pointer hover:bg-red-300"
          onClick={setIsOpenAddcoin}
        >
          +
        </span>
      </div>
    </div>
  );
}
