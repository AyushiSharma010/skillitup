import React from 'react';

const Card = () => {
  return (
    <div className="title  bg-[#F0F6FF]" id="services">
      <div className="heading text-black text-5xl font-tnr font-bold p-[6rem] relative !z-20  text-center">
        Browse freelancer by category
      </div>
      <img
        src=" /Squigly Line.png"
        alt="img"
        className=" donut absolute top-[34rem] left-[1rem] z-10 "
      />

      <div className="cards text-black text-[24px] font-normal font-roboto text-center  ">
        <div className="cards1 gap-14 flex justify-between m-20">
          <div className="container1 flex flex-col hover:cursor-pointer hover:scale-95 duration-300 hover:shadow-xl w-[361px] items-center justify-center h-[300px] bg-white rounded-[20px] shadow-md">
            <img
              src="Web Development.png"
              alt="Web"
              className="image w-20 h-20"
            />
            <div className="Rectangle18 ">Web/App Development</div>
          </div>

          <div className="container2 flex flex-col hover:cursor-pointer hover:scale-95 duration-300 hover:shadow-xl items-center justify-center  w-[361px] h-[300px] bg-white rounded-[20px] shadow-md">
            <img
              src="Creative Writing.png"
              alt="img"
              className="image w-20 h-20"
            />
            <div className="Rectangle18 ">Content writing</div>
          </div>

          <div className="container3 flex flex-col hover:cursor-pointer hover:scale-95 duration-300 hover:shadow-xl items-center justify-center  w-[361px] h-[300px] bg-white rounded-[20px] shadow-md">
            <img src="research.png" alt="img" className="image w-20 h-20" />
            <div className="Rectangle18 ">Research</div>
          </div>
        </div>
        <div className="cards2 flex gap-14 justify-between m-20">
          <div className="container4 flex flex-col hover:cursor-pointer hover:scale-95 duration-300 hover:shadow-xl items-center justify-center  w-[361px] h-[300px] bg-white rounded-[20px] shadow-md">
            <img src="presentation.png" alt="img" className="image w-20 h-20" />
            <div className="Rectangle18">Presentation/Report</div>
          </div>

          <div className="container5 flex flex-col hover:cursor-pointer hover:scale-95 duration-300 hover:shadow-xl items-center justify-center  w-[361px] h-[300px] bg-white rounded-[20px] shadow-md">
            <img src="clip editing.png" alt="" className="image w-20 h-20" />
            <div className="Rectangle18">Video/Photo editing</div>
          </div>

          <div className="container6 flex flex-col hover:cursor-pointer hover:scale-95 duration-300 hover:shadow-xl items-center justify-center  w-[361px] h-[300px] bg-white rounded-[20px] shadow-md">
            <img src="Paint Brush.png" alt="" className="image w-20 h-20" />
            <div className="Rectangle18 ">Designing</div>
          </div>
        </div>
        <div className="btn">
          <button className="bg-red-400 hover:bg-red-700 text-white text-xl font-bold font-roboto py-4 duration-300 px-8 rounded-[8px] ">
            Browse more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
