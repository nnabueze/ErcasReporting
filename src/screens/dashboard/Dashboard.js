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
import BagdeIcon from "../../components/BagdeIcon";
import ScreenStyle from "../../components/styles/ScreenStyle";
import {
  GREEN,
  ICONPAYMENT,
  PRIMARYCOLOR,
  PRIMARYCOLORLIGHT,
  SECONDARYCOLOR,
  TARBARICONBACKGROUND,
  TARBARTINITCOLOR,
  WHITE,
} from "../../Contants";

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
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <BagdeIcon
            backgroundcolor={SECONDARYCOLOR}
            imageHight={25}
            imageWidth={20}
            tintColor={WHITE}
            paddingLeft={8}
            radius={17}
            icon="home"
            viewHight={35}
            viewWidth={35}
          />
          <Text style={{ color: "#000", fontSize: 33, fontWeight: "bold" }}>
            1,000,000
          </Text>
        </View>

        <View
          style={{
            flex: 0.6,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <Text style={{ flex: 0.6 }}></Text>
          <View
            style={{ flex: 0.8, flexDirection: "row", alignItems: "center" }}
          >
            <BagdeIcon
              backgroundcolor={TARBARICONBACKGROUND}
              imageHight={13}
              imageWidth={13}
              tintColor={GREEN}
              paddingLeft={3}
              radius={10}
              icon="arrow-up"
              viewHight={20}
              viewWidth={20}
            />
            <Text
              style={{
                color: GREEN,
                fontSize: 13,
                fontWeight: "bold",
              }}
            >
              39%
            </Text>
          </View>
          <Text
            style={{
              color: PRIMARYCOLORLIGHT,
              fontSize: 15,
              flex: 1,
            }}
          >
            Today Summary
          </Text>
        </View>
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
            showsHorizontalScrollIndicator={false}
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
    marginLeft: 60,
    marginRight: 60,
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
