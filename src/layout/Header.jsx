import { Link } from "react-router-dom";
import logo from "../img/icon/logo.png";
import { useAuth } from "../hooks/use-auth";
import { useState } from "react";
import Modal from "../components/Modal";
import Deposit from "../features/deposit/Deposit";
import Dropdown from "./Dropdown";

export default function Header() {
  const { authUser } = useAuth();
  // console.log("🚀 ~ file: Header.jsx:9 ~ Header ~ authUser:", authUser);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      {isOpen && (
        <Modal >
          <Deposit onClose={() => setIsOpen(false)} />
        </Modal>
      )}

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
          <div className="flex gap-4">
            {authUser ? (
              <button
                className="flex justify-center items-center bg-gray-100 w-full h-full p-4 rounded-full text-gray-500 hover:bg-gray-200"
                onClick={toggleModal}
              >
                Deposit
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
              {authUser.role}
            </button>
          ) : (
            <Link to="/register">
              <button className="flex justify-center items-center bg-red-500 w-full h-full p-4 text-white rounded-full hover:bg-red-600">
                Register
              </button>
            </Link>
          )}

          {authUser ? (
            <Dropdown/>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
