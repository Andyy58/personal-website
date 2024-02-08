import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const Card = ({ name, description, link }) => {
  return (
    <Tilt
      tiltMaxAngleX={0.01}
      tiltMaxAngleY={7}
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#FFFFFF"
      glarePosition="all"
      glareBorderRadius="18px"
      transitionSpeed={1500}
      scale={1.03}
      tiltReverse
      className="card grid min-h-[500px] max-w-[350px] rounded-[18px] frosted-gradient text-center overflow-auto z-[2] m-5"
    >
      <div className="card-image bg-jingliu bg-cover"></div>
      <div className="card-text m-6">
        <h2 className=" font-semibold text-2xl text-slate-100">{name}</h2>
        <p className=" text-sm text-slate-300">{description}</p>
      </div>
      <div className="link flex justify-center">
        <Link to={link}>
          <img
            src="/images/github.svg"
            className=" w-[53px] h-[53px] shadow-white rounded-full wrap-shadow z-[3]"
          />
        </Link>
      </div>
    </Tilt>
  );
};

export default Card;
