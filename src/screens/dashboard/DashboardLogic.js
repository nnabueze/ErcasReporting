import React, { useState } from "react";
import { DATA } from "../../Contants";

const DashboardLogic = () => {
  const [categoryData, setCategoryData] = useState([...DATA]);
  const [selectedValue, setSelectedValue] = useState("java");
  return { categoryData, selectedValue };
};

export default DashboardLogic;
