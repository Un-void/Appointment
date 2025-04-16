import { createBrowserRouter } from "react-router";
import App from "../App";
import Body from "../components/Body";
import ContactUs from "../components/ContactUs"
import Login from "../components/Login"
import SignUp from "../components/SignUp"

const appRouter = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path:"",
                Component: Body
            },
            {
                path:"login",
                Component: Login
            },
            {
                path:"contact",
                Component: ContactUs
            },
            {
                path: "signup",
                Component: SignUp
            }
        ]
    }   
])

export default appRouter