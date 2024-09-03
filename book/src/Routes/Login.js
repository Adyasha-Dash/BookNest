import React, { useContext, useState } from "react";
import { AuthContext } from "../Contects/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaBlog } from "react-icons/fa";

export default function Login() {
  const { login, loginwithgoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="py-16 bg-[#f7eed3]"> {/* Background color: soft cream */}
      <div className="flex bg-[#aab396] rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-3xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-vector/girl-is-pointing-username-password_118167-14538.jpg')",
          }}
        ></div>
        <form onSubmit={handleSignup} className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-[#674636] text-center"> {/* Dark brown text */}
          <FaBlog className="inline-block w-11 -mt-2" />
            BOOKNEST
          </h2>

          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4 border-[#674636]"></span> {/* Dark brown border */}
            <a href="#" className="text-xs text-center text-[#674636] uppercase"> {/* Dark brown text */}
              or signin with email
            </a>
            <span className="border-b w-1/5 lg:w-1/4 border-[#674636]"></span> {/* Dark brown border */}
          </div>
          <div className="mt-4">
            <label className="block text-[#674636] text-sm font-bold mb-2"> {/* Dark brown label */}
              Email Address
            </label>
            <input
              name="email"
              className="bg-[#f7eed3] text-[#674636] focus:outline-none focus:shadow-outline border border-[#674636] rounded py-2 px-4 block w-full appearance-none" /* Light cream background with dark brown border */
              type="email"
              placeholder="enter your email"
              autoComplete="new-password"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-[#674636] text-sm font-bold mb-2"> {/* Dark brown label */}
                Password
              </label>
            </div>
            <input
              name="password"
              className="bg-[#f7eed3] text-[#674636] focus:outline-none focus:shadow-outline border border-[#674636] rounded py-2 px-4 block w-full appearance-none" /* Light cream background with dark brown border */
              type="password"
              placeholder="enter your password"
              autoComplete="new-password"
            />
          </div>
          <div className="mt-8">
            <button className="bg-[#674636] text-white font-bold py-2 px-4 w-full rounded hover:bg-[#593c2b]"> {/* Dark brown button with hover effect */}
              Signin
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4 border-[#674636]"></span> {/* Dark brown border */}
            <a href="/signup" className="text-xs text-[#674636] uppercase"> {/* Dark brown text */}
              or <span className="text-blue-700">Signup</span>
            </a>
            <span className="border-b w-1/5 md:w-1/4 border-[#674636]"></span> {/* Dark brown border */}
          </div>
        </form>
      </div>
    </div>
  );
}
