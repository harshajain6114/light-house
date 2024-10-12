import React from "react";
import HexagonImages from "./HexagonImages"; // Import the HexagonImages component
import StatsBox from "./StatsBox"; // Import the StatsBox component
import "./logos.css";
import Landing from "./Landing";
import Features from "./Features";
import TrustedBy from "./TrustedBy";
import Key from "./Key";
import Testimonials from "./Testimonials";

import Start from "./Start";


const MainContent = () => {
  return (
// Main Container
<div className="relative flex flex-col items-center w-full bg-black">

{/* Section 1: Title and Paragraph */}
<Landing/>
{/* Section 3: Hexagon Images */}


{/* Section 4: Stats Box */}
<StatsBox />

{/* Section 5: Trusted By Logos */}
<div className="flex flex-col bg-black items-center justify-center w-full h-screen">
  <TrustedBy/>
</div>


 <div className="flex flex-col mt-10 bg-black items-center justify-center w-full h-full">
<Features/>
</div>




<div className="flex flex-col mt-10 bg-black items-center justify-center w-full h-full">
 <Key/>

</div>
<div className="flex flex-col mt-10 bg-black  justify-center items-center w-full h-full">
  <Testimonials/>
</div>
<Start/>


   </div>
   
  );
};
export default MainContent;

