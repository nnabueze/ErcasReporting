import React from "react";
import { Image, View } from "react-native";

const BagdeIcon = ({
  backgroundcolor,
  icon,
  viewWidth,
  viewHight,
  paddingLeft,
  radius,
  imageWidth,
  imageHight,
  tintColor,
}) => {
  var imagePath = "";

  switch (icon) {
    case "home":
      imagePath = require(`../../assets/img/home.png`);
      break;
    case "arrow-up":
      imagePath = require(`../../assets/img/arrow-up.png`);
      break;
    case "arrow-down":
      imagePath = require(`../../assets/img/arrow-down.png`);
      break;
    case "chart-one":
      imagePath = require(`../../assets/img/chart-one.png`);
      break;
    case "chart-two":
      imagePath = require(`../../assets/img/chart-two.png`);
      break;
    case "chart-three":
      imagePath = require(`../../assets/img/chart-three.png`);
      break;
    case "chart-four":
      imagePath = require(`../../assets/img/chart-four.png`);
      break;
    default:
      imagePath = require(`../../assets/img/payment.png`);
  }

  return (
    <View
      style={{
        alignContent: "center",
        justifyContent: "center",
        width: viewWidth,
        height: viewHight,
        paddingLeft: paddingLeft,
        borderRadius: radius,
        backgroundColor: backgroundcolor,
      }}
    >
      <Image
        source={imagePath}
        resizeMode="contain"
        style={{ width: imageWidth, height: imageHight, tintColor: tintColor }}
      />
    </View>
  );
};

export default BagdeIcon;
