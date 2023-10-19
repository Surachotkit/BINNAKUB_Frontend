import { useAuth } from "../../../hooks/use-auth";

export default function AdminCreateToDatabase() {
  const { setIsOpenAddcoinMore } = useAuth();
  return (
    <div className="flex flex-col justify-center items-center w-72 gap-2 py-4 absolute right-[14.5rem] bottom-[13.7rem] mx-auto border rounded-lg shadow-xl p-2  bg-white">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          className="border w-full  pl-7 p-2  rounded-md "
          placeholder="Please enter Coin"
        />

        <input
          type="text"
          className="border w-full  pl-7 p-2  rounded-md"
          placeholder="Please enter Amount"
        />
        <input type="file" className="w-full  pl-7 p-2  rounded-md" />
      </div>

      {/* button */}
      <div className="flex justify-center items-center w-full px-5 gap-4">
        <button className="bg-red-500 hover:bg-red-600 w-full rounded-md  text-white h-full p-2">
          Add
        </button>
        <button
          className="bg-gray-200 w-full rounded-md hover:bg-gray-300 text-[#6D6D6D] h-full p-2"
          onClick={() => setIsOpenAddcoinMore(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
