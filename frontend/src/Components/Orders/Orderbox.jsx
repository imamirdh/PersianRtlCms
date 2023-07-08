import React from "react";
import useFetch from "../../Hooks/useFetch";
function Orderbox() {
  const [
    datasArray,
    deleteItemFromDatas,
    updateItemFromDatas,
    addItemFromDatas,
  ] = useFetch("http://localhost:8000/api/orders/");

  console.log(datasArray);
  return (
    <div>
      
    </div>
  );
}

export default Orderbox;
