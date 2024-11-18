import { createBrowserRouter, Navigate, } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import NewsPage from "../Pages/NewsPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter(
    [
      {
        path: "/",
        element: <HomeLayout />,
        children: [
          {
            path:"",
            element : <Navigate to={"/category/01"}></Navigate>

          },
            {
            path:"/category/:id",
            element: <NewsPage></NewsPage>,
            loader :({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
          }
          
        ],
      },
      {
        path: "/news/:id",
        element: 
        <PrivateRoute>
          <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader :({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
      },
      {
        path: "auth",
        element:<AuthLayout></AuthLayout>,
        children :[
          {
            path: "/auth/login",
            element: <Login></Login>
          },
          {
            path: "/auth/register",
            element: <Register></Register>
          }
        ]
      },
      {
        path: "*",
        element: <h1>Error: Page Not Found</h1>,
      },
    ],
    
  );
  
  export default Router;
  