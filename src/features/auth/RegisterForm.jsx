export default function RegisterForm() {
  return (
    <form className="flex justify-center flex-1">
      <div className="flex h-[90vh]">
        <div className="flex flex-col justify-center w-[600px] p-5">
          <div className="flex justify-center pb-5 text-[1.5rem] font-bold">
          REGISTER
          </div>
          <input
            type="text"
            className="block border p-3 pl-10 w-full rounded-md"
            placeholder="EMAIL ADDRESS"
          />
          <span className="text-red-500 pb-5">Invalid</span>
          <input
            type="text"
            className="block border p-3 pl-10 w-full rounded-md"
            placeholder="PASSWORD"
          />
          <span className="text-red-500 pb-5">Invalid</span>
          <input
            type="text"
            className="block border p-3 pl-10 w-full rounded-md"
            placeholder="CONFIRM PASSWORD"
          />
          <span className="text-red-500 pb-5">Invalid</span>
          <button className="flex justify-center bg-red-500 rounded-md w-full p-2 text-[#D9D9D9] hover:bg-red-600">
          JOIN BINNAKUB
          </button>
        </div>
      </div>
    </form>
  );
}
