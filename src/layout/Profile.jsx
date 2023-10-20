import { Outlet } from "react-router-dom";
import Header from "./Header";
import TabBarProfile from "../components/TabBarProfile";
import Sidebar from "../components/Sidebar";


export default function Profile() {
  return (
    <div>
        <Header/>
        <TabBarProfile/>
        <div className="flex">

        <Sidebar/>
        <Outlet/>
        </div>
    </div>
  )
}
