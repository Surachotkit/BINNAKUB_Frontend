import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import MarketPage from "../pages/Market/MarketPage";
import ProfilePage from "../pages/UserProfile/ProfilePage";
import Deposit from "../pages/UserProfile/Deposit";
import Transaction from "../pages/UserProfile/Transaction";
import Dashboard from "../pages/UserProfile/Dashboard";
import Profile from "../layout/Profile";
import DashboardNotRecord from "../pages/UserProfile/DashboardNotrecord";
import CheckIsAdmin from "../features/auth/CheckIsAdmin";

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
      // { path: "profile", element: <ProfilePage /> },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      { path: "/profile/dashboard", element: <Dashboard /> },
      { path: "/profile/transactionhistory", element: <Transaction /> },
      { path: "/profile/deposithistory", element: <Deposit /> },
      { path: "/profile/dashboard/norecord", element: <DashboardNotRecord /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
