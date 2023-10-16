import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="p-4 font-roboto fonts text-xl text-white bg-[#5C7BAB] ">
      <div className="flex justify-between">
        <div className="left flex ">
          <div className="logo pr-10">logo</div>
          <div>
            <ul className="capitalize flex gap-[4.25rem] p-1.5 ml-[6.125rem] duration-500 ">
              <li className="home hover:text-gray-300 hover:cursor-pointer">
                Home
              </li>
              <li className="home hover:text-gray-500 hover:cursor-pointer">
                Services
              </li>
              <li className="home hover:text-gray-500 hover:cursor-pointer">
                {" "}
                how it works
              </li>
              <li className="home hover:text-gray-500 hover:cursor-pointer">
                about
              </li>
              <li className="home hover:text-gray-500 hover:cursor-pointer">
                Freelance
              </li>
              <li className="home hover:text-gray-500 hover:cursor-pointer">
                Hire
              </li>
            </ul>
          </div>
        </div>
        <button
          className="bg-red-400 hover:bg-red-700 text-white font-bold font-roboto py-2 px-4 rounded-[12px] "
          onClick={() => navigate("/login")}
        >
          Login/Signup
        </button>
      </div>
    </nav>
  );
};

export default Header;
