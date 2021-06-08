import { StyleSheet } from "react-native";
import ScreenStyle from "../../components/styles/ScreenStyle";
import {
  BLACK,
  GRAY,
  GREEN,
  PRIMARYCOLOR,
  PRIMARYCOLORLIGHT,
  WHITE,
} from "../../Contants";

const styles = StyleSheet.create({
  searchView: {
    height: 150,
    backgroundColor: PRIMARYCOLOR,
    paddingLeft: 15,
    paddingRight: 15,
  },
  content: {
    top: -30,
    marginBottom: 0,
    paddingBottom: 10,
  },
  todayAmountView: {
    backgroundColor: WHITE,
    height: 80,
    marginLeft: 60,
    marginRight: 60,
    top: -40,
    borderRadius: 10,
    ...ScreenStyle.boxShadow,
  },
  todayAmountContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  todayAmountContainer2: {
    flex: 0.6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  todayEmptyText: { flex: 0.6 },
  todayTextOne: { flex: 0.8, flexDirection: "row", alignItems: "center" },
  todayTextTwo: { color: GREEN, fontSize: 13, fontWeight: "bold" },
  todayTextThree: { color: PRIMARYCOLORLIGHT, fontSize: 15, flex: 1 },
  todayAmountText: { color: BLACK, fontSize: 33, fontWeight: "bold" },
  header: {
    elevation: 0,
    backgroundColor: PRIMARYCOLOR,
  },
  remitContainer: {
    height: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  mdaText: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  listMdaView: {
    height: 250,
    borderRadius: 10,
    backgroundColor: WHITE,
    ...ScreenStyle.boxShadow,
  },
  remite: {
    backgroundColor: GRAY,
    width: 190,
    borderRadius: 10,
    ...ScreenStyle.boxShadow,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  yesterdayContainer: {
    backgroundColor: GRAY,
    height: 70,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
    ...ScreenStyle.boxShadow,
    borderRadius: 10,
  },
  yesterdayViewOne: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
  },
  yesterdayViewTwo: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  yesterdaySummary: {
    fontSize: 13,
    color: PRIMARYCOLORLIGHT,
  },
  yesterdayColumnOne: {
    flex: 0.7,
    paddingTop: 10,
    alignItems: "center",
  },
  yesterdayColumnTwo: {
    flex: 0.7,
    paddingTop: 10,
    alignItems: "center",
  },
  yesterdayColumnThree: {
    flex: 1,
    alignItems: "flex-end",
  },
  yesterdayAmount: {
    fontSize: 17,
    fontWeight: "bold",
  },
  sectionView: {
    backgroundColor: WHITE,
    width: 150,
    borderRadius: 10,
    margin: 10,
    ...ScreenStyle.boxShadow,
  },
  categoryText: {
    color: BLACK,
  },
  viewCategoryText: {
    color: PRIMARYCOLORLIGHT,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  monthlyContainerTextOne: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  monthlyContainerTextTwo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
  },
  monthlyContainerTextThree: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  monthlyAmountText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  monthlySummary: {
    fontSize: 13,
    color: PRIMARYCOLORLIGHT,
  },
  picker: {
    height: 10,
    width: 150,
    color: "#fff",
  },
  welcomeText: {
    flex: 0.5,
    fontSize: 19,
    color: WHITE,
  },
  pickerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  pickerView: {
    alignItems: "flex-end",
    top: -35,
  },
  displayLineChartContainer: { alignItems: "center" },
});

export default styles;
