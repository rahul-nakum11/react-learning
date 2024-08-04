import React from "react";
import ReactDOM from "react-dom";
import Routes from "./src/Routes";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Routes} />);
