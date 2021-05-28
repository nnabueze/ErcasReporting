import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { GRAY, PRIMARYCOLOR, PRIMARYCOLORLIGHT, WHITE } from "../../Contants";

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  innerContainerTwo: {
    height: hp("25%"),
    backgroundColor: PRIMARYCOLORLIGHT,
    marginLeft: hp("30%"),
    borderTopLeftRadius: hp("60%"),
    overflow: "hidden",
  },
  innerContainerOne: {
    height: hp("75%"),
    padding: hp("1%"),
  },
  box1: {
    flex: 1,
  },
  box2: {
    flex: 0.7,
    paddingLeft: hp("1%"),
    paddingRight: hp("1%"),
  },
  textBox: {
    backgroundColor: "#efefef",
    borderBottomColor: "#efefef",
    borderRadius: 10,
    paddingBottom: 10,
  },
  logoContainer: { flex: 1, flexDirection: "row" },
  logoText: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },
  logo: { fontSize: 25, fontWeight: "bold" },
  illustration: { flex: 1 },
  image: { height: "100%", width: "100%" },
  errorContainer: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: PRIMARYCOLORLIGHT,
  },
  errorText: {
    color: PRIMARYCOLORLIGHT,
  },
});
export default loginStyles;
