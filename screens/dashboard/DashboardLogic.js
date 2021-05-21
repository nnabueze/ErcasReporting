import React from "react";

const DashboardLogic = () => {
  const navigateToScreen = (props) => {
    props.navigate("Remittance");
  };
  return { navigateToScreen };
};

export default DashboardLogic;
