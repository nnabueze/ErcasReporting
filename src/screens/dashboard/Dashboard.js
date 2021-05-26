import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  View,
} from "native-base";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import BagdeIcon from "../../components/BagdeIcon";
import {
  GREEN,
  PRIMARYCOLOR,
  SECONDARYCOLOR,
  TARBARICONBACKGROUND,
  WHITE,
} from "../../Contants";

import DashboardLogic from "./DashboardLogic";
import styles from "./DashboardSheet";

const CategoryItem = ({ title }) => (
  <View style={styles.sectionView}>
    <Text>{title}</Text>
  </View>
);

const Indicator = ({ tintColor, icon }) => (
  <>
    <View style={styles.todayTextOne}>
      <BagdeIcon
        backgroundcolor={TARBARICONBACKGROUND}
        imageHight={13}
        imageWidth={13}
        tintColor={tintColor}
        paddingLeft={3}
        radius={10}
        icon={icon}
        viewHight={20}
        viewWidth={20}
      />
      <Text style={styles.todayTextTwo}>39%</Text>
    </View>
  </>
);

const MonthlyContainer = () => (
  <>
    <View style={styles.monthlyContainerTextOne}>
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
    </View>
    <View style={styles.monthlyContainerTextTwo}>
      <View style={styles.monthlyIndicator}>
        <Indicator icon="arrow-up" tintColor={GREEN} />
      </View>
      <Text style={styles.monthlyAmountText}>200,000,000</Text>
    </View>
    <View style={styles.monthlyContainerTextThree}>
      <Text style={styles.monthlySummary}>Monthly Summary</Text>
    </View>
  </>
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
          <Title>Dashboard</Title>
        </Body>
        <Right />
      </Header>
      <View style={styles.searchView}></View>
      <View style={styles.todayAmountView}>
        <View style={styles.todayAmountContainer}>
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
          <Text style={styles.todayAmountText}>100,000,000</Text>
        </View>

        <View style={styles.todayAmountContainer2}>
          <Text style={styles.todayEmptyText}></Text>
          <Indicator icon="arrow-up" tintColor={GREEN} />
          <Text style={styles.todayTextThree}>Today Summary</Text>
        </View>
      </View>
      <Content padder style={styles.content}>
        <View style={styles.remitContainer}>
          <View style={styles.remite}>
            <MonthlyContainer />
          </View>
          <View style={styles.remite}>
            <MonthlyContainer />
          </View>
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

export default Dashboard;
