import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="p-6 px-10 font-roboto fonts text-xl text-white bg-[#5C7BAB] absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        <div className="left flex items-center">
          <div className="logo pr-10">logo</div>
          <div>
            <ul className="capitalize flex gap-[3rem] p-1.5 ml-[6.125rem] duration-500 ">
              <li className="home hover:text-gray-200 duration-300 hover:scale-95 hover:cursor-pointer">
                <a href="#home">Home</a>
              </li>
              <li className="home hover:text-gray-200 duration-300 hover:scale-95 hover:cursor-pointer">
                <a href="#services">Services</a>
              </li>
              <li className="home hover:text-gray-200 duration-300 hover:scale-95 hover:cursor-pointer">
                <a href="#work">How it works</a>
              </li>
              <li className="home hover:text-gray-200 duration-300 hover:scale-95 hover:cursor-pointer">
                <a href="#about">About</a>
              </li>
              <li className="home hover:text-gray-200 duration-300 hover:scale-95 hover:cursor-pointer">
                <a href="#freelance">Freelance</a>
              </li>
              <li className="home hover:text-gray-200 duration-300 hover:scale-95 hover:cursor-pointer">
                <a href="#hire">Hire</a>
              </li>
            </ul>
          </div>
        </div>
        <button
          className="bg-red-400 hover:bg-red-700 duration-300 text-white text-base font-semibold font-roboto py-2 px-4 rounded-[10px] "
          onClick={() => navigate('/login')}
        >
          Login/Signup
        </button>
      </div>
    </nav>
  );
};

export default Header;
