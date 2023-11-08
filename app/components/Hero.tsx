import React from "react";
import Image from "next/image";
import { content } from "../content";
import HeroCVBtn from "./client/HeroCVBtn";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      {/* right side with rotate text */}
      <div className="absolute bottom-0 right-0 top-0 -z-10 h-full w-8/12 bg-sky-100 lg:w-[35%]"></div>
      {/* /right side with rotate text */}

      {/* left side */}
      <div className="grid !h-screen grid-cols-1 lg:grid-cols-2">
        {/* first col */}
        <div className="flex items-center justify-center space-y-4 pt-20 px-4 lg:items-end lg:justify-end lg:pb-20">
          <div className="grid grid-cols-1 gap-y-6">
            <h2 className="text-center lg:text-right">{hero.title}</h2>
            <div className="flex justify-center lg:justify-end">
              <HeroCVBtn />
            </div>
            <div>
              {hero.hero_content.map((content, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center space-x-2 text-justify lg:justify-end"
                >
                  <h3>{content.count}</h3>
                  <p>{content.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* /first col */}
        {/* second col */}
        <div className="flex items-end justify-center lg:justify-start">
          <Image className="h-fit" src={hero.image} alt="hero image" />
        </div>
        {/* /second col */}
      </div>
      {/* left side */}
    </section>
  );
};

export default Hero;
