import React, { useContext, useEffect, useState } from "react";
import { FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../Contects/AuthProvider";
import { RxDashboard } from "react-icons/rx";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);

  const { user } = useContext(AuthContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Sell Your Books", path: "/sell" },
    { link: "Shop", path: "/shop" },
    { link: <RxDashboard className="w-5 h-6 -mr-5 text-[#674636] hover:text-black" />, path: "/admin/dashboard" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 right-0 ${
        isSticky ? "bg-[#f7eed3] shadow-md" : "bg-[#f7eed3]"
      }`}
    >
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 bg-[#f7eed3]"
            : "bg-[#f7eed3]"
        }`}
      >
        <div className="flex items-center justify-between text-base gap-8">
          <Link
            to="/"
            className="text-2xl font-bold text-[#674636] flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            BookNest
          </Link>

          <ul className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="block text-base text-[#674636] uppercase cursor-pointer hover:text-black"
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <button onClick={toggleMenu} className="flex items-center gap-2">
              <FaBarsStaggered className="w-5 hover:text-black" />
              {user && (
                <span className="text-sm text-[#674636]">{user.email}</span>
              )}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#674636] focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-[#674636]" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-[#674636]" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden space-y-4 px-4 mt-12 py-7 bg-[#aab396] ${
            isMenuOpen ? "block fixed top-0 right-0 left-0 z-40" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block text-base text-[#fff8e8] uppercase cursor-pointer"
              onClick={toggleMenu}
            >
              {item.link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
