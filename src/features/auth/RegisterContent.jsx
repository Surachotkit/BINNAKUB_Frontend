import registerPhoto from "../../img/registerPhoto.png";

export default function RegisterContent() {
  return (
    <div className="flex justify-center items-center flex-1 border-r">
      <div className="flex flex-col ">
        <div className="flex justify-center items-center">
          <img
            src={registerPhoto}
            alt="loginPhoto"
            className=" h-[20rem] w-[18rem] "
          />
        </div>

        <div className="flex flex-col ">
          <span className="flex justify-center text-[#B6B6B6]">
            Licensed by Thailand's Ministry of Finance and
          </span>
          <span className="flex justify-center  text-[#B6B6B6]">
            Regulated by The Securities and Exchange
          </span>
          <span className="flex justify-center  text-[#B6B6B6]">
            Commission, Thailand.
          </span>
        </div>
      </div>
    </div>
  );
}
