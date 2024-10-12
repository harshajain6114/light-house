import React from "react";
import darkBannerImg1 from '../assets/dark_bannerImg_1.webp';
import darkBannerImg2 from '../assets/dark_bannerImg_2.webp';
import darkBannerImg3 from '../assets/dark_bannerImg_3.webp';

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center z-10 pt-24 text-center">
      <div className="relative flex flex-col items-center justify-center">
        {/* Text Section */}
        <div className="flex flex-col items-center z-20">
          <h1 className="text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 tracking-wide md:text-4xl sm:text-3xl xs:text-2xl">
            Programmable Data <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">Layer</span>
          </h1>
          <p className="text-xl mt-6 text-white tracking-wide md:text-lg sm:text-base xs:text-sm">
            Powering AI, DePin, NFTs with decentralized storage and encryption
          </p>
        </div>

        {/* Button Section */}
        <div className="flex flex-col items-center justify-center z-10 mt-8 space-y-4">
          <button className="relative border-4 w-64 border-indigo-600 text-indigo-600 bg-transparent py-3 px-6 rounded-lg transition-all duration-300 hover:pl-10 hover:pr-6 hover:bg-indigo-600 hover:text-white tracking-wide">
            DOCUMENTATION
          </button>
          <button className="relative border-4 w-64 border-pink-500 text-pink-500 bg-transparent py-3 px-6 rounded-lg transition-all duration-300 hover:pr-10 hover:pl-6 hover:bg-pink-500 hover:text-white tracking-wide">
            GO TO APP
          </button>
        </div>

        {/* Hexagon Images */}
        <div className="absolute top-[-50px] left-[-40px] w-40 h-40 clip-hexagon z-10">
          <img src={darkBannerImg1} alt="Hexagon 1" className="w-full h-full object-cover clip-hexagon" />
        </div>
        <div className="absolute bottom-[-40px] left-[-40px] w-40 h-40 clip-hexagon z-10">
          <img src={darkBannerImg2} alt="Hexagon 2" className="w-full h-full object-cover clip-hexagon" />
        </div>
        <div className="absolute bottom-[-40px] right-[-40px] w-40 h-40 clip-hexagon z-10">
          <img src={darkBannerImg3} alt="Hexagon 3" className="w-full h-full object-cover clip-hexagon" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
