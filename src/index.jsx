import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./route";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
