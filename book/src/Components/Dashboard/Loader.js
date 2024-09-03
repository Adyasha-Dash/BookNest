
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Shop from "./Routes/Shop";
import Contact from "./Routes/Contact";
import Blog from "./Routes/Blog";
import Nav from "./Navbar/Nav";
import SingleBook from "./Components/SingleBook";
import Footer from "./Components/Footer";
import Dashboardlayout from "./Components/Dashboard/Dashboardlayout";
import Dashboard from "./Components/Dashboard/Dashboard";
import Upload from "./Components/Dashboard/Upload";
import ManageBooks from "./Components/Dashboard/ManageBooks";
import EditBook from "./Components/Dashboard/EditBook";
import Sell from "./Routes/Sell";

// Create a loader function for EditBook
const fetchBookData = async ({ params }) => {
  const response = await fetch(`http://localhost:5000/books/${params.id}`);
  if (!response.ok) throw new Error('Failed to fetch book data');
  return response.json();
};

// Define the routes with loaders
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/sell",
    element: <Sell />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/book/:id",
    element: <SingleBook />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboardlayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <Upload />,
      },
      {
        path: "/admin/dashboard/managebooks",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/editbooks/:id",
        element: <EditBook />,
        loader: fetchBookData, // Add loader here
      },
    ],
  },
]);

function App() {
  const location = useLocation(); // Get the current path

  return (
    <>
      {/* Conditionally render Nav and Footer based on the current path */}
      {!location.pathname.startsWith("/admin/dashboard") && <Nav />}
      
      <div className="min-h-screen">
        <RouterProvider router={router} />
      </div>
      
      {!location.pathname.startsWith("/admin/dashboard") && <Footer />}
    </>
  );
}

export default App;
