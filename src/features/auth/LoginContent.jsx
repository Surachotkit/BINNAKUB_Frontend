import loginPhoto from "../../img/loginPhoto.png";

export default function LoginContent() {
  return (
    <div>
      <div className="flex flex-col ">
        <img src={loginPhoto} alt="loginPhoto" className="" />
        <span>Sign up to get 100 USDT trading fee rebate!</span>
        <span className="flex">
          Follow the registration steps to redeem your rewards and start your
          crypto journey with us! FAQ
        </span>
      </div>
    </div>
  );
}
