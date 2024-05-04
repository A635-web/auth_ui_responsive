import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { BASE_URL, SEND_OTP } from "../../utils/constants";
// import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const SignupForm = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration
      once: true, // Whether animation should only happen once
      easing: "ease-out", // Easing function for the animation
      // You can add more customization options here
    });
  }, []);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [signUpData, setSignUpData] = useState(null); // State to store form data
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    acceptTerms: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("You must accept the terms and conditions"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      acceptTerms: false,
    },
    validationSchema: validationSchema,
    //   onSubmit: async (values) => {
    //     setLoading(true);
    //     try {
    //       const response = await fetch(`${BASE_URL}${SEND_OTP}`, {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(values),
    //       });
    //       if (response.ok) {
    //         setShowOtpField(true);
    //         setSignUpData(values); // Store form data when OTP is sent successfully
    //         toast.success('OTP Sent to your Email!')
    //       } else {
    //         throw new Error("Failed to send OTP");
    //       }
    //     } catch (error) {
    //       console.error("Error sending OTP:", error);
    //       toast.error("Failed to resend OTP");
    //     }
    //     setLoading(false);
    //   },
    // });
  });
  // const inputRefs = useRef([]);

  // const handleOtpChange = (e, index) => {
  //   const newOtp = [...otp];
  //   newOtp[index] = e.target.value;

  //   if (e.target.value && index < otp.length - 1) {
  //     inputRefs.current[index + 1].focus();
  //   }

  //   setOtp(newOtp);
  // };

  // const handleOtpSubmit = async (e) => {
  //   e.preventDefault();

  //   const newOtpString = otp.join('');
  //   const otpData = {
  //     ...signUpData, // Include form data
  //     otp: newOtpString,
  //   };

  //   try {
  //     const response = await fetch(`${BASE_URL}/user/signup`, {
  //       method: "POST",
  //       body: JSON.stringify(otpData),
  //       mode: "cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("OTP verification failed");
  //     }

  //     const data = await response.json();
  //     localStorage.setItem("userId", data.user._id);
  //     localStorage.setItem("token", data.token);
  //      navigate("/userFeed");
  //  toast.success("Registered Successfully!");
  //     console.log("User registered successfully:", data);
  //   } catch (error) {
  //     console.error("Error verifying OTP:", error.message);
  //     toast.error("Error! ",error.message);
  //   }
  // };

  return (
    <div
      className="w-full lg:w-4/5 mx-auto px-4 rounded-lg"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {!showOtpField ? (
        <form
          onSubmit={formik.handleSubmit}
          className="h-full flex flex-col gap-4 lg:gap-0"
        >
          <div className="bg-white p-4 rounded-2xl">
            <label htmlFor="firstName" className="font-bold font-open_spaced text-lg block  ">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter Your firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              className="p-3 mt-2 border border-gray-500 text-lg rounded-lg font-open_spaced w-full focus:outline-none"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500">{formik.errors.firstName}</div>
            )}
          </div>

          <div className="bg-white p-4 rounded-2xl">
            <label htmlFor="lastName" className="font-bold font-open_spaced text-lg block  ">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              className="p-3 mt-2 border border-gray-500 text-lg rounded-lg font-open_spaced w-full focus:outline-none"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500">{formik.errors.lastName}</div>
            )}
          </div>

          <div className="bg-white p-4 rounded-2xl">
            <label htmlFor="email" className="font-bold font-open_spaced text-lg block  ">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="p-3 mt-2 border border-gray-500 text-lg rounded-lg font-open_spaced w-full focus:outline-none"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>

          <div className="bg-white p-4 rounded-2xl">
            <label htmlFor="password" className="font-bold font-open_spaced text-lg block  ">
              Password:
            </label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="**********"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="p-3 mt-2 border border-gray-500 text-lg rounded-lg font-open_spaced w-full focus:outline-none"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>

          <div className="bg-white p-4 rounded-2xl justify-center items-center">
            <label className="font-open_sans inline-flex items-center">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formik.values.acceptTerms}
                onChange={formik.handleChange}
                className="form-checkbox h-5 w-5 mr-2 text-blue-600"
              />
              <span className="ml-2 leading-tight justify-center items-center  font-open_spaced font-semibold">
                I accept the{" "}
                <a
                  className="text-blue-800 hover:underline font-semibold font-open_spaced justify-center items-center"
                  href="http://www.mnnit.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  terms of service
                </a>{" "}
                &{" "}
                <a
                  className="text-blue-800 hover:underline font-semibold font-open_spaced justify-center items-center"
                  href="http://www.mnnit.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>
                .
              </span>
            </label>
            {formik.touched.acceptTerms && formik.errors.acceptTerms && (
              <div className="text-red-500">{formik.errors.acceptTerms}</div>
            )}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className={`w-full h-12 rounded-full border border-gray-600 transition-all duration-300 mt-1 font-open_spaced ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-800 text-white font-semibold text-2xl font-open_sans"
              }`}
              disabled={loading}
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="pb-6 text-sm text-gray-800 font-semibold font-open_sans">
              Already Have an account?{" "}
              <Link
                to="/login"
                className="text-blue-800 font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      ) : (
        <form onSubmit={() => alert("functionRemoved")} className="space-y-8">
          <div className="flex flex-row items-center justify-between mx-auto w-full mt-16">
            {otp.map((digit, index) => (
              <div key={index} className="w-1/6 h-16 m-2">
                <input
                  type="text"
                  maxLength="1"
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-800 "
                  value={digit}
                  onChange={() => alert("functionRemoved")}
                  ref={() => alert("refRemoved")}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-5">
            <div>
              <button
                type="submit"
                className="flex flex-row items-center text-2xl justify-center text-center w-full h-12 rounded-full border border-gray-600 outline-none py-5 bg-blue-800 border-none text-white  shadow-sm font-open_spaced font-semibold"
              >
                Verify Account
              </button>
            </div>

            <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500 font-open_spaced">
              <p>Didn't receive code?</p>{" "}
              <button
                className="flex flex-row items-center text-blue-700 font-bold_space text-xl focus:outline-none"
                onClick={formik.handleSubmit}
                disabled={loading} // Disable the button while loading
              >
                {loading ? "Resending..." : "Resend"}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignupForm;
