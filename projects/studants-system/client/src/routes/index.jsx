
import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { PageError } from "../pages/PageError";
import { Register } from "../pages/Register";
import { Students } from "../pages/Students";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <PageError/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/register", element: <Register/>},
            {path: "/students", element: <Students/>},
            {path: "/about", element: <About/>},
        ]
    }
   
]);