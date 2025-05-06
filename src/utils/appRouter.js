import { createBrowserRouter } from "react-router";
import App from "../App";
import Body from "../components/Body";
import ContactUs from "../components/ContactUs";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import SpecialtyDetail from "../components/SpecialityDetail";
import DocCard from "../components/DocCard";
import UserDashboard from "../components/UserDashboard.jsx"; // Add this import
import LandingPage from "../components/LandingPage.jsx";

const appRouter = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "",
                Component: LandingPage
            },
            {
                path: "/home",
                Component: Body
            },
            {
                path: "login",
                Component: Login
            },
            {
                path: "contact",
                Component: ContactUs
            },
            {
                path: "signup",
                Component: SignUp
            },
            {
                path: "specialty/:name",
                Component: SpecialtyDetail
            },
            {
                path: "specialty/:name/:docId",
                Component: DocCard
            },
            {
                path: "dashboard", // Add this route
                Component: UserDashboard
            }
        ]
    }   
]);

export default appRouter;