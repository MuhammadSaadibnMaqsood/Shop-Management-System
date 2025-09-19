import React from "react";
import useGetSoldItems from "../hooks/useGetSoldItems";

const SoldItems = () => {
  const { data: soldItems } = useGetSoldItems();

  console.log(soldItems);

  return <div>SoldItems</div>;
};

export default SoldItems;
