import { Outlet } from "react-router"
import SideNav from "../Components/SideNav"

const DashboardLayout = () => {
  return (
    <>
      <SideNav />
      <Outlet />
    </>
  )
}

export default DashboardLayout