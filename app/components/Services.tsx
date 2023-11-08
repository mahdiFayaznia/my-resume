import React from "react";
import Image from "next/image";
import { content } from "../content";
import ServicesBtn from "./client/ServicesBtn";

const Services = () => {
  const { services } = content;

  return (
    <section id="services">
      <div className="px-5 py-10">
        <h2 className="title">{services.title}</h2>
        <h4 className="subtitle">{services.subtitle}</h4>
        <br />
        <div className="group grid grid-cols-1 gap-10 pb-10 md:grid-cols-2 xl:grid-cols-3">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              className="bg-bg_light_primary grid cursor-pointer grid-cols-1 rounded-xl border-2 border-slate-200 p-4 text-center duration-200 hover:!blur-none 
              group-hover:blur-sm"
            >
              <Image src={content.logo} alt="..." className="mx-auto" />
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
            </div>
          ))}
          {services.service_offer.map((offer, i) => (
            <div
              key={i}
              className="grid cursor-pointer grid-cols-1 rounded-xl border-2 border-slate-200 p-4 text-center duration-200 hover:!blur-none 
              group-hover:blur-sm"
            >
              <div className="divide-y divide-slate-300">
                <h2 className="py-2">{offer.title}</h2>
                <div className="py-1">{offer.col1}</div>
                <div className="py-1">{offer.col2}</div>
                <div className="py-1">{offer.col3}</div>
                <div className="py-1">{offer.col4}</div>
                <div className="py-1">{offer.col5}</div>
                <div className="py-1">
                  <span className="text-4xl">{offer.col61}</span>
                  <br />
                  Per Month
                </div>
                <div className="flex justify-center py-2">
                  <ServicesBtn />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
