
import {useEffect, useMemo,  useState  } from "react";
import {   useTheme } from "@mui/material";
import {
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";


const Dashboard = () => {
  const { palette } = useTheme();

  let [kpiData, setkpiData] = useState([])

  useEffect(() => {
    fetch("/api/kpi")
    .then((response) => response.json())
    .then((json) => {
     // console.log("Raw JSON Response: ", json);
      setkpiData(json);
      //setIsLoading(false); // Data is loaded, stop showing loading state
    })
  }, [])


  //console.log(kpiData)

  const revenue = useMemo(() => {
    if (!kpiData || !kpiData.length) return null; 
    return kpiData[0].monthlyData.map(({ month, revenue }) => {
      return {
        name: month.substring(0, 3),
        revenue: parseFloat(revenue.replace('$', ''))
      };
    });
  }, [kpiData]);

  //console.log(revenue)



  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default Dashboard