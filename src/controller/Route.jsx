import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";

import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

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
    ],
  },
]);

export default router;