import { useState } from "react";
import Profile from "../img/icon/profile.png";
import { useAuth } from "../hooks/use-auth";
import Account from "../img/icon/account.png";
import Logout from "../img/icon/logout.png";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const dropdownProfile = () => {
    setIsOpenProfile(!isOpenProfile);
  };
  const { logout, authUser } = useAuth();
 
  return (
    <div className="relative">
      <div className="">
        <img
          src={Profile}
          alt="Profile"
          className="flex justify-center hover:cursor-pointer h-8"
          onClick={dropdownProfile}
        />
      </div>

      {isOpenProfile && (
        <div className="flex flex-col justify-center items-center w-52 gap-2 py-4 absolute bg-red-500 right-0 translate-y-1 border rounded-lg shadow-xl p-2 ">
          <div className="font-semibold text-white">{authUser.email}</div>

          {authUser.role === "ADMIN" ? (<Link to="/admin/profile/dashboard" className="flex  justify-center hover:bg-red-400 w-full cursor-pointer p-1 gap-4">
              <img src={Account} alt="account" className="w-5" />
              <div className="text-sm text-white ">Account</div>
          </Link>)
          :
          (<Link to="/profile/dashboard" className="flex  justify-center hover:bg-red-400 w-full cursor-pointer p-1 gap-4">
              <img src={Account} alt="account" className="w-5" />
              <div className="text-sm text-white ">Account</div>
          </Link>)}
          
          <div
            className="flex  justify-center hover:bg-red-400 w-full cursor-pointer p-1 gap-4"
            onClick={logout}
          >
            <img src={Logout} alt="logout" className="w-5" />
            <div className="text-sm text-white ">Log out</div>
          </div>
        </div>
      )}
    </div>
  );
}
