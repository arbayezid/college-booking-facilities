import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SingleCardDetails from "../pages/Home/SingleCardDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/:id',
            element: <SingleCardDetails></SingleCardDetails>,
            loader: () => fetch('/collegeInfo.json')
        }
      ]
    },
  ]);

export default router;