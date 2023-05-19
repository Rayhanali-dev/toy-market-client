import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToys from "../Pages/AddToys/AddToys";
import PrivateRoutes from "./PrivateRoutes";
import AllToys from "../Pages/AllToys/AllToys";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyToys from "../Pages/MyToys/MyToys";
import Blog from "../Pages/Blog/Blog";

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
          path: '/addToy',
          element: <PrivateRoutes><AddToys></AddToys></PrivateRoutes>
        },
        {
          path: '/viewDetails',
          element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/toys')
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/myToy',
          element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
        }
      ]
    },
]);

export default router;