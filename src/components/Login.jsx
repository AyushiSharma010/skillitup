import React from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const nav = useNavigate();
  return (
    <div className="login flex justify-center cursor-pointer ">
      <div className="elements p-36 ">
        <img
          src="Rectangle 47.png"
          alt="img"
          className=" absolute top-0 left-0 -z-10 w-full h-screen"
        />
        <div className="rect  w-[838px] h-[460.06px] bg-white rounded-[14.70px]">
          <div className="TellUsAboutYourRequirements text-black text-[33.08px] relative left-[6rem] top-16 font-bold font-tnr">
            Tell us about your requirements
          </div>
          <div className="WhatDoYouWantToDo text-zinc-500 text-xl font-normal font-roboto relative left-[6rem] top-24">
            Hey user, what do you want to do?
          </div>
          <div className="tf flex gap-2 justify-center relative top-[17rem]">
            <div className="text text-zinc-500 text-xl font-normal font-roboto  ">
              Already have an account?
            </div>
            <div className=" text-slate-500 text-xl font-bold font-roboto  cursor-pointer ">
              Login
            </div>
          </div>
          <div className="buttton flex justify-evenly relative top-[8rem]">
            <button className="bg-red-400 hover:bg-red-700 text-white text-xl font-bold font-roboto py-6 px-8 rounded-[8px] "
          onClick={() => navigate("/signup")}
             >
              I am looking for freelancer
            </button>
            <button className="bg-red-400 hover:bg-red-700 text-white text-xl font-bold font-roboto py-6 px-8 rounded-[8px]  "
          onClick={() => nav("/work")}
            >
              I am looking for work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
