import React from "react";

const Footer = () => {
  return (
    <div className="footer  p-64 bg-[#5C7BAB]">
      <div className="text flex justify-evenly m-7 text-zinc-100 text-xl font-normal font-roboto  ">
        <ul className="one absolute right-[40rem]">
          <li className="home hover:text-red-300 hover:cursor-pointer">
            Terms
          </li>
          <br />
          <li className="home hover:text-red-300 hover:cursor-pointer">
            Services
          </li>
          <br />
          <li className="home hover:text-red-300 hover:cursor-pointer">
            Terms of use
          </li>
        </ul>
        <ul className="two absolute right-[25rem]">
          <li className="home hover:text-red-300 hover:cursor-pointer">X</li>
          <br />
          <li className="home hover:text-red-300 hover:cursor-pointer">
            Instagram
          </li>
          <br />
          <li className="home hover:text-red-300 hover:cursor-pointer">
            Facebook
          </li>
        </ul>
        <ul className="three absolute right-[10rem]">
          <li className="home hover:text-red-300 hover:cursor-pointer">
            Privacy policy
          </li>
          <br />
          <li className="home hover:text-red-300 hover:cursor-pointer">
            About us
          </li>
          <br />
          <li className="home hover:text-red-300 hover:cursor-pointer">
            Contact us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
