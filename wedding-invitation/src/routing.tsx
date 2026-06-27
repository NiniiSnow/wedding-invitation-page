import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home, InvitationPage, NotFound } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: "invitation/:ids", element: <InvitationPage /> },
        ]

    }
])