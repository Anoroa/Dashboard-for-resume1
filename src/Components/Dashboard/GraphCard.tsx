import axios from "axios"
import { useEffect, useState } from "react"
import CountUp from "react-countup"
import { FaRocket, FaWallet, FaWrench } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import ProgressBar from "./ProgressBar"

const GraphCard = () => {

  const [barData, setbarData] = useState(0)

  useEffect(() => {
    axios.get('https://dummyjson.com/carts')
    .then((res)=>setbarData(Math.round(res.data.total * 1700)))
    .catch((err)=>console.log(err))
  }, [])

  console.log(barData)
  return (
    <>
      <div className="graph-card-row flex justify-between mt-9">
        {/* card1 */}
        <div className="single-card w-25.25 h-16.25 flex flex-col">
         <div className="flex gap-2.5 items-center mb-2.25">
           <FaWallet className="w-6.5 h-6.5 p-1.5 bg-teal-300 text-white rounded-lg"/>
           <h3 className="font-inter font-bold text-gray-400 text-[14px]">Users</h3>
         </div>
           <CountUp className="text-lg font-inter font-bold text-gray-700 " end={barData} delay={0} duration={3} separator=","/>
           <ProgressBar percentage={32} />
        </div>
        {/* card2 */}
        <div className="single-card w-25.25 h-16.25 flex flex-col">
         <div className="flex gap-2.5 items-center mb-2.25">
           <FaRocket className="w-6.5 h-6.5 p-1.5 bg-teal-300 text-white rounded-lg"/>
           <h3 className="font-inter font-bold text-gray-400 text-[14px]">Clicks</h3>
         </div>
           <CountUp className="text-lg font-inter font-bold text-gray-700" suffix="M" end={barData/222} delay={0} duration={3} separator=","/>
           <ProgressBar percentage={67} />
        </div>
        {/* card3 */}
        <div className="single-card w-25.25 h-16.25 flex flex-col">
         <div className="flex gap-2.5 items-center mb-2.25">
           <FaCartShopping className="w-6.5 h-6.5 p-1.5 bg-teal-300 text-white rounded-lg"/>
           <h3 className="font-inter font-bold text-gray-400 text-[14px]">Sales</h3>
         </div>
           <CountUp className="text-lg font-inter font-bold text-gray-700 " prefix="$" end={barData*2} delay={0} duration={3} separator=","/>
           <ProgressBar percentage={89} />
        </div>
        {/* card4 */}
        <div className="single-card w-25.25 h-16.25 flex flex-col">
         <div className="flex gap-2.5 items-center mb-2.25">
           <FaWrench className="w-6.5 h-6.5 p-1.5 bg-teal-300 text-white rounded-lg"/>
           <h3 className="font-inter font-bold text-gray-400 text-[14px]">Items</h3>
         </div>
           <CountUp className="text-lg font-inter font-bold text-gray-700 " end={barData/321} delay={0} duration={3} separator=","/>
           <ProgressBar percentage={12} />
        </div>
      </div>
    </>
  )
}

export default GraphCard