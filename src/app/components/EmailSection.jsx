"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import SentSuccessful from "./SentSuccessful";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false); // New state for email error
  const [emailData, setEmailData] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setEmailSubmitted(true);
        setEmailError(false); // Reset the error state on successful submission
        setEmailData(data);
      } else {
        setEmailError(true); // Set the error state on unsuccessful submission
      }
    } catch (error) {
      console.error('Error:', error);
      setEmailError(true); // Set the error state on network error
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
    <div className="bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.5)_50%,_rgba(16,185,129,0.5))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-2xl absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m always seeking new opportunities, and my inbox is always
          open. Whether you have a question, wish to discuss a project,
          or simply want to say hello, please don&apos;t hesitate to reach out.
          I&apos;ll make sure to get back to you as soon as possible!
        </p>
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com/MarcCG0" target="_blank" rel="noopener noreferrer">
            <Image src={GithubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/marc-camps-garreta-9a7747264/" target="_blank" rel="noopener noreferrer">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </a>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <SentSuccessful
          email={emailData.email}
          subject={emailData.subject}
          body={emailData.message}
        />
        ) : (
          <>
            {emailError ? (
              <p className="text-red-500 text-xl font-bold text-center mt-4">
                Couldn&apos;t send the email. Please try again later.
              </p>
            ) : null}
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter the subject of your inquiry."
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Type your message here."
                />
              </div>
              <button
                type="submit"
                className="text-white font-medium py-2.5 px-5 rounded-lg w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
              >
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
