import React from "react";

const Hero = () => {
  return (
    <div className="h-[1028px] pt-20 pb-20 flex flex-col items-center bg-[#263C4C]">
      <div className="w-[701px] h-[496px] text-white bg-[#263C4C] flex flex-col  text-center gap-10">
        <h5 className="font-bold text-base text-[#23A6F0]">Welcome</h5>
        <h1 className="font-bold text-6xl/[80px]">
          Selling on the internet like a pro
        </h1>
        <h4 className="font-normal text- text-xl/[30px]">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </h4>
        <div className=" justify-center gap-[10px] flex ">
          <div>
            <button className="h-[52px] w-[193px] py-[15px] px-10 flex items-center bg-[#23A6F0] rounded-[5px] text-sm/[22px] font-bold ">
              Get Quote Now
            </button>
          </div>
          <div>
            <button className="h-[52px] w-[162px] border-[1px] border-[#23A6F0] rounded-[5px] text-sm/[22px] font-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="h-[292px] w-[1046px] flex gap-[30px]">
        <div className="h-[292px] w-[328px] py-[35px] px-10  bg-white flex flex-col gap-5   ">
          <div className="h-[76px] w-[70px] py-[22px] px-[19px] bg-[#FFDCD1] rounded-[10px]"></div>
          <h5 className="font-bold text-base text-[#252B42]">
            training Courses
          </h5>
          <div className="h-[2px] w-[50px] bg-[#E74040]"></div>
          <p className="font-normal text-sm text-[#737373] ">
            The gradual accumulation of information about atomic and small-scale
            behaviour...
          </p>
        </div>
        <div className="h-[292px] w-[328px] py-[35px] px-10 bg-white flex flex-col gap-5 ">
          <div className="h-[76px] w-[70px] py-[22px] px-[19px] bg-[#B9EAA8] rounded-[10px]"></div>
          <h5 className="font-bold text-base text-[#252B42]">
            2,769 online courses
          </h5>
          <div className="h-[2px] w-[50px] bg-[#E74040]"></div>
          <p className="font-normal text-sm text-[#737373] ">
            The gradual accumulation of information about atomic and small-scale
            behaviour...
          </p>
        </div>
        <div className="h-[292px] w-[328px] py-[35px] px-10 bg-[#23A6F0]  flex flex-col gap-5 ">
          <div className="h-[76px] w-[70px] py-[22px] px-[19px] bg-white rounded-[10px]"></div>
          <h5 className="font-bold text-base text-white">training Courses</h5>
          <div className="h-[2px] w-[50px] bg-white"></div>
          <p className="font-normal text-sm text-white ">
            The gradual accumulation of information about atomic and small-scale
            behaviour...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
