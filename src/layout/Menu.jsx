import Find from "../img/icon/find.png";

export default function Menu() {
  return (
    <div>
      <div className="relative">
        <div className="flex ">
          <img
            src={Find}
            alt="find"
            className=" absolute fill-black bg-black"
          />
        </div>
        <input
          type="text"
          className=" border  outline-none hover:focus:border-red-500 p-2 "
        ></input>
      </div>
    </div>
  );
}
