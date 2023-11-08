"use client";
import React from "react";
import Image from "next/image";
import { content } from "../content";
import Link from "next/link";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-blue-100 " id="projects">
      <div className="grid min-h-screen grid-cols-1 px-5 pt-10">
        <div>
          <h2 className="title">{Projects.title}</h2>
          <h4 className="subtitle">{Projects.subtitle}</h4>
          <br />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-end">
            <Image
              src={Projects.image}
              alt="..."
              className="lg:w-[50%]"
            />
          </div>

          <div className="relative">
            <div className="carousel lg:w-[50%]">
              {Projects.project_content.map((item, i) => (
                <div
                  key={i}
                  id={`slide${i}`}
                  className="carousel-item relative w-full"
                >
                  <Image src={item.image} alt="..." className="w-full" />
                </div>
              ))}
            </div>

            <div className="pb-10 flex space-x-2">
              {Projects.project_content.map((item, i) => (
                <Link key={i} href={`#slide${i}`} className="btn btn-xs">
                  {i + 1}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
