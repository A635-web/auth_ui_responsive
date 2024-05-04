import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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

  const validationSchema = Yup.object().shape({
    collegeName: Yup.string().required("College name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    acceptTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const formik = useFormik({
    initialValues: {
      collegeName: "",
      email: "",
      password: "",
      acceptTerms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Submitted:", values);
    },
  });

  return (
    <div
      className="w-full lg:w-4/5 mx-auto px-4 rounded-lg"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <form
        onSubmit={formik.handleSubmit}
        className="h-full flex flex-col gap-4 lg:gap-0"
      >
        <div className="bg-white p-4 rounded-2xl">
          <label htmlFor="collegeName" className="font-bold text-lg block">
            College Name:
          </label>
          <input
            type="text"
            name="collegeName"
            id="collegeName"
            placeholder="Enter your college name"
            value={formik.values.collegeName}
            onChange={formik.handleChange}
            className="p-2.5 mt-2 border border-gray-500 text-lg rounded-lg font-open_spaced w-full focus:outline-none"
          />
          {formik.touched.collegeName && formik.errors.collegeName && (
            <div className="text-red-500">{formik.errors.collegeName}</div>
          )}
        </div>
        <div className="mt-2 bg-white p-4 rounded-2xl">
          <label htmlFor="email" className="font-bold text-lg block">
            Email:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="p-2.5 mt-2 border border-gray-500 text-lg rounded-lg font-open_spaced w-full focus:outline-none"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500">{formik.errors.email}</div>
          )}
        </div>
        <div className="mt-2 bg-white p-4 rounded-2xl">
          <label htmlFor="password" className="font-bold text-lg block">
            Password:
          </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="**********"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="p-2.5 mt-2 border border-gray-500 text-lg rounded-lg font-open_spaced w-full focus:outline-none"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500">{formik.errors.password}</div>
          )}
        </div>
        <div className="mt-2 bg-white p-4 rounded-2xl">
          <label className="font-bold inline-flex items-center">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formik.values.acceptTerms}
              onChange={formik.handleChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 font-open_spaced">
              I accept the{" "}
              <a
                className="text-blue-800 hover:underline font-semibold"
                href="http://www.mnnit.ac.in/"
                target="_blank"
              >
                terms of service
              </a>{" "}
              &{" "}
              <a
                className="text-blue-800 hover:underline font-semibold"
                href="http://www.mnnit.ac.in/"
                target="_blank"
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
            className={`w-full h-12 rounded-full border border-gray-600 transition-all duration-300 mt-1 font-open_spaced ${"bg-blue-800 text-white font-semibold text-2xl font-open_sans"}`}
            onClick={formik.handleSubmit}
          >
            Register
          </button>
        </div>
        <div className="text-center mt-4">
          <p className="pb-6 font-open_spaced text-sm text-gray-800 font-semibold">
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
    </div>
  );
};

export default SignupForm;
