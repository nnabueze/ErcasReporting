import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  View,
} from "native-base";
import React from "react";
import { Image, SectionList, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ScreenStyle from "../../components/styles/ScreenStyle";
import { PRIMARYCOLOR, PRIMARYCOLORLIGHT, WHITE } from "../../Contants";

import DashboardLogic from "./DashboardLogic";

const CategoryItem = ({ title }) => (
  <View style={styles.sectionView}>
    <Text>{title}</Text>
  </View>
);

const Dashboard = () => {
  const { categoryData } = DashboardLogic();

  const renderItem = ({ item }) => <CategoryItem title={item.title} />;

  return (
    <Container>
      <Header androidStatusBarColor={PRIMARYCOLOR} style={styles.header}>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
      <View style={styles.searchView}></View>
      <View style={styles.todayAmountView}>
        <View style={{ flex: 1, backgroundColor: "black" }}></View>
        <View style={{ flex: 1, backgroundColor: "red" }}></View>
      </View>
      <Content padder style={styles.content}>
        <View style={styles.remitContainer}>
          <View style={styles.remite}></View>
          <View style={styles.remite}></View>
        </View>
        <View style={styles.mdaText}>
          <Text style={styles.categoryText}>Top Category</Text>
          <Text style={styles.viewCategoryText}>see all</Text>
        </View>
        <View style={styles.listMdaView}>
          <FlatList
            horizontal={true}
            data={categoryData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  searchView: {
    height: 180,
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
    marginLeft: 15,
    marginRight: 15,
    top: -40,
    borderRadius: 10,
    ...ScreenStyle.boxShadow,
  },
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
});

export default Dashboard;
