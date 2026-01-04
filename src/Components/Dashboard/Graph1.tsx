import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, YAxis } from "recharts";
import GraphCard from "./GraphCard";

const Graph1 = () => {
  const [apiData, setApiData] = useState(0);

  // dummy data for the bar chart
  // In a real application, this data would likely come from props or an API call
  // this is not ai btw
  const data = [
    { sales: 100 },
    { sales: 200 },
    { sales: 300 },
    { sales: 400 },
    { sales: 500 },
  ];

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?sortBy=title&order=asc")
      .then((res) => {
        setApiData(Math.round(res.data.total / 13));
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(apiData);

  return (
    <div className="w-163 h-111.25 bg-white rounded-2xl px-4 pt-4 pb-7.5 mt-6 shadow-md">
      <BarChart
        width={620}
        height={222}
        data={data}
        margin={{ top: 20, right: 20, left: 30, bottom: 20 }}
        className="bg-linear-to-r from-[#313860] to-[#151928] rounded-xl"
      >
        <YAxis
          width={30}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#ffffff", fontSize: 10, fontFamily: "Inter" }}
        />

        <Bar dataKey="sales" fill="white" barSize={7} radius={[4, 4, 4, 4]} />
      </BarChart>
      <div className="mt-6">
        <h1 className="text-lg text-gray-700 font-bold font-inter">
          {" "}
          Active Users
        </h1>
        <h3 className="text-[14px] text-gray-400 font-inter">
          <span className="text-green-400 font-inter text-[14px] font-bold">
            (+{apiData})
          </span>{" "}
          than last week
        </h3>
      </div>
      <GraphCard />
    </div>
  );
};

export default Graph1;
