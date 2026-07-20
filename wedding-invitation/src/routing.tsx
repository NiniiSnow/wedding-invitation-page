import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home, NotFound } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
        ]

    }
])