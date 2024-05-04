import bg_image from "../assets/images/bg.jpg";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import StudentForm from "./Individual";
import InstituteForm from "./Organisation";
import batchmates from "../assets/images/T_1.jpg";
import HighlightText from "./Highlightedtext.jsx";


// import Aos from "aos";
// import "aos/dist/aos.css";
// const colors = {
//   primary: "#060606",
//   background: "#f5f5f5",
//   disbaled: "#090909",
// };

// const Signup = () => {
//   useEffect(() => {
//     Aos.init({
//       duration: 2000, // Animation duration
//       once: true, // Whether animation should only happen once
//       easing: "ease-out", // Easing function for the animation
//       // You can add more customization options here
//     });
//   }, []);

//   const [profile, setProfile] = useState("User");

//   const [activeTab, setActiveTab] = useState("User");

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="bg-white lg:flex">
//       <div
//         className="lg:w-[60%]"
//         data-aos="fade-right"
//         data-aos-duration="1000"
//       >
//         <div className="hidden lg:block images">
//           <div className="lg:w-full lg:relative">
//             <img
//               src={bg_image}
//               alt="background"
//               className="hidden lg:block lg:relative rounded-2xl lg:h-screen lg:w-full border-slate-200 shadow-xl"
//             />
//             <img
//               src={batchmates}
//               className="hidden lg:block lg:absolute lg:top-32 lg:w-3/4 lg:right-[12.5%] border-slate-200 rounded-3xl transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-md"
//               alt="batchmates"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="everythingExceptImages flex-auto grow px-6">
//         <div className="pt-6 py-3 mx-auto">
//           <div className="text-[2rem] md:text-5xl lg:text-[2.2rem] leading-snug md:leading-normal text-center">
//             Welcome to our
//             <HighlightText text={"Community!"} />
//           </div>

//           <p className="text-center text-4xl  lg:text-lg font-open_spaced font-semibold mt-5">
//             Select the type of Account!
//           </p>
//         </div>
//         <div className="mb-6 w-3/4 mx-auto md:w-1/2 lg:w-2/3 border border-gray-400 justify-center items-center rounded-full flex gap-3 lg:gap-1">
//           <button
//             className={`px-4 w-full py-2 align-middle rounded-full transition-all duration-300 ${
//               activeTab === "User"
//                 ? "bg-blue-800 text-white font-semibold"
//                 : "text-gray-800 font-semibold hover:bg-gray-200 hover:text-blue-800"
//             }`}
//             onClick={() => handleTabChange("User")}
//           >
//             Individual
//           </button>
//           <button
//             className={`px-4 py-2 w-full align-middle rounded-full transition-all duration-300 ${
//               activeTab === "organisation"
//                 ? "bg-blue-800 text-white font-semibold"
//                 : "text-gray-800 font-semibold hover:bg-gray-200 hover:text-blue-800"
//             }`}
//             onClick={() => handleTabChange("organisation")}
//           >
//             Organisation
//           </button>
//         </div>

//         {activeTab === "User" && <StudentForm />}
//         {activeTab === "organisation" && <InstituteForm />}
//       </div>
//     </div>
//   );
// };

// export default Signup;
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
    <div className="bg-white lg:flex">
      <div
        className="lg:w-[60%]"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="hidden lg:block images">
          <div className="lg:w-full lg:relative">
            <img
              src={bg_image}
              alt="background"
              className="hidden lg:block lg:relative rounded-2xl lg:h-screen lg:w-full border-slate-200 shadow-xl"
            />
            <img
              src={batchmates}
              className="hidden lg:block lg:absolute lg:top-32 lg:w-3/4 lg:right-[12.5%] border-slate-200 rounded-3xl transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-md"
              alt="batchmates"
            />
          </div>
        </div>
      </div>
      <div className="everythingExceptImages flex-auto grow px-6">
        <div className="pt-6 py-3 mx-auto">
          <div className="text-[2rem] md:text-5xl lg:text-[2.2rem] leading-snug md:leading-normal text-center">
            Welcome to our
            <HighlightText text={"Community!"} />
          </div>

          <p className="text-center text-sm font-semibold lg:text-lg mt-8">
            Select the type of Account
          </p>
        </div>
        <div className="mb-6 w-full mx-auto md:w-1/2 lg:w-1/2 border border-gray-400 justify-center items-center rounded-full flex gap-4 lg:gap-0">
          <button
            className={`px-3 w-full py-2 lg:py-3 align-middle rounded-full transition-all duration-300 ${
              activeTab === "User"
                ? "bg-blue-800 text-white lg:text-lg font-semibold"
                : "text-gray-800 font-semibold lg:text-lg hover:bg-gray-200 hover:text-blue-800"
            }`}
            onClick={() => handleTabChange("User")}
          >
            Individual
          </button>
          <button
            className={`px-3 py-2 w-full lg:py-3 align-middle rounded-full transition-all duration-300 ${
              activeTab === "organisation"
                ? "bg-blue-800 lg:text-lg text-white font-semibold"
                : "text-gray-800 lg:text-lg font-semibold hover:bg-gray-200 hover:text-blue-800"
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
