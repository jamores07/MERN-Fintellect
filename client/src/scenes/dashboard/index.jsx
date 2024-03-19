
import { useEffect, useState } from "react";


const Dashboard = () => {

  let [kpiData, setkpiData] = useState([])

  useEffect(() => {
    fetch("/api/kpi")
    .then((response) => response.json())
    .then((json) => {
      console.log("Raw JSON Response: ", json);
      setkpiData(json);
    })
  }, [])

  if(kpiData) {
    const monthlyData = kpiData.monthlyData
    console.log(monthlyData);

  }



  return (
    <>

  </>
  )
}

export default Dashboard