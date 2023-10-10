import logo from "../img/icon/logo.png";
import Menu from "./Menu";

export default function Header() {
  return (
    <>
      <div className="flex justify-between gap-8 p-6 ">
        <div className="flex  items-center gap-10">
          <div className="flex items-center gap-4 cursor-pointer">
            <img src={logo} alt="logo" />
            <span className=" text-[24px] font-semibold text-red-500 ">
              BINNAKUB
            </span>
          </div>
          <div className=" text-gray-500 hover:text-red-500 cursor-pointer">
            Markets
          </div>
        </div>

          <Menu/>
        <div className="flex gap-4 ">
          <button className="bg-gray-100 px-6 rounded-full text-gray-500 hover:bg-gray-200">
            Login
          </button>
          <button className="bg-red-500 px-6 text-white p-2 rounded-full hover:bg-red-600">
            Register
          </button>
        </div>
      </div>
    </>
  );
}
