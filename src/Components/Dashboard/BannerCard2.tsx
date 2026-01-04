import dashPic from "../../assets/dashPhoto.png";

const BannerCard2 = () => {
  return (
    <div className="w-163.5 h-full rounded-2xl shadow-md mr-3.5 p-[17.5px] bg-white relative">
      {/* text */}
      <div className="flex flex-col h-full z-10 absolute pr-53.25 pt-5 pb-3.25 pl-5.5">
        <h2 className="text-lg font-bold font-inter text-white">
          Work with the Rockets
        </h2>
        <h3 className="text-[12px] mt-3 font-bold font-inter text-white">
          Wealth creation is an evolutionarily recent positive-sum game. It is
          all about who take the opportunity first.
        </h3>
        <a
          href="http://nekocalc.com/px-to-tailwind-converter"
          className="block font-inter text-white font-bold text-md mt-32 hover:text-xl transition-all duration-300 hover:font-semibold"
        >
          Read more →
        </a>
      </div>
      {/* image */}
      <div
        className="
  overflow-hidden
  w-154.75 h-63.75
  rounded-xl
  absolute bottom-[17.5px] top-[17.5px] left-[17.5px] right-[17.5px]
  shadow-[inset_0_4px_8px_rgb(51_65_85/0.7)]
"
      >
        <img
          src={dashPic}
          alt="collabImage"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BannerCard2;
