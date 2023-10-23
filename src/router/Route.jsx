import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import MarketPage from "../pages/Market/MarketPage";
import DepositHistory from "../pages/UserProfile/DepositHistory";
import TransactionHistory from "../pages/UserProfile/TransactionHistory";
import Dashboard from "../pages/UserProfile/Dashboard";
import Profile from "../layout/Profile";
import DashboardNotRecord from "../pages/UserProfile/DashboardNotrecord";
import AdminMarketPage from "../pages/Admin/AdminMarket/AdminMarketPage";
import AdminDashboard from "../pages/Admin/AdminProfile/AdminDashboard";
import NotLogin from "../features/auth/NotLogin";
import Authenicated from "../features/auth/Authenicated";
import AdminTransactionHistory from "../pages/Admin/AdminProfile/AdminTransactionHistory";
import AdminDepositHistory from "../pages/Admin/AdminProfile/AdminDepositHistory";

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
      {
        path: "register",
        element: (
          <RedirectIfAuthenticated>
            <RegisterPage />
          </RedirectIfAuthenticated>
        ),
      },
      { path: "market", element: <MarketPage /> },
    ],
  },
  {
    path: "/profile",
    element: (
      <NotLogin>
        <Profile />
      </NotLogin>
    ),
    children: [
      { path: "/profile/dashboard", element: <Dashboard /> },
      { path: "/profile/transactionhistory", element: <TransactionHistory /> },
      { path: "/profile/deposithistory", element: <DepositHistory /> },
      { path: "/profile/dashboard/norecord", element: <DashboardNotRecord /> },
    ],
  },

  {
    path: "/admin/profile",
    element: (
      <Authenicated>
        <NotLogin>
          <Profile />
        </NotLogin>
      </Authenicated>
    ),
    children: [
      { path: "/admin/profile/dashboard", element: <AdminDashboard /> },
      {
        path: "/admin/profile/transactionhistory",
        element: <AdminTransactionHistory />,
      },
      {
        path: "/admin/profile/deposithistory",
        element: <AdminDepositHistory />,
      },
    ],
  },

  {
    path: "/admin",
    element: (
      <Authenicated>
        <Layout />
      </Authenicated>
    ),
    children: [
      { path: "/admin/market", element: <AdminMarketPage /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
