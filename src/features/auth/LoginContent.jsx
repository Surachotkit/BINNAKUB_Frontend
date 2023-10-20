import loginPhoto from "../../img/loginPhoto.png";

export default function LoginContent() {
  return (
    <div className="flex justify-center items-center flex-1 border-r">
      <div className="flex flex-col ">
        
        <div className="flex justify-center items-center">
          <img
            src={loginPhoto}
            alt="loginPhoto"
            className="h-[20rem] w-[30rem] "
          />
        </div>

        <div className="flex flex-col ">
          <span className="flex justify-center text-[1.5rem] font-bold">
            Sign up to get 100 USDT trading fee rebate!
          </span>
          <span className="flex justify-center text-sm text-[#B6B6B6]">
            Follow the registration steps to redeem your rewards
          </span>
          <span className="flex justify-center text-sm text-[#B6B6B6]">
            and start your crypto journey with us! FAQ
          </span>
        </div>
      </div>
    </div>
  );
}
