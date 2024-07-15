import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";

import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import BrowseFields from "@/pages/BrowseFields";
import About from "@/pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/browseFields",
        element: <BrowseFields />,
      },
      {
        path: "/About",
        element: <About />,
      },
    ],
  },
]);

export default router;
