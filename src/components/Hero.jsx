import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex md:flex-row flex-col h-screen items-center justify-center"
    >
      <div className="flex-1 flex justify-center sm:items-start items-center flex-col xl:px-0 sm:px-16 px-6 mb-[20vh]">
        <div className="flex sm:flex-row flex-col-reverse justify-between items-center w-full">
          <h1 className="flex flex-col flex-1 font-semibold ss:text-[52px] md:text-[67px] xl:text-7xl text-[42px] ">
            <div>
              <div className="flex mx-auto sm:mx-0 max-sm:pl-4 max-w-fit">
                <h3 className="text-gradient">Hello There</h3>
                <span className="bounce text-[#6aadb5]" style={{ "--i": 1 }}>
                  .
                </span>
                <span className="bounce text-[#6aadb5]" style={{ "--i": 2 }}>
                  .
                </span>
                <span className="bounce text-[#6aadb5]" style={{ "--i": 3 }}>
                  .
                </span>
                <span className="bounce text-[#6aadb5]" style={{ "--i": 4 }}>
                  .
                </span>
              </div>
            </div>

            <span className=" absolute fade-out text-slate-800 max-sm:text-[32px]">
              <br />
              General Kenobi...
            </span>
            <span className="ss:text-[62px] md:text-[87px] xl:text-9xl text-[62px] fade-in max-sm:mx-auto">
              I'm Andy
            </span>
          </h1>
          <div>
            <div className="flex justify-center items-center mx-auto text-[3rem]"></div>
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 right-[2vh] pink-gradient"></div>
            <div className="absolute z-[0] w-[45%] h-[50%] rounded-full right-[25vh] bottom-[12vh] blue-gradient"></div>
            <div className="absolute z-[0] w-[40%] h-[20%] top-0 right-[2vh] pink-gradient"></div>
          </div>
        </div>

        <div className="flex ">
          <h2 className=" mx-auto text-center font-semibold lg:pt-2 ss:text-[42px] md:text-[57px] xl:text-5xl text-[32px] text-gradient">
            Welcome to my website
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
