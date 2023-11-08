import React from "react";
import { content } from "../content";
import Image from "next/image";
import ClientBtn from "./client/ClientBtn";

const Testimonials = () => {
  const { Testimonials } = content;

  return (
    <section>
      <div className="h-screen px-5 py-10">
        <h2 className="title">{Testimonials.title}</h2>
        <h4 className="subtitle">{Testimonials.subtitle}</h4>
        <br />
        <div className="mx-auto grid grid-cols-1 gap-y-10 lg:w-[50%]">
          {Testimonials.testimonials_content.map((content, i) => (
            <div className="rounded-lg bg-slate-300" key={i}>
              <div className="grid grid-cols-8">
                <div className="col-span-2 lg:col-span-1">
                  <Image className="rounded-l-lg" src={content.img} alt="..." />
                </div>
                <div className="col-span-6 flex justify-start pl-4 lg:col-span-7">
                  <div className="flex items-center justify-start">
                    <div>
                      <h6>{content.name}</h6>
                      <p>{content.review}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div>
            <ClientBtn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
