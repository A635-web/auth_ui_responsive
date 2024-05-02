import bg_image from "../assets/images/bg.jpg";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import StudentForm from "./Individual";
import InstituteForm from "./Organisation";
import batchmates from "../assets/images/T_1.jpg";
import HighlightText from "./Highlightedtext.jsx";

import Aos from "aos";
import "aos/dist/aos.css";
const colors = {
  primary: "#060606",
  background: "#f5f5f5",
  disbaled: "#090909",
};

const Signup = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration
      once: true, // Whether animation should only happen once
      easing: "ease-out", // Easing function for the animation
      // You can add more customization options here
    });
  }, []);

  const [profile, setProfile] = useState("User");

  const [activeTab, setActiveTab] = useState("User");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white lg:flex overflow-hidden">
      <div
        className="lg:w-screen lg:h-[60rem] lg:fixed"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="hidden lg:block images">
          <div className="lg:w-2/3">
            <img
              src={bg_image}
              alt="background"
              className="hidden lg:block rounded-2xl h-screen border-slate-200 shadow-xl"
            />
            <img
              src={batchmates}
              className="hidden lg:block lg:fixed lg:top-36 lg:w-1/2 lg:left-24 border-slate-200 rounded-3xl transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-md"
              alt="batchmates"
            />
          </div>
        </div>
      </div>
      <div className="everythingExceptImages lg:absolute lg:w-[22rem] xl:w-[26rem] lg:left-2/3 xl:right-6">
        <div className="pt-6 py-3 mx-auto">
          <div className="text-[2.2rem] md:text-5xl lg:text-[2.5rem] leading-snug md:leading-normal text-center">
            Welcome to our
            <HighlightText text={"Community!"} />
          </div>

          <p className="text-center text-sm mt-8">Select the type of Account</p>
        </div>
        <div className="mb-6 w-3/4 mx-auto md:w-1/2 lg:w-3/4 border border-gray-400 justify-center items-center rounded-full flex gap-3 lg:gap-1">
          <button
            className={`px-4 w-full py-2 align-middle rounded-full transition-all duration-300 ${
              activeTab === "User"
                ? "bg-blue-800 text-white font-semibold"
                : "text-gray-800 font-semibold hover:bg-gray-200 hover:text-blue-800"
            }`}
            onClick={() => handleTabChange("User")}
          >
            Individual
          </button>
          <button
            className={`px-4 py-2 w-full align-middle rounded-full transition-all duration-300 ${
              activeTab === "organisation"
                ? "bg-blue-800 text-white font-semibold"
                : "text-gray-800 font-semibold hover:bg-gray-200 hover:text-blue-800"
            }`}
            onClick={() => handleTabChange("organisation")}
          >
            Organisation
          </button>
        </div>

        {activeTab === "User" && <StudentForm />}
        {activeTab === "organisation" && <InstituteForm />}
      </div>
    </div>
  );
};

export default Signup;
