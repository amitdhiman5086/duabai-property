import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home.jsx";
import OffPlanPropertyPage from "./pages/OffPlanPropertyPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ViewMoreProjects from "./pages/ViewMoreProjects.jsx";

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/offproperty/:propType/:propertyTitle",
          element: <OffPlanPropertyPage />,
        },
        {
          path: "/more-projects",
          element: <ViewMoreProjects />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  { basename: "" }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
