import React, { useState } from "react";
import { DATA } from "../../Contants";

const DashboardLogic = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return { selectedValue };
};

export default DashboardLogic;
