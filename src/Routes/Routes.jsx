import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn/SignIn";


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
          path: 'signIn',
          element: <SignIn></SignIn>
        }
      ]
    },
  ]);

  export default router;