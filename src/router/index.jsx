import { createBrowserRouter } from "react-router";
import SignInManager from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Pricing from "../pages/SignUp/pricing";
import SuccessCheckout from "../pages/SuccessCheckout";
import LayoutDashboard from "../components/layout";
import ManagerHome from "../pages/Manager/Home";
import ManageCourses from "../pages/Manager/Courses";
import CreateCourse from "../pages/Manager/create-course";
import ManageCourseDetail from "../pages/Manager/Course-Detail";
import CreateContentCourse from "../pages/Manager/Course-Content-Create";

const router = createBrowserRouter([
    {
      path: "/",
      element: <ManagerHome />
    },
    {
      path: "/manager/signin",
      element: <SignInManager />
    },
    {
      path: "/manager/sign-up",
      element: <SignUp />
    },
    {
      path: "/pricing",
      element: <Pricing />
    },
    {
      path: "/success-checkout",
      element: <SuccessCheckout />
    },
    {
      path: "/manager",
      element: <LayoutDashboard />,
      children: [
        {
          index: true,
          element: <ManagerHome />
        },
        {
          path: "/manager/courses",
          element: <ManageCourses />
        },
        {
          path: "/manager/courses/create",
          element: <CreateCourse />
        },
        {
          path: "/manager/courses/:id",
          element: <ManageCourseDetail />
        },
        {
          path: "/manager/courses/:id/create",
          element: <CreateContentCourse />
        }
      ]
    }
  ])

export default router