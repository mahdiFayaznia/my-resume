"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY",
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        },
      );
  }; // /Sending Email

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-1 flex-col gap-5 text-slate-800"
      >
        {/* Input Name as same as email js templates values */}
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          required
          className="rounded border border-slate-600 p-3"
        />
        <input
          type="email"
          name="user_email"
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
          placeholder="Email Id"
          required
          className="text rounded border border-slate-600 p-3"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="h-44 resize-none rounded border border-slate-600 p-3"
          required
        ></textarea>
        <button className="btn rounded-br-3xl pr-6">Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
