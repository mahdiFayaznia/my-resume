"use client";
import React from "react";
import Image from "next/image";
import { content } from "../content";
import { createElement, useState } from "react";

const Skills = () => {
  const { skills } = content;
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    let a = document.getElementById("skillModal").showModal();
  }

  return (
    <section id="skills">
      <div className="px-5 py-10">
        {/* modal */}
        <dialog id="skillModal" className="modal">
          <div className="modal-box">
            <div className="grid grid-cols-5 gap-2 pb-10">
              <Image
                className="aspect-square h-20 w-20"
                src={selectSkill?.logo}
                alt="..."
              />
              <h6 className="col-span-4 h-20">{selectSkill?.name}</h6>
            </div>
            <ul className="font-Poppins list-decimal px-4 text-xs !leading-7 sm:text-sm">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <br />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        {/* /modal */}

        {/* content */}
        <div>
          <h2 className="title">{skills.title}</h2>
          <h4 className="subtitle">{skills.subtitle}</h4>
          <br />
          <div className="group/main grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            {skills.skills_content.map((skill, i) => (
              <div
                key={i}
                className="group/icon grid cursor-pointer grid-cols-1 rounded-md border-2 border-slate-200 bg-white hover:!blur-none group-hover/main:blur-sm"
              >
                <div className="grid grid-cols-5 px-4 py-2">
                  <div className="flex items-center justify-start">
                    <Image
                      src={skill.logo}
                      alt="..."
                      className="w-10 duration-200 group-hover/icon:scale-125"
                    />
                  </div>
                  <div className="relative col-span-4">
                    <h6>{skill.name}</h6>
                    <p className="italic">{skill.para}</p>
                    <div
                      onClick={() => {
                        setSelectSkill(skill);
                        openModal();
                      }}
                      className="absolute right-3 top-3 text-xl"
                    >
                      {createElement(skills.icon)}
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2">
                  <progress
                    className="progress progress-primary"
                    value={skill.percent}
                    max="100"
                  ></progress>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* /content */}
      </div>
    </section>
  );
};

export default Skills;
