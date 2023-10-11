import find from "../img/icon/find.png";

export default function Search() {
  return (
    <div className="flex">
      <div className="flex relative ">
        <div className="flex items-center">
          <img src={find} alt="find" className="flex absolute left-1 h-7 w-7 " />
        </div>

        <input
          type="text"
          className="flex justify-center items-center w-full h-full border py-4  pl-10 rounded-md "
          placeholder="search coin"
        ></input>
      </div>
    </div>
  );
}
