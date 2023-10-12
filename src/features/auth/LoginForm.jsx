import LoginInput from "./LoginInput";

export default function LoginForm() {
  return (
    <form className="flex justify-center flex-1">
      <div className="flex h-[90vh]">
        <div className="flex flex-col justify-center w-[600px] p-5">
          <div className="flex justify-center pb-5 text-[1.5rem] font-bold">
            Welcome to Binnakub!
          </div>
          <LoginInput placeholder="EMAIL ADDRESS" />
          <span className="text-red-500 pb-5">Invalid</span>
          <LoginInput placeholder="PASSWORD" type="password" />

          <span className="text-red-500 pb-5">Invalid</span>
          <button className="flex justify-center bg-red-500 rounded-md w-full p-2 text-[#D9D9D9] hover:bg-red-600">
            LOGIN
          </button>
        </div>
      </div>
    </form>
  );
}
