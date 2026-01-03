import banner from "../assets/bannerIMG.png";

const BannerCard1 = () => {
  return (
    <div className="w-231 h-72.5 mt-6 py-4.5 px-5 bg-white shadow-md rounded-2xl flex justify-between">
      {/* col1 */}
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="text-gray-400 font-bold text-[12px] font-inter ">
            Built by developers
          </h2>
          <h1 className="text-gray-700  font-bold text-lg font-inter mt-1 mb-1.5">
            Purity UI Dashboard
          </h1>
          <h4 className="text-gray-400 font-regular text-[14px] font-inter w-[329.5px]">
            From colors, cards, typography to complex elements, you will find
            the full documentation.
          </h4>
        </div>
        <a
          href="https://www.figma.com/design/vYA8tExBkWDJb1IW8ScKxH/Purity-UI-Dashboard---Chakra-UI-Dashboard--Community---Copy-?node-id=2-31&t=M2k3xAwqLqlTNEym-0"
          className="block font-inter font-bold text-md mt-auto hover:text-xl transition-all duration-300 hover:font-semibold"
        >
          Read more →
        </a>
      </div>
      {/* col2 */}
      <div>
        <img src={banner} alt="banner" className="bg-fixed rounded-xl"/>
      </div>
    </div>
  );
};

export default BannerCard1;
