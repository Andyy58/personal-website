import React from "react";

export const About = () => {
  return (
    <section id="about">
      <div className="w-full">
        <h2 className=" w-fit ss:text-[52px] md:text-[67px] xl:text-7xl text-[42px] text-gradient font-semibold h-fit sm:py-10">
          About me
        </h2>
      </div>
      <p className="sm:w-3/5 text-xl text-slate-300 leading-8">
        Hi! I'm Andy, a second year student Computer Science student at the
        University of Waterloo as well as a software/web developer with a love
        for problem solving and innovation. In my journey so far as a developer,
        I've explored a multitude of programming languages and concepts through
        both my personal projects and academic ventures, with my current focus
        on the MERN stack languages. What excites me the most about programming
        is the dynamic nature of the field. I like to think of challenges not as
        roadblocks but rather gateways to creativity and mastery. Nothing feels
        better than finding a solution in the most unlikely of places to that
        "unsolveable" problem!
      </p>
      <p className="sm:w-3/5 text-xl text-slate-300 pt-2 leading-8">
        When I have free time outside of programming and school, I like to spend
        my time watching tv shows/anime and playing piano or guitar. I also
        enjoy playing badminton and did competitive swimming when I was younger.
        Outside of indulging in my existing hobbies, I love learning new things.
        At the moment I'm trying to learn how to draw as well as songwriting!
      </p>
      <p className="sm:w-3/5 text-xl text-slate-300 pt-10 pb-4 leading-8">
        While I might not be 4 anymore, one of my quotes to live by:
      </p>
      <blockquote className="sidekick text-slate-100 pt">
        I'm just a kid who's 4. Each day I grow some more. I like exploring. I'm
        Caillou
        <cite>Caillou</cite>
      </blockquote>

      <div className=" text-center pt-20">
        More content and pages currently under construction!
      </div>
    </section>
  );
};

export default About;
