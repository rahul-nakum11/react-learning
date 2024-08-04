import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import { Container } from "./components/app-layout/Container";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Container />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default Routes;
