import { StyleSheet } from "react-native";
import ScreenStyle from "../../components/styles/ScreenStyle";
import { GREEN, PRIMARYCOLOR, PRIMARYCOLORLIGHT, WHITE } from "../../Contants";

const styles = StyleSheet.create({
  searchView: {
    height: 170,
    backgroundColor: PRIMARYCOLOR,
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
  todayAmountText: { color: "#000", fontSize: 33, fontWeight: "bold" },
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
    height: 150,
  },
  remite: {
    backgroundColor: WHITE,
    width: 190,
    borderRadius: 10,
    ...ScreenStyle.boxShadow,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  sectionView: {
    backgroundColor: WHITE,
    width: 150,
    borderRadius: 10,
    margin: 10,
    ...ScreenStyle.boxShadow,
  },
  categoryText: {
    color: "#000",
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
    justifyContent: "center",
    flexDirection: "row",
  },
  monthlyContainerTextThree: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  monthlyAmountText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "orange",
  },
  monthlyIndicator: {
    flex: 1,
    backgroundColor: "purple",
  },
});

export default styles;
