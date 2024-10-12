import React from "react";
import darkBannerImg1 from '../assets/dark_bannerImg_1.webp';
import darkBannerImg2 from '../assets/dark_bannerImg_2.webp';
import darkBannerImg3 from '../assets/dark_bannerImg_3.webp';

function HexagonImages() {
  return (
    <div className="relative w-full h-full flex items-center justify-center flex-col md:flex-row">
      {/* First hexagon image (top left) */}
      <img
        src={darkBannerImg1}
        alt="Hexagon 1"
        className="w-60 h-96 clip-hexagon md:absolute md:top-[-400px] md:left-0" // Adjust positioning for larger screens
      />

      {/* Second hexagon image (bottom left) */}
      <img
        src={darkBannerImg2}
        alt="Hexagon 2"
        className="w-96 h-72 clip-hexagon md:absolute md:bottom-0 md:left-0" // Adjust positioning for larger screens
      />

      {/* Third hexagon image (bottom right) */}
      <img
        src={darkBannerImg3}
        alt="Hexagon 3"
        className="w-96 h-72 clip-hexagon md:absolute md:bottom-0 md:right-0" // Adjust positioning for larger screens
      />
    </div>
  );
}

export default HexagonImages;
