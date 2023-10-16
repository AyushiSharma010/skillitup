import React from "react";

const Working = () => {
  return (
    <div className="working relative">
      <div className="text p-80 bg-[#F0F6FF]">
        <div className="name text-black text-5xl font-bold font-tnr absolute top-[10.5rem] left-[44rem]">
          How does it work?
        </div>
        <img
          src="Business Idea.png"
          alt="img"
          className="image absolute top-[4rem] left-[34rem]"
        />
      </div>
      <div className="bottom p-80 ">
        <div className="image1 p-40">
          <img
            src="Rectangle 21.png"
            alt="img"
            className="img absolute top-[25rem] right-36"
          />
          <div className="rectangle w-[514px] h-[415px] bg-white rounded-[20px] border border-black absolute top-[40rem] left-[20rem]">
            <div className="text">
              <div className="one text-red-400 text-5xl font-bold font-tnr absolute top-[4rem] right-[3.5rem]  ">
                01.
              </div>
              <div className="DescribeTheTask text-black text-[40px] font-bold font-tnr absolute top-[9rem] text-center left-[3rem]">
                Describe the task
              </div>
              <div className="text text-black text-[26px] font-normal font-roboto absolute top-[14rem] left-[3rem] text-centre">
                Upload the task with all <br />
                the required details like deadline,
                <br />
                functionalities and budget
              </div>
            </div>
          </div>
        </div>
        <div className="image2 p-40">
          <img
            src="Rect.png"
            alt="png"
            className="img2 absolute top-[70rem] left-36"
          />
          <div className="rectangle w-[514px] h-[415px] bg-white rounded-[20px] border border-black absolute top-[85rem] right-[20rem]">
            <div className="text">
              <div className="one text-red-400 text-5xl font-bold font-tnr absolute top-[4rem] left-[3.5rem]  ">
                02.
              </div>
              <div className="DescribeTheTask text-black text-[40px] font-bold font-tnr absolute top-[9rem] text-center right-[3rem]">
                Choose a freelancer
              </div>
              <div className="text text-black text-[26px] font-normal font-roboto absolute top-[14rem] right-[3rem] text-right">
                We have a great community of freelancers who are willing to{" "}
                <br /> work with you so choose your <br /> freelancer wisely..
              </div>
            </div>
          </div>
        </div>
        <div className="image3 p-80">
          <img
            src="Rectangle 21.png"
            alt="img"
            className="img absolute top-[115rem] right-36"
          />
          <div className="rectangle w-[514px] h-[415px] bg-white rounded-[20px] border border-black absolute top-[130rem] left-[20rem]">
            <div className="text">
              <div className="one text-red-400 text-5xl font-bold font-tnr absolute top-[4rem] right-[3.5rem]  ">
                03.
              </div>
              <div className="DescribeTheTask text-black text-[40px] font-bold font-tnr absolute top-[9rem] text-center left-[3rem]">
                Get it done
              </div>
              <div className="text text-black text-[26px] font-normal font-roboto absolute top-[14rem] left-[3rem] text-centre">
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
