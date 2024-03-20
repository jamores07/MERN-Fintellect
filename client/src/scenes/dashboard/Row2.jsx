import {useEffect, useMemo, useState  } from "react";

const Row2 = () => {
  let [productsData, setproductsData] = useState([])
  let [kpiData, setkpiData] = useState([])

  useEffect(() => {
    fetch("/api/products")
    .then((response) => response.json())
    .then((json) => {
     // console.log("Raw JSON Response: ", json);
      setproductsData(json);
      //setIsLoading(false); // Data is loaded, stop showing loading state
    })
  }, [])

  console.log(productsData)

  useEffect(() => {
    fetch("/api/kpi")
    .then((response) => response.json())
    .then((json) => {
     // console.log("Raw JSON Response: ", json);
      setkpiData(json);
      //setIsLoading(false); // Data is loaded, stop showing loading state
    })
  }, [])

  const operationalExpenses = useMemo(() => {
    if (!kpiData || !kpiData.length) return null;
    return kpiData[0].monthlyData.map(({ month, operationalExpenses, nonOperationalExpenses }) => {
      return {
        name: month.substring(0, 3),
        "Operational Expenses": operationalExpenses,
        "Non Operational Expenses": nonOperationalExpenses,
      };
    });
  }, [kpiData]);

  console.log(operationalExpenses)



    return (
      <div>Row2</div>
    )
  }
  
  export default Row2