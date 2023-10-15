import Profile from "../img/icon/profile.png";
import Edit from "../img/icon/edit.png";

export default function TabBarProfile() {
  return (
    <div className="flex border p-2 bg-gray-100 h-[15vh]  ">
      <div className="flex justify-evenly items-center w-full gap-2">
        
        <div className="flex gap-4">
          <img src={Profile} alt="profile" />
          <div className="">
            <span>user_full_name</span>
            <img src={Edit} alt="edit" className="cursor-pointer pt-1" />
          </div>
        </div>

        
          <div className="flex bg-white justify-evenly w-[70vh]  p-2 rounded-xl">
            <div className="flex flex-col ">
              <span className="font-bold">Total</span>
              <span>$ 1.50</span>
            </div>
            <div className="flex justify-center items-center flex-col">
              <span className="font-bold">User ID</span>
              <span>1</span>
            </div>
            <div className="flex justify-center items-center flex-col">
              <span className="font-bold">Total</span>
              <span>Personal</span>
            </div>
          </div>
        </div>
     
    </div>
  );
}
