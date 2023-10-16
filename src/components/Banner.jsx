import React from "react";
import App from "../App";
import donut1 from "../assets/Ring.png"
import donut2 from "../assets/Sharp Donut.png"


const Banner = () => {
  return (
    <div className="leftcol flex justify-between bg-[#5C7BAB] text-white ">
      <div>
        <div className="textbox1 font-tnr font-bold text-[46px] pt-40 ml-16">
          Your Freelance Dream
          <br />
          Team Awaits.
        </div>
        <div className="centre mt-7 ml-16 font-roboto text-2xl">
          Skill it up bridges the gap between opportunity and <br />
          talent, one click at a time because your job is our duty.
        </div>
        <div className="btn ml-16 mt-11">
        <button class="bg-red-400 hover:bg-red-700 text-white text-xl font-bold font-roboto py-4 px-6 rounded-[12px] ">
  Get started
</button>
<br />
<br />
<br />
<br /><br /><br /><br /><br />
<br />

        </div>
      </div>
      <div className="image relative mr-40">
        <div className="circle1">
          <div class="Ellipse2 w-[581px] h-[581px] bg-gradient-to-b from-yellow-200 via-red-500 to-fuchsia-600 rounded-full "></div>
          <div className="circle2 "></div>
        </div>
        <img src="/Ellipse 1.png" alt="ig" className="absolute right-8 top-8" />
        <img src={donut1} alt="img" className="absolute -bottom-2 -left-8"/>
        <img src={donut2} alt="img" className="absolute top-2 right-2"/>
      </div>
    </div>
  );
};

export default Banner;
