import React, { useContext } from "react";
import { AuthContext } from "../Contects/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { GoAlertFill } from "react-icons/go"; // Make sure this import is correct

export default function Logout() {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    logout()
      .then(() => {
        alert("Signed out successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        alert("An error occurred during logout. Please try again.");
        console.error("Logout error: ", error);
      });
  };

  return (
    <div className="bg-[#f7eed3] flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
        {/* Centered Icon with specified width and height */}
        <div className="flex items-center justify-center mb-4">
          <GoAlertFill className="text-red-300 w-12 h-12" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign Out</h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to sign out of your account?
        </p>
        <div className="flex justify-center gap-4">
          <button
            className="bg-red-600 hover:bg-black px-6 py-2 text-white rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 px-6 py-2 text-gray-800 rounded"
            onClick={() => navigate(from, { replace: true })}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
