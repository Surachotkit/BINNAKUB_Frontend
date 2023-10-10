export default function RegisterForm() {
  return (
    <div>
      <form action="" className="border border-red-500">
        <div className="border w-[500px] p-20">
          <div className="flex justify-center pb-5">REGISTER</div>
          <input
            type="text"
            className="block border p-2 w-full rounded-md"
            placeholder="EMAIL ADDRESS"
          />
          <span className="text-red-500">Invalid</span>
          <input
            type="text"
            className="block border p-2 w-full rounded-md"
            placeholder="PASSWORD"
          />
          <span className="text-red-500">Invalid</span>

          <input
            type="text"
            className="block border p-2 w-full rounded-md"
            placeholder="CONFIRM PASSWORD"
          />
          <span className="text-red-500">Invalid</span>
          <button className="flex justify-center bg-red-500 rounded-md w-full p-2 text-[#D9D9D9] hover:bg-red-600">
            JOIN BINNAKUB
          </button>
        </div>
      </form>
    </div>
  );
}
