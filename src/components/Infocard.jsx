import React from 'react';

const Infocard = () => {
  return (
    <div className="info relative " id="freelance">
      <div className="top text-center  p-20">
        <div className="head1 text-rose-700 text-5xl font-bold font-tnr text-center">
          Let us connect you
        </div>
        <div className="head2  text-2xl mt-6 font-bold font-tnr text-center">
          SkillItup - A platform that bridges the gap between <br />
          user and client by connecting them together.
        </div>
      </div>

      <div className="grid grid-cols-2 px-20 gap-20 lg:px-32">
        <div className="card1 bg-white rounded-[15px] p-8 py-14">
          <div className="textfield flex flex-col gap-8 items-start">
            <div className="t1 text-[#5C7BAB] text-4xl font-bold font-tnr left-6 ">
              Looking for a freelancer?
            </div>
            <div className="t2 text-black text-2xl font-normal font-roboto left-4">
              We are here to help you find a freelancer as per your project
              requirements
            </div>
            <button className="bg-red-400 duration-300 hover:bg-red-700 text-white text-lg font-bold font-roboto py-3 px-8 rounded-[8px]">
              Find a job
            </button>
          </div>
        </div>
        <div className="card1 bg-white rounded-[15px] p-8 py-14">
          <div className="textfield flex flex-col gap-8 items-start">
            <div className="t1 text-[#5C7BAB] text-4xl font-bold font-tnr left-6 ">
              Looking for work?
            </div>
            <div className="t2 text-black text-2xl font-normal font-roboto left-4">
              Are you a freelancer looking for work? We’ve got your back. We’ll
              bring right job for you.
            </div>
            <button className="bg-red-400 duration-300 hover:bg-red-700 text-white text-lg font-bold font-roboto py-3 px-8 rounded-[8px]">
              Post a job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infocard;
