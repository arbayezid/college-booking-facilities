import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SingleCardDetails from "../pages/Home/SingleCardDetails";
import College from "../pages/Colleges/College";
import Admission from "../pages/Admission/Admission";
import AdmissionDetails from "../pages/Admission/AdmissionDetails";

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
          path: '/colleges',
          element: <College></College>
        },
        {
            path: '/:id',
            element: <SingleCardDetails></SingleCardDetails>,
            loader: () => fetch('http://localhost:5000/college')
        },
        {
          path: '/admission',
          element: <Admission></Admission>
        },
        {
          path: '/admission/:id',
          element: <AdmissionDetails></AdmissionDetails>,
          loader: () => fetch('http://localhost:5000/college')
        }
      ]
    },
  ]);

export default router;