import React from "react";
import { createElement } from "react";
import { content } from "../content";
import ContactForm from "./client/ContactForm";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;

  return (
    <section className="bg-blue-950 text-white" id="contact">
      <Toaster />
      <div className="px-5 py-10">
        <h2 className="title !text-white">{Contact.title}</h2>
        <h4 className="subtitle">{Contact.subtitle}</h4>
        <br />
        <div className="flex flex-col gap-10 md:flex-row">
          <ContactForm />
          <div className="flex flex-1 flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div key={i} className="flex items-center gap-2">
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
