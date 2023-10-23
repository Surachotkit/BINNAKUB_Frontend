import DashboardItem from "../../features/profile/DashboardItem";
import DashboardMenu from "../../features/profile/DashboardMenu";

export default function Dashboard() {
  return (
    <div className="flex justify-center w-full pt-20">
      <div className="flex flex-col">
        <DashboardMenu />
        <DashboardItem />
      </div>
    </div>
  );
}
