import React from 'react';

const Working = () => {
  return (
    <div className="working relative" id="work">
      <div className="text p-20 bg-[#F0F6FF] flex gap-2 items-center justify-center ">
        <img src="Business Idea.png" alt="img" className="image w-28" />
        <div className="name text-black text-5xl font-bold font-tnr text-center">
          How does it work?
        </div>
      </div>
      <div className="bottom ">
        <div className="image1">
          <img
            src="Rectangle 21.png"
            alt="img"
            className="img w-[80%] relative ml-auto right-20"
          />
          <div className="rectangle w-[454px] h-[385px] bg-white rounded-[20px] border border-black absolute top-[35rem] left-[4rem]">
            <div className="text">
              <div className="one text-red-400 text-5xl font-bold font-tnr absolute top-[2rem] right-[3.5rem]  ">
                01.
              </div>
              <div className="DescribeTheTask text-black text-[40px] font-bold font-tnr absolute top-[6rem] text-center left-[3rem]">
                Describe the task
              </div>
              <div className="text text-black text-[26px] font-normal font-roboto absolute top-[12rem] left-[3rem] text-centre">
                Upload the task with all <br />
                the required details like deadline,
                <br />
                functionalities and budget
              </div>
            </div>
          </div>
        </div>
        <div className="image2 my-40">
          <img
            src="Rect.png"
            alt="png"
            className="img2 w-[80%] relative mr-auto left-20"
          />
          <div className="rectangle w-[454px] h-[385px] bg-white rounded-[20px] border border-black absolute top-[85rem] right-[5rem]">
            <div className="text">
              <div className="one text-red-400 text-5xl font-bold font-tnr absolute top-[2rem] left-[3rem]  ">
                02.
              </div>
              <div className="DescribeTheTask text-black text-[40px] font-bold font-tnr absolute top-[6rem] text-center right-[3rem]">
                Choose a freelancer
              </div>
              <div className="text text-black text-[26px] font-normal font-roboto absolute top-[11rem] right-[3rem] text-right">
                We have a great community of freelancers who are willing to{' '}
                <br /> work with you so choose your <br /> freelancer wisely..
              </div>
            </div>
          </div>
        </div>
        <div className="image3 pb-40 mt-60">
          <img
            src="Rectangle 21.png"
            alt="img"
            className="img w-[80%] relative ml-auto right-20"
          />
          <div className="rectangle w-[454px] h-[355px] bg-white rounded-[20px] border border-black absolute top-[135rem] left-[5rem]">
            <div className="text">
              <div className="one text-red-400 text-5xl font-bold font-tnr absolute top-[2rem] right-[3.5rem]  ">
                03.
              </div>
              <div className="DescribeTheTask text-black text-[40px] font-bold font-tnr absolute top-[6rem] text-center left-[2rem]">
                Get it done
              </div>
              <div className="text text-black text-[26px] font-normal font-roboto absolute top-[11rem] left-[2rem] text-centre">
                Get your project done within the deadline. Provide feedback,
                make changes, get it done.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
