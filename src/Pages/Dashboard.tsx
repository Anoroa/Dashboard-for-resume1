import { useEffect } from "react"
import StatsCard from "../Components/Dashboard/StatsCard"
import BannerCard1 from "../Components/Dashboard/BannerCard1"
import BannerCard2 from "../Components/Dashboard/BannerCard2"
import Graph1 from "../Components/Dashboard/Graph1"

const Dashboard = () => {

  useEffect(() => {
    document.title = "Dashboard | Dashboard"
  }, [])


  return (
    <>
      <h1 className="text-[14px] font-bold font-inter">Dashboard</h1>
      <StatsCard />
      <div className="flex justify-between mt-6">
        <BannerCard1 />
        <BannerCard2 />
      </div>
      <div>
        <Graph1 />
      </div>
    </>
  )
}

export default Dashboard