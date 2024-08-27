import React, { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import junaid from "../assets/junaid2.jpg";

const Hero = () => {
  const roles = ["WordPress Developer", "Frontend Developer", "UI/UX Designer"]; // List of roles
  const [displayedText, setDisplayedText] = useState(""); // State to keep track of the text being displayed
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0); // Index of the current role being typed
  const [isDeleting, setIsDeleting] = useState(false); // Whether text is being deleted
  const [loopNum, setLoopNum] = useState(0); // Loop count to manage typing of roles
  const typingSpeed = 100; // Speed of typing
  const deletingSpeed = 50; // Speed of deleting
  const delayAfterComplete = 1000; // Delay after typing a complete word

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex]; // Get the current role from the list

      if (isDeleting) {
        // Deleting characters
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      } else {
        // Typing characters
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === currentRole) {
        // Pause after a complete word is typed
        setTimeout(() => setIsDeleting(true), delayAfterComplete);
      } else if (isDeleting && displayedText === "") {
        // Move to the next role after deleting the current one
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length); // Loop back to the start after the last role
      }
    };

    const typingInterval = setInterval(
      () => {
        handleTyping();
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting]);

  return (
    <div
      className="flex flex-col md:flex-row md:items-center md:justify-center w-[90%] mx-auto py-24"
      id="home"
    >
      <div className="text-left md:w-[60%]">
        <h3 className="text-lg md:text-xl font-semibold text-gray-600">
          Hello, It's Me
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 my-4">
          Muhammad Junaid
        </h1>
        <h3 className="text-lg md:text-[25px] font-medium text-gray-700">
          I'm a <span className="text-blue-500 font-bold">{displayedText}</span>
        </h3>

        <div className="flex justify-start my-6 space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl md:text-3xl text-gray-700 hover:text-blue-600 transition" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl md:text-3xl text-gray-700 hover:text-blue-700 transition" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl md:text-3xl text-gray-700 hover:text-pink-500 transition" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-2xl md:text-3xl text-gray-700 hover:text-red-600 transition" />
          </a>
        </div>

        <a
          href="Muhammad-Junaid-CV.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>

      <div className="md:w-[40%] mt-10 md:mt-0 flex justify-center items-center">
        <img
          src={junaid}
          alt="Muhammad Junaid"
          className="w-[65vw] md:w-[30vw] h-[65vw] md:h-[30vw] rounded-full mx-auto md:mx-0 shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
