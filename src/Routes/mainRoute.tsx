import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/static/Layout";
import Error from "../Error/Error";
import LandingPage from "../pages/LandingPage";
import Page2 from "../pages/Page2";



export const mainRoute = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <LandingPage/>
            },
            {
              
                path: "/page",
                element: <Page2/>
            }
        ]
    },
  
    {
        path: "*",
        element: <Error/>
    },

])