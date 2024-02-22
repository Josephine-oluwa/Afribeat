import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/static/Layout";
import Error from "../Error/Error";
import LandingPage from "../pages/LandingPage";



export const mainRoute = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <LandingPage/>
            }
        ]
    },
  
    {
        path: "*",
        element: <Error/>
    },

])