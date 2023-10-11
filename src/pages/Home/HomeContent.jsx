import gift from "../../img/icon/gift.png";

export default function HomeContent() {
  return (
    <div className="flex">
      <div className="flex justify-center items-center h-[90vh]">
        <div className="flex flex-col justify-center p-20 w-[100vh]">
          <div className="flex flex-col text-[2.5rem] font-bold">
            <p>
              <span className="text-red-500">10 Million</span> Users Chose Us
            </p>
            <span>Find Out Why Today</span>
          </div>

          <div className="flex flex-col  text-sm text-gray-500 py-5">
            <span>Trade token on product</span>
            <span>Just by connecting your wallet</span>
          </div>

          <div>
            <button className="flex justify-center items-center border border-red-500 text-red-500 text-lg rounded-full w-28 h-10 hover:bg-gray-100 ">
              Get start
            </button>
          </div>

          <div className="flex items-center gap-2 pt-10">
            <img src={gift} alt="gift" className="flex h-6" />
            <span className="text-sm text-gray-500">
              Register now and get up to <span className="text-red-500 font-bold">100 USDT</span> in rewards
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
