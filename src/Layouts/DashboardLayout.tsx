import { Outlet } from "react-router"
import SideNav from "../Components/SideNav"
import Breadcrumbs from "../Components/Breadcrumbs"

const DashboardLayout = () => {
  return (
    <div className="flex h-full">
      <SideNav />
      <div className="flex flex-col pt-8 pl-12 bg-gray-50 w-full h-screen">
        <Breadcrumbs />
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout