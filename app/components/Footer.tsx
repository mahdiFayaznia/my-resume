import React from "react";
import { content } from "../content";

const Footer = () => {
  const { footer } = content;

  return (
    <section id="footer">
      <div className="px-5 py-10">
        <footer className="text-center">{footer.text}</footer>
      </div>
    </section>
  );
};

export default Footer;
