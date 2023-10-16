import React from "react";

const Infocard = () => {
  return (
    <div className="info relative ">
      <div className="top text-center  p-80">
        <div className="head1 text-rose-700 text-5xl font-bold font-tnr absolute top-[10.5rem] right-[40rem]">
          Let us connect you
        </div>
        <div className="head2  text-[30px] font-bold font-tnr absolute top-[15.5rem] right-[32rem]">
          SkillItup - A platform that bridges the gap between <br />
          user and client by connecting them together.
        </div>
      </div>

      <div className="bottom  p-[9rem]">
        <div className="card1 w-[500px] h-[450px] bg-white rounded-[15px] absolute top-[30rem] left-[15rem]">
          <div className="textfield ">
            <div className="t1 text-slate-500 text-[41.65px] font-bold font-tnr absolute top-[2rem] left-6 ">
              Looking for a freelancer?
            </div>
            <div className="t2 text-black text-[32px] font-normal font-roboto absolute top-[9rem] text-center left-4">
              We are here to help you find a <br />
              freelancer as per your project requirements
            </div>
            <button class="bg-red-400 hover:bg-red-700 text-white text-xl font-bold font-roboto py-6 px-8 rounded-[8px] absolute top-[20rem] left-44">
              Find a job
            </button>
          </div>
        </div>
        <div className="card2 w-[500px] h-[450px] bg-white rounded-[15px] absolute top-[30rem] right-[15rem]">
          <div className="textfield ">
            <div className="t1 text-slate-500 text-[41.65px] font-bold font-tnr absolute top-[2rem] left-24 ">
              Looking for work?
            </div>
            <div className="t2 text-black text-[32px] font-normal font-roboto absolute top-[9rem] text-center left-4">
              Are you a freelancer looking for work? We’ve got your back. We’ll
              bring right job for you.
            </div>
            <button class="bg-red-400 hover:bg-red-700 text-white text-xl font-bold font-roboto py-6 px-8 rounded-[8px] absolute top-[20rem] left-44">
              Post a job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infocard;
