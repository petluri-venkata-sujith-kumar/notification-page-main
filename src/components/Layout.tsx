import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import AdminLayout from "./admin/AdminLayout";
import Login from "./auth/login/Login";
import Signup from "./auth/signup/SignUp";
import PageNotFound from "./pageNotFound/PageNotFound";
import LandingUI from "./user/LandingUI";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const Layout = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element : <Login />
    },
    {
      path: '/admin',
      element : <PrivateRoutes><AdminLayout /></PrivateRoutes>
    },
    {
      path: '/user',
      element : <PrivateRoutes><LandingUI /></PrivateRoutes>
    },
    {
      path: '/signup',
      element : <Signup/>
    },
    {
      path : '*',
      element : <PageNotFound />
    }

  ])

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
};

export default Layout;
