import React from "react";

const LoginLogic = (navigation) => {
  const onLoginClick = () => {
    navigation.navigate("Home");
    //console.log("Testing!!!!!");
  };
  return { onLoginClick };
};

export default LoginLogic;
