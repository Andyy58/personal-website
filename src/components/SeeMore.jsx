import React from "react";
import Tilt from "react-parallax-tilt";

const SeeMore = () => {
  return (
    <Tilt
      className="group flex w-52 h-16 border-slate-400 border-[3px] rounded-full justify-center items-center overflow-hidden cursor-pointer hover:bg-slate-800"
      tiltEnable={false}
      glareEnable={true}
      glarePosition="all"
      scale={1.05}
      glareMaxOpacity={0.15}
    >
      <span className="flex flex-row w-fit h-fit">
        <h3 className="text-slate-300 group-hover:underline group-hover:text-white text-3xl pr-3 ease-in-out duration-200 font-semibold">
          See More
        </h3>
        <div className="relative w-5 flex items-center">
          <span className="group-hover:bg-slate-100 group-hover:w-[0.9rem] group-hover:ml-0 bg-slate-300 ml-2 w-0 h-[4px] rounded-full ease-in-out duration-300" />
          <span className="group-hover:bg-white group-hover:translate-x-2 bg-slate-300  w-[0.70rem] h-[4px] rounded-full absolute rotate-45 top-[35%] ease-in-out duration-200" />
          <span className="group-hover:bg-white group-hover:translate-x-2 bg-slate-300  w-[0.70rem] h-[4px] rounded-full absolute -rotate-45 bottom-[35%] ease-in-out duration-200" />
        </div>
      </span>
    </Tilt>
  );
};

export default SeeMore;
