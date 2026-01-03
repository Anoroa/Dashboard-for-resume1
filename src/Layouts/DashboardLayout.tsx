import { Outlet } from "react-router"
import SideNav from "../Components/SideNav"
import Breadcrumbs from "../Components/Breadcrumbs"

const DashboardLayout = () => {
  return (
    <div className="flex gap-12 pt-5.75">
      <SideNav />
      <div className="flex flex-col">
        <Breadcrumbs />
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout