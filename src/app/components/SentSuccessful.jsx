import React from 'react';
import { TypeAnimation } from "react-type-animation";


const TypewriterText = ({ text }) => (
  <TypeAnimation>
    {text}
  </TypeAnimation>
);


const SentSuccessful = ({ email, subject, body }) => {

  // Define different truncation lengths based on screen size
  const truncationLength = window.innerWidth < 768 ? 17 : 40;

  const truncatedEmail = email.length > truncationLength ? email.slice(0, truncationLength) + ' ...' : email;
  const truncatedSubject = subject.length > truncationLength ? subject.slice(0, truncationLength) + ' ...': subject; 
  const truncatedBody = body.length > truncationLength ? body.slice(0, truncationLength) + ' ...' : body; 

  return (
    <div>
      <h2 className="text-cyan-200 text-2xl font-semibold mb-4">
        <span className="text-cyan-200 fade-in">Email Sent Successfully</span>
      </h2>
      <pre className="text-cyan-200 animate-pulse">
        {JSON.stringify(
          {
            email: truncatedEmail,
            subject: truncatedSubject,
            body: truncatedBody,
          },
          null,
          2
        )}
      </pre>
    </div>
  );
};

export default SentSuccessful;
