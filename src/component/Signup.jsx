import bg_image from "../assets/images/bg.jpg";
import { Link } from "react-router-dom";
import React, { useState,useRef,useEffect } from "react";
import StudentForm from "./Individual";
import InstituteForm from "./Organisation";
import batchmates from "../assets/images/T_1.jpg";
import HighlightText from "./Highlightedtext.jsx";

import Aos from "aos"
import "aos/dist/aos.css"
const colors={
    primary:"#060606",
    background:"#f5f5f5",
    disbaled:"#090909"
}

const Signup=()=>{


 useEffect(()=>{


Aos.init({
    duration: 2000, // Animation duration
      once: true, // Whether animation should only happen once
      easing: 'ease-out', // Easing function for the animation
      // You can add more customization options here

});

   },[]);

  


const [profile, setProfile] = useState("User");

 const [activeTab, setActiveTab] = useState("User");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };





return(
<>

<div className="w-full h-screen flex items-start bg-white relative" data-aos="fade-right"  data-aos-duration="1000">
<div className="relative w-full h-full flex flex-col " >

    <img src={bg_image} className="w-8/12 h-full object-cover border-slate-200 rounded-3xl shadow-md"/>
</div>
  <div className="absolute top-[15%] left-[9%]  bottom-[20%]" >
        <img
          src={batchmates}
          className="w-full h-full object-cover border-slate-200 rounded-3xl transition-transform duration-500 ease-in-out transform hover:scale-110 shadow-md"
          alt="batchmates"
        />
      </div>


</div>
<div className="absolute top-[10%] right-[3%] py-3 mx-auto">



  <div className="text-4xl  text-center  font-bold_space">
    Welcome to Our 
          <HighlightText text={"Community!"} />
  
        </div>



<p className="absolute font-open_spaced font-semibold mt-5 right-[25%]">Select the type of Account!</p>


</div>
 <div className="absolute top-[22%] right-[5%]  w-1/5 h-16 justify-center items-center bg-white  rounded-full border border-gray-300  flex">
 <button
          className={` w-1/2 h-14  rounded-full border  border-gray-600 transition-all duration-300 font-open_spaced ${
            activeTab === "User"
              ? "bg-blue-800 text-white font-semibold  text-2xl"
              : "text-gray-800 font-semibold  text-2xl hover:bg-gray-200 hover:text-blue-800"
          }`}
          onClick={() => handleTabChange("User")}
        >
          Individual
        </button>
        <button
          className={`w-1/2 h-14   rounded-full border   border-gray-600 transition-all duration-300 font-open_spaced ${
            activeTab === "organisation"
              ? "bg-blue-800 text-white font-semibold text-2xl"
              : "text-gray-800 font-semibold text-2xl hover:bg-gray-200 hover:text-blue-800"
          }`}
          onClick={() => handleTabChange("organisation")}
        >
          Organisation
        </button>



</div>

{activeTab === "User" && <StudentForm/>}
      {activeTab === "organisation" && <InstituteForm />}


  


</>
)

}

export default Signup;


