import { createBrowserRouter, Navigate, } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import NewsPage from "../Pages/NewsPage";

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
        path: "/news",
        element: <h1>News Layout</h1>,
      },
      {
        path: "auth",
        element: <h1>Login</h1>,
      },
      {
        path: "*",
        element: <h1>Error: Page Not Found</h1>,
      },
    ],
    
  );
  
  export default Router;
  