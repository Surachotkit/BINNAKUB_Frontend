

export default function AdminButton({setIsOpenAddcoin}) {
  
  return (
    <div className="flex flex-col gap-5 flex-1 w-[180vh]">
      <div className="flex items-center justify-center hover:bg-gray-50 py-5 border-b relative">
        <div className="bg-red-200 w-10 h-10 rounded-full text-2xl cursor-pointer hover:bg-red-300"></div>
        <div
          className="flex justify-center items-center absolute cursor-pointer text-3xl top-1/2 -translate-y-1/2 "
          onClick={setIsOpenAddcoin}
        >
          <div>

          +
          </div>
        </div>
      </div>
    </div>
  );
}
