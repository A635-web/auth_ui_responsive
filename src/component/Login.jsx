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
      easing: "ease-out",
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
          <div className="text-[2rem] md:text-5xl lg:text-[2.5rem] leading-snug md:leading-normal text-center">
            Ready to reconnect? <HighlightText text={"Log in"} />
          </div>
          <p className="text-center text-sm mt-8">
            Select the type of Account!
          </p>
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

        {activeTab === "User" && (
          <div
            className="w-full md:w-3/4 mx-auto px-4 rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <form className="h-full flex flex-col gap-4">
              <div className="bg-white p-4 rounded-2xl">
                <label
                  htmlFor="email"
                  className="font-open_spaced text-lg block"
                >
                  User Email:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="john@xyz.com"
                  className="py-2.5 text-lg rounded-lg font-open_spaced w-full focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="bg-white p-4 rounded-2xl">
                <label
                  htmlFor="password"
                  className="font-open_spaced text-lg block"
                >
                  Password:
                </label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="**********"
                  className="py-2.5 text-lg rounded-lg font-open_spaced w-full focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="text-right">
                  <a
                    href="#"
                    className="text-sm text-blue-800 font-semibold font-open_spaced hover:underline"
                  >
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
                <p className="pb-6 text-sm text-gray-800 font-semibold">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-800 font-semibold hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        )}
        {activeTab === "organisation" && (
          <div
            className="w-full md:w-3/4 mx-auto px-4 rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <form className="h-full flex flex-col gap-4">
              <div className="bg-white p-4 rounded-2xl">
                <label
                  htmlFor="collegeName"
                  className="font-open_spaced text-lg block"
                >
                  Organisation Email:
                </label>
                <input
                  type="text"
                  name="collegeName"
                  id="collegeName"
                  placeholder="Enter your organisation name"
                  className="py-2.5 text-lg rounded-lg font-open_spaced w-full focus:outline-none"
                />
              </div>

              <div className="bg-white p-4 rounded-2xl">
                <label
                  htmlFor="password"
                  className="font-open_spaced text-lg block"
                >
                  Password:
                </label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="**********"
                  className="py-2.5 text-lg rounded-lg font-open_spaced w-full focus:outline-none"
                />

                <div className="text-right">
                  <a
                    href="#"
                    className="text-sm text-blue-800 font-semibold font-open_spaced hover:underline"
                  >
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
                <p className="pb-6 text-sm text-gray-800">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-800 font-semibold hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signin;
