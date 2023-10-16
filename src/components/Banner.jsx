import React from 'react';
import donut1 from '../assets/Ring.png';
import donut2 from '../assets/Sharp Donut.png';

const Banner = () => {
  return (
    <div
      className="leftcol flex justify-between bg-[#5C7BAB] h-screen gap-10 text-white pt-24 "
      id="home"
    >
      <div>
        <div className="textbox1 font-tnr font-bold text-[46px] pt-24 ml-16">
          Your Freelance Dream
          <br />
          Team Awaits.
        </div>
        <div className="centre mt-7 ml-16 font-roboto text-2xl">
          Skill it up bridges the gap between opportunity and talent, one click
          at a time because your job is our duty.
        </div>
        <div className="btn ml-16 mt-11">
          <button className="bg-red-400 hover:bg-red-700 text-white text-xl duration-300 font-bold font-roboto py-3 px-8 rounded-[12px] ">
            Get started
          </button>
        </div>
      </div>
      <div className="image relative mr-20 mt-5">
        <div className="circle1">
          <div className="Ellipse2 w-[510px] h-[510px] bg-gradient-to-b from-yellow-200 via-red-500 to-fuchsia-600 rounded-full "></div>
          <div className="circle2 "></div>
        </div>
        <img
          src="/Ellipse 1.png"
          alt="ig"
          className="absolute right-5 top-5 object-contain w-[471px] h-[471px]"
        />
        <img
          src={donut1}
          alt="img"
          className="absolute -bottom-10 -left-8 w-[47%]"
        />
        <img src={donut2} alt="img" className="absolute -top-4 -right-4" />
      </div>
    </div>
  );
};

export default Banner;
