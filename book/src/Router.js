import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Routes/Home";

import ManageBooks from "./Components/Dashboard/ManageBooks";
import Upload from "./Components/Dashboard/Upload";
import Dashboard from "./Components/Dashboard/Dashboard";
import DashboardLayout from "./Components/Dashboard/Dashboardlayout";
import About from "./Routes/About";
import Shop from "./Routes/Shop";
import Sell from "./Routes/Sell";
import Contact from "./Routes/Contact";
import Blog from "./Routes/Blog";
import SingleBook from "./Components/SingleBook";
import Signup from "./Routes/Signup";
import Login from "./Routes/Login";
import Privateroute from "./PrivateRoute/Privateroute";
import Logout from "./Routes/Logout";
import Contactus from "./Components/Contactus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/shop", element: <Shop /> },
      { path: "/sell", element: <Sell /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contactus /> },

      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:5000/book/${params.id}`
          );
          return response.json();
        },
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <Privateroute>
            <Dashboard />
          </Privateroute>
        ),
      },
      { path: "/admin/dashboard/upload", element: <Upload /> },
      { path: "/admin/dashboard/managebooks", element: <ManageBooks /> },
    ],
  },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout /> },
]);

export default router;
