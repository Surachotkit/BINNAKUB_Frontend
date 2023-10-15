import HomeContent from "./HomeContent";
import BackgroundHomePage from "../../img/backgroundHomePage.png";
import bitPhoto from "../../img/bitPhoto.png";

export default function HomePage() {
  return (
    <div className="flex max-w-[1440px] mx-auto">
      <div className="flex">
        <HomeContent />
      </div>

      <div className="flex justify-center items-center flex-1 ">
        <div className="">
          <img src={bitPhoto} alt="backgroundHomePage" className="w-[28rem]" />
        </div>
      </div>
    </div>
  );
}
