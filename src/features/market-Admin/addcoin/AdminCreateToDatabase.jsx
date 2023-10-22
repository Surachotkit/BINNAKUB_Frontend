import { useState } from "react";
import { useAuth } from "../../../hooks/use-auth";

export default function AdminCreateToDatabase({ addCoin, onClose }) {
 
  const { setIsOpenAddcoinMore } = useAuth();

  const [file, setFile] = useState(null);
  const [input, setInput] = useState({
    coin_name: "",
    quantity: "",
  });
  // const [onClose,setOnclose] = useState(false)
  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image_coin", file);
      formData.append("message", JSON.stringify(input));
      await addCoin(formData);
      onClose()
      
      
    } catch (err) {
      console.log(err);
    }
    // addCoin()
  };



  return (
    <form
      className="flex flex-col justify-center items-center w-72 gap-2 py-4 absolute right-[14.2rem] bottom-[18.2rem] mx-auto border rounded-lg shadow-xl p-2  bg-white"
      onSubmit={handleOnSubmit}
    >
      <div className="flex flex-col gap-3">
        <input
          type="text"
          className="border w-full  pl-7 p-2  rounded-md "
          placeholder="Please enter Coin"
          name="coin_name"
          value={input.coin_name}
          onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
        />

        <input
          type="text"
          className="border w-full  pl-7 p-2  rounded-md"
          placeholder="Please enter Amount"
          name="quantity"
          value={input.quantity}
          onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
        />
        <input
          type="file"
          className="w-full  pl-7 p-2  rounded-md"
          onChange={(e) => {
            if (e.target.files[0]) {
              console.log(e.target.files);
              setFile(e.target.files[0]);
            }
          }}

        />
        
        
      </div>

      {/* button */}
      <div className="flex justify-center items-center w-full px-5 gap-4">
        <button className="bg-red-500 hover:bg-red-600 w-full rounded-md  text-white h-full p-2" type="submit">
          Add
        </button>
        <button
          className="bg-gray-200 w-full rounded-md hover:bg-gray-300 text-[#6D6D6D] h-full p-2"
          onClick={() => setIsOpenAddcoinMore(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
