import React, { useState } from "react";
import { DATA } from "../../Contants";

const DashboardLogic = () => {
  const [categoryData, setCategoryData] = useState([...DATA]);
  return { categoryData };
};

export default DashboardLogic;
