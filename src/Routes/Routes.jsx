import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import AddTask from "../pages/AddTask/AddTask";
import ShowTask from "../pages/ShowTask/ShowTask";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "../providers/PrivateRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },

        {
            path: '/login',
            element: <Login></Login>
        },

        {
            path: '/registration',
            element: <Registration></Registration>
        },

        {
          path: '/addTask',
          element:
          <PrivateRoute>
          
          <AddTask></AddTask>
          </PrivateRoute>
      },

      {
        path: '/showTask',
        element: <PrivateRoute> <ShowTask></ShowTask></PrivateRoute>
    },

    

      
        

      ]
    },
  ]);