import React from "react";
import { content } from "../content";
import Image from "next/image";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-blue-200">
      <div className="px-5 pt-10">
        <h2 className="title">{Hireme.title}</h2>
        <h4 className="subtitle">{Hireme.subtitle}</h4>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center md:justify-end">
            <Image src={Hireme.image} alt="..." className="max-w-sm md:block" />
          </div>
          <div className="grid self-center pb-6">
            <div className="flex justify-center md:justify-start">
              <div
                className="max-w-sm rounded-xl rounded-br-[8rem]
         border-2 border-blue-950 p-6 shadow-sm"
              >
                <p className="leading-7">{Hireme.para}</p>
                <br />
                <button className="btn btn-outline rounded-br-3xl pr-6">
                  {Hireme.btnText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
