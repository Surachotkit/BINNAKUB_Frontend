import { Link } from "react-router-dom";
import logo from "../img/icon/logo.png";
import Search from "./Search";
import Profile from "../img/icon/profile.png";
import { useState } from "react";

export default function Header() {
  const [authUser, setAuthUser] = useState("");
  return (
    <>
      <div className="flex justify-between gap-8 p-6 h-[10vh]  max-w-[1440px] mx-auto ">
        <div className="flex  items-center gap-10">
          <div className="flex items-center gap-4 cursor-pointer">
            <Link to="/" className="flex items-center gap-4 cursor-pointer">
              <img src={logo} alt="logo" />
              <span className=" text-[24px] font-semibold text-red-500 ">
                BINNAKUB
              </span>
            </Link>
          </div>
          <Link to="/market">
            <div className=" text-gray-500 hover:text-red-500 cursor-pointer">
              Markets
            </div>
          </Link>
        </div>

        <div className="flex gap-4">
          <Search />
          <div className="flex gap-4">
            {authUser ? (
              <button className="flex justify-center items-center bg-gray-100 w-full h-full p-4 rounded-full text-gray-500 hover:bg-gray-200">
                Deoposit
              </button>
            ) : (
              <Link to="/login" className="flex gap-4">
                <button className="flex justify-center items-center bg-gray-100 w-full h-full p-4 rounded-full text-gray-500 hover:bg-gray-200">
                  Login
                </button>
              </Link>
            )}
          </div>

          {authUser ? (
            <button className="flex justify-center items-center bg-red-500  p-4 text-white rounded-full hover:bg-red-600">
              User 1
            </button>
          ) : (
            <Link to="/register">
              <button className="flex justify-center items-center bg-red-500 w-full h-full p-4 text-white rounded-full hover:bg-red-600">
                Register
              </button>
            </Link>
          )}

          {authUser ? (
            ""
          ) : (
            <img
              src={Profile}
              alt="Profile"
              className="flex justify-center hover:cursor-pointer h-8"
            />
          )}
        </div>
      </div>
    </>
  );
}
