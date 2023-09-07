import { createBrowserRouter } from"react-router-dom";

import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";


import { Suspense, lazy } from "react";
import LoadingPage from "../pages/LoadingPage";
import ContactPage from "../pages/ContactPage";

const  Loading = <LoadingPage></LoadingPage>

const router = createBrowserRouter([
    {
        path: "",
        element: <MainPage></MainPage>
    },
    {
        path: "about",
        element:  <Suspense fallback={Loading}><AboutPage/></Suspense>,
    },
    {
        path: "contact",
        element:<Suspense fallback={Loading}><ContactPage/></Suspense>
    }

])

export default router;