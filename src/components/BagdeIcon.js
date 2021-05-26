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
