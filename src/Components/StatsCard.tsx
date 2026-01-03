import axios from "axios";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaGlobe, FaShoppingCart, FaWallet } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";

const StatsCard = () => {
  const [users, setUsers] = useState(0);
  const [sales, setSales] = useState(0);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=5&skip=10&select=firstName,age")
      .then((res) => setUsers(Number(res.data.total)/5))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/carts")
      .then((res) => setSales(Number(res.data.total) * 312))
      .catch((err) => console.log(err));
  }, []);

  console.log(users);
  console.log(`sales: ${sales}`);
  return (
    <div className="flex gap-6">
      {/* card 1 */}
      <div className="singleStat py-[17.5px] pl-5.5 pr-[17.5px] bg-white w-95.5 rounded-2xl mt-7.5 shadow-sm flex justify-between">
        <div className="col-1">
          <h3 className="text-[12px] font-bold font-inter text-gray-400">Today's Money</h3>
          <div className="flex items-center gap-2 mb-1">
            <CountUp className="text-[18px] font-bold font-inter text-fontColor" prefix="$" end={sales} separator=","  duration={2} delay={0} key={sales}/>
            <CountUp className="text-[14px] font-bold font-inter text-green-400" end={users} suffix="%" decimals={0}  duration={2} delay={0} />
          </div>
        </div>
        <div className="col-2">
          <FaWallet className="w-11.25 h-11.25 p-3 rounded-xl bg-[#4FD1C5] text-[23px] text-white" />
        </div>
      </div>
      {/* Card 2 */}
      <div className="singleStat py-[17.5px] pl-5.5 pr-[17.5px] bg-white w-95.5 rounded-2xl mt-7.5 shadow-sm flex justify-between">
        <div className="col-1">
          <h3 className="text-[12px] font-bold font-inter text-gray-400">Today's Users</h3>
          <div className="flex items-center gap-2 mb-1">
            <CountUp className="text-[18px] font-bold font-inter text-fontColor" prefix="" end={sales/2} separator=","  duration={2} delay={0} key={sales}/>
            <CountUp className="text-[14px] font-bold font-inter text-green-400" end={users+21} suffix="%" decimals={0}  duration={2} delay={0} />
          </div>
        </div>
        <div className="col-2">
          <FaGlobe className="w-11.25 h-11.25 p-3 rounded-xl bg-[#4FD1C5] text-[23px] text-white" />
        </div>
      </div>
      {/* card 3 */}
      <div className="singleStat py-[17.5px] pl-5.5 pr-[17.5px] bg-white w-95.5 rounded-2xl mt-7.5 shadow-sm flex justify-between">
        <div className="col-1">
          <h3 className="text-[12px] font-bold font-inter text-gray-400">New Users</h3>
          <div className="flex items-center gap-2 mb-1">
            <CountUp className="text-[18px] font-bold font-inter text-fontColor" prefix="" end={sales / 3} separator=","  duration={2} delay={0} key={sales}/>
            <CountUp className="text-[14px] font-bold font-inter text-green-400" end={users *5} suffix="%" decimals={0}  duration={2} delay={0} />
          </div>
        </div>
        <div className="col-2">
          <IoIosPaper className="w-11.25 h-11.25 p-3 rounded-xl bg-[#4FD1C5] text-[23px] text-white" />
        </div>
      </div>
      {/* card 4 */}
      <div className="singleStat py-[17.5px] pl-5.5 pr-[17.5px] bg-white w-95.5 rounded-2xl mt-7.5 shadow-sm flex justify-between">
        <div className="col-1">
          <h3 className="text-[12px] font-bold font-inter text-gray-400">Total Sales</h3>
          <div className="flex items-center gap-2 mb-1">
            <CountUp className="text-[18px] font-bold font-inter text-fontColor" prefix="$" end={sales * 3} separator=","  duration={2} delay={0} key={sales}/>
            <CountUp className="text-[14px] font-bold font-inter text-green-400" end={users * 2} suffix="%" decimals={0}  duration={2} delay={0} />
          </div>
        </div>
        <div className="col-2">
          <FaShoppingCart className="w-11.25 h-11.25 p-3 rounded-xl bg-[#4FD1C5] text-[23px] text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
