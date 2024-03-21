import { createBrowserRouter } from "react-router-dom";
import GameDetailsPage from "./pages/GameDetailsPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
    { 
        path: '/', 
        element: <Layout />,
        children: [
            { path: '', element: <HomePage />},
            { path: 'games/:id', element: <GameDetailsPage />}
        ]
    },
]);

export default router;