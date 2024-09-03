import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../src/Navbar/Nav";
import Footer from "../src/Components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
