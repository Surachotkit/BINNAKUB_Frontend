import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MarketPage from "../pages/MarketPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "login",
        element: (
          <RedirectIfAuthenticated>
            <LoginPage />
          </RedirectIfAuthenticated>
        ),
      },
      { path: "register", element: <RegisterPage /> },
      { path: "market", element: <MarketPage /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
