"use client";
import React from "react";
import { content } from "../../content";
import Link from "next/link";

const HeroCVBtn = () => {
  const { hero } = content;

  function cvHandler() {}

  return (
    <>
      <button
        className="btn btn-outline rounded-br-3xl pr-6"
        onClick={() => {
          cvHandler();
        }}
      >
        f{hero.btnText}
      </button>
    </>
  );
};

export default HeroCVBtn;
