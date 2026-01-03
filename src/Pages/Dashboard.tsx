import { useEffect } from "react"
import StatsCard from "../Components/StatsCard"
import BannerCard1 from "../Components/BannerCard1"

const Dashboard = () => {

  useEffect(() => {
    document.title = "Dashboard | Dashboard"
  }, [])


  return (
    <>
      <h1 className="text-[14px] font-bold font-inter">Dashboard</h1>
      <StatsCard />
      <BannerCard1 />
    </>
  )
}

export default Dashboard