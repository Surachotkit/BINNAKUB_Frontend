import { useState } from "react";
import LoginInput from "./LoginInput";
import { useAuth } from "../../hooks/use-auth";
import { toast } from "react-toastify";


export default function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input)
    .catch((err) => {
      toast.error(err.response.data.message);
    });
  };

  return (
    <form className="flex justify-center flex-1" onSubmit={handleSubmitForm}>
      <div className="flex h-[90vh]">
        <div className="flex flex-col justify-center w-[600px] p-5">
          <div className="flex justify-center pb-5 text-[1.5rem] font-bold">
            Welcome to Binnakub!
          </div>
          <LoginInput
            placeholder="EMAIL ADDRESS"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          
          {/* <span className="text-red-500 pb-5">Invalid</span> */}
          <LoginInput
            placeholder="PASSWORD"
            type="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />

          {/* <span className="text-red-500 pb-5">Invalid</span> */}
          <button className="flex justify-center bg-red-500 rounded-md w-full p-2 text-[#D9D9D9] hover:bg-red-600 mt-5">
            LOGIN
          </button>
        </div>
      </div>
    </form>
  );
}
