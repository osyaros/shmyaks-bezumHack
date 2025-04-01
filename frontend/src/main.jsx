import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MusicPage from "./pages/MusicPage";
import Login from "./pages/Login"; // Добавлен импорт
import MainLayout from "./Layouts/MainLayout";
import "./styles.scss";
import "./reset.css";
import LoginNorm from "./pages/LoginNorm";
import NeedToSubs from "./pages/NeedToSubs";
import Subscriptions from "./pages/Subscriptions";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // MainLayout теперь здесь
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/music", element: <MusicPage /> },
      { path: "/loginForm", element: <Login /> },
      {
        path: '/login',
        element: <LoginNorm />,
      },
      {
        path: '/needToSubs',
        element: <NeedToSubs />,
      },
      {
        path: '/subscriptions',
        element: <Subscriptions />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
