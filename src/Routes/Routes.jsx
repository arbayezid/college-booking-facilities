import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SingleCardDetails from "../pages/Home/SingleCardDetails";
import College from "../pages/Colleges/College";
import Admission from "../pages/Admission/Admission";
import AdmissionDetails from "../pages/Admission/AdmissionDetails";
import MyCollege from "../pages/MyCollege/MyCollege";
import Register from "../pages/LoginInfo/Register";
import Login from "../pages/LoginInfo/Login";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
            element: <PrivateRoute><SingleCardDetails></SingleCardDetails></PrivateRoute>,
            loader: () => fetch('https://task1-server-eight.vercel.app/college')
        },
        {
          path: '/admission',
          element: <Admission></Admission>
        },
        {
          path: '/admission/:id',
          element: <PrivateRoute><AdmissionDetails></AdmissionDetails></PrivateRoute>,
          loader: () => fetch('https://task1-server-eight.vercel.app/college')
        },
        {
          path: '/myCollege',
          element: <MyCollege></MyCollege>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

export default router;