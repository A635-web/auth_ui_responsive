
import bg_image from "../assets/images/bg.jpg";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import batchmates from "../assets/images/T_1.jpg";
import HighlightText from "./Highlightedtext.jsx";
// import { UserSignUp, ForgotPassword } from "../../utils/user.js";
import { useNavigate } from "react-router-dom";
// import { ChatState } from "../../Context/ChatProvider.js";
import Aos from "aos";
import "aos/dist/aos.css";
// import { toast } from 'react-hot-toast';

const Signin = () => {
//   const history = useHistory();
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const [activeTab, setActiveTab] = useState("User");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
    const navigate = useNavigate();
  // const {setChats,setSelectedChat}=ChatState();
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await UserSignUp(email, password);
  //    if (response && response.isError === true) {
  //     setMessage(response.message);
  //     toast.error(response.message);
  //   } else {
  //     setMessage(" ");
  //     setChats([]);
  //     setSelectedChat("")
  //     navigate("/userFeed");
  //          toast.success('Login successful!');
  //   }

  //   } catch (error) {
  //     console.error("Error while logging in:", error);
  //     setMessage("Something went wrong. Please try again later.");
  //     toast.error("Something went wrong. Please try again later.");
  //   }
  // };

  // const handleForgotPassword = async () => {
  //   try {
  //     await ForgotPassword(email);
  //     setMessage("Password reset instructions sent to your email.");
  //     toast.success("Password reset instructions sent to your email.");
  //   } catch (error) {
  //     console.error("Error while resetting password:", error);
  //     setMessage("Something went wrong. Please try again later.");
  //     toast.error("Something went wrong. Please try again later.");
  //   }
  // };

  return (
    <>
      <div className="w-full h-screen flex items-start bg-white relative" data-aos="fade-right" data-aos-duration="1000">
        <div className="relative w-full h-full flex flex-col">
          <img src={bg_image} className="w-8/12 h-full object-cover border-slate-200 rounded-3xl shadow-md" />
        </div>
        <div className="absolute top-[15%] left-[9%] bottom-[20%]">
          <img
            src={batchmates}
            className="w-full h-full object-cover border-slate-200 rounded-3xl transition-transform duration-500 ease-in-out transform hover:scale-110 shadow-md"
            alt="batchmates"
          />
        </div>
      </div>
      <div className="absolute top-[10%] right-[3%] py-3 mx-auto">
        <div className="text-4xl text-center font-bold_space">
          Ready to reconnect?  <HighlightText text={"Log in"} />
        </div>
        <p className="absolute font-open_spaced font-semibold mt-5 right-[25%]">Select the type of Account!</p>
      </div>
      <div className="absolute top-[22%] right-[5%] w-1/5 h-16 justify-center items-center bg-white rounded-full border border-gray-300 flex">
        <button
          className={`w-1/2 h-14 rounded-full border border-gray-600 transition-all duration-300 font-open_spaced ${
            activeTab === "User"
              ? "bg-blue-800 text-white font-semibold text-2xl"
              : "text-gray-800 font-semibold text-2xl hover:bg-gray-200 hover:text-blue-800"
          }`}
          onClick={() => handleTabChange("User")}
        >
          Individual
        </button>
        <button
          className={`w-1/2 h-14 rounded-full border border-gray-600 transition-all duration-300 font-open_spaced ${
            activeTab === "organisation"
              ? "bg-blue-800 text-white font-semibold text-2xl"
              : "text-gray-800 font-semibold text-2xl hover:bg-gray-200 hover:text-blue-800"
          }`}
          onClick={() => handleTabChange("organisation")}
        >
          Organisation
        </button>
      </div>

      {activeTab === "User" && (
        <div className="absolute top-[30%] right-[3%] w-3/12 px-4 h-4/6 rounded-lg mt-1" data-aos="fade-up" data-aos-duration="1000">
          <form className="h-full">
            <div className="bg-white p-4 rounded-2xl">
              <label htmlFor="email" className="font-open_spaced text-lg block">
                User Email:
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your Email"
                className="p-2.5 text-lg rounded-lg font-open_spaced w-full focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="bg-white p-4 rounded-2xl">
              <label htmlFor="password" className="font-open_spaced text-lg block">
                Password:
              </label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="**********"
                className="p-2.5 text-lg rounded-lg font-open_spaced w-full focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-right">
                <a href="#" className="text-sm text-blue-800 font-semibold font-open_spaced hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full h-12 rounded-full border border-gray-600 transition-all duration-300 mt-6 bg-blue-800 text-white font-semibold text-2xl font-open_sans"
              >
                Sign In
              </button>
            </div>

            <div className="text-center mt-4">
              <p className="font-open_spaced text-sm text-gray-800 font-semibold">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-800 font-semibold hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      )}
        {activeTab === "organisation" && (
         <div className="absolute top-[30%] right-[3%] w-3/12 px-4 h-4/6 rounded-lg mt-1" data-aos="fade-up" data-aos-duration="1000">
           <form className="h-full">
             <div className="bg-white p-4 rounded-2xl">
               <label htmlFor="collegeName" className="font-open_spaced text-lg block">
                 Organisation Email:
               </label>
               <input
                 type="text"
                 name="collegeName"
                 id="collegeName"
                 placeholder="Enter your organisation name"
                 className="p-2.5 text-lg rounded-lg font-open_spaced w-full focus:outline-none"
               />
             </div>

             <div className="bg-white p-4 rounded-2xl">
               <label htmlFor="password" className="font-open_spaced text-lg block">
                 Password:
               </label>
               <input
                 type="text"
                 name="password"
                 id="password"
                 placeholder="**********"
                 className="p-2.5 text-lg rounded-lg font-open_spaced w-full focus:outline-none"
               />

                <div className="text-right">
                 <a href="#" className="text-sm text-blue-800 font-semibold font-open_spaced hover:underline">
                   Forgot Password?
                 </a>
               </div>
             </div>

             <div className="mt-4">
               <button
                 type="submit"
                 className="w-full h-12 rounded-full border border-gray-600 transition-all duration-300 mt-6 bg-blue-800 text-white font-semibold text-2xl font-open_sans"
               >
                 Register
               </button>
             </div>

     <div className="text-center mt-4">
               <p className="font-open_spaced text-sm text-gray-800">
                 Don't have an account?{" "}
                 <Link to="/signup" className="text-blue-800 font-semibold hover:underline">
                   Sign Up
                 </Link>
               </p>
             </div>






           </form>
         </div>
       )}



    </>
  );
};

export default Signin;
