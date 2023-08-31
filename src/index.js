import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorComponent from "./ErrorComponent";

import LoginPage from "./Login";
import ContactUs from "./ContactUs";
import About from "./About";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "./Heading";
import Navbar from "./Navbar";
import RegistrationComponent from "./components/Registration";
import Footer from "./components/footer";
import App from "./App";

function ApplayOut() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ApplayOut />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path:"cards",
        element: <App/>

      }
      ,

      {
        path: "aboutus",
        element: <About />,
        children: [
          {
            path: "register",
            element: <RegistrationComponent />,
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage />,
        children: [
          {
            path: "register",
            element: <RegistrationComponent />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
