
import { useMemo } from "react";

import useFetchData from "../../state/api";




const Row2 = () => {

  const { data: kpiData} = useFetchData('/api/kpi');
  const { data: productData } = useFetchData('/api/products');

  console.log(kpiData)

  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);

  console.log(operationalExpenses)

  const productExpenseData = useMemo(() => {
    return (
      productData &&
      productData.map(({ _id, price, expense }) => {
        return {
          id: _id,
          price: price,
          expense: expense,
        };
      })
    );
  }, [productData]);

  console.log(productExpenseData)


  return (
    <div>
      Row2
    </div>
  );

}
  
  export default Row2