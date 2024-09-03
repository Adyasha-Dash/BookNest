import React, { useContext, useState } from "react";
import { AuthContext } from "../Contects/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaBlog } from "react-icons/fa";

export default function Signup() {
  const { createUser, loginwithgoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Signup successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleRegister = () => {
    loginwithgoogle()
      .then((result) => {
        const user = result.user;
        alert("Signup successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("Google Sign-In Error: ", errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <div className="py-16 bg-[#f7eed3]">
      {" "}
      {/* Background color: soft cream */}
      <div className="flex bg-[#aab396] rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-5xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-vector/girl-is-pointing-username-password_118167-14538.jpg')",
          }}
        ></div>
        <form onSubmit={handleLogin} className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-[#674636] text-center">
            {" "}
            {/* Dark brown text */}
            <FaBlog className="inline-block w-11 -mt-2" />
            BOOKNEST
          </h2>
          <button
            onClick={handleRegister}
            className="w-full h-10 flex items-center justify-center mt-4 text-white rounded-lg shadow-md bg-[#674636] hover:bg-[#593c2b]" /* Dark brown button with hover effect */
          >
            <div className="px-4 py-3">
              <FcGoogle className="w-7 h-8 -mr-7" />
            </div>
            <h1 className="px-4 py-3 w-5/6 text-center text-white font-bold">
              Signup with Google
            </h1>
          </button>

          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4 border-[#674636]"></span>{" "}
            {/* Dark brown border */}
            <a
              href="#"
              className="text-xs text-center text-[#674636] uppercase"
            >
              {" "}
              {/* Dark brown text */}
              or signup with email
            </a>
            <span className="border-b w-1/5 lg:w-1/4 border-[#674636]"></span>{" "}
            {/* Dark brown border */}
          </div>
          <div className="mt-4">
            <label className="block text-[#674636] text-sm font-bold mb-2">
              {" "}
              {/* Dark brown label */}
              Email Address
            </label>
            <input
              name="email"
              placeholder="enter your email"
              className="bg-[#f7eed3] text-gray-700 focus:outline-none focus:shadow-outline border border-[#674636] rounded py-2 px-4 block w-full appearance-none" /* Light cream background with dark brown border */
              type="email"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-[#674636] text-sm font-bold mb-2">
                {" "}
                {/* Dark brown label */}
                Full Name
              </label>
            </div>
            <input
              name="name"
              placeholder="enter your name"
              className="bg-[#f7eed3] text-gray-700 focus:outline-none focus:shadow-outline border border-[#674636] rounded py-2 px-4 block w-full appearance-none" /* Light cream background with dark brown border */
              type="text"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-[#674636] text-sm font-bold mb-2">
                {" "}
                {/* Dark brown label */}
                Password
              </label>
            </div>
            <input
              name="password"
              placeholder="enter your password"
              className="bg-[#f7eed3] text-gray-700 focus:outline-none focus:shadow-outline border border-[#674636] rounded py-2 px-4 block w-full appearance-none" /* Light cream background with dark brown border */
              type="password"
            />
          </div>
          <div className="mt-8">
            <button className="bg-[#674636] text-white font-bold py-2 px-4 w-full rounded hover:bg-[#593c2b]">
              {" "}
              {/* Dark brown button with hover effect */}
              Signup
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4 border-[#674636]"></span>{" "}
            {/* Dark brown border */}
            <a href="/login" className="text-xs text-[#674636] uppercase">
              {" "}
              {/* Dark brown text */}
              or <span className="text-blue-700">Login</span>
            </a>
            <span className="border-b w-1/5 md:w-1/4 border-[#674636]"></span>{" "}
            {/* Dark brown border */}
          </div>
        </form>
      </div>
    </div>
  );
}
