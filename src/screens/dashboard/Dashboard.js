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
  Picker,
  Form,
} from "native-base";
import React, { useState } from "react";
import BagdeIcon from "../../components/BagdeIcon";
import DashbordPicker from "../../components/DashbordPicker";
import DisplayLineChart from "../../components/DisplayLineChart";
import DisplayNumberFormat from "../../components/DisplayNumberFormat";
import {
  BADGECOLORONE,
  BADGECOLORTWO,
  GRAY,
  GREEN,
  INDICATORCOLORONE,
  INDICATORCOLORTWO,
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

const Indicator = ({ tintColor, icon, amount, backgroundColor, textColor }) => (
  <>
    <View style={styles.todayTextOne}>
      <BagdeIcon
        backgroundcolor={GRAY}
        imageHight={13}
        imageWidth={13}
        tintColor={tintColor}
        paddingLeft={3}
        radius={12}
        icon={icon}
        viewHight={20}
        viewWidth={20}
      />
      <Text style={{ color: `${textColor}`, fontSize: 13, fontWeight: "bold" }}>
        {amount}%
      </Text>
    </View>
  </>
);

const MonthlyContainer = ({
  badgeColor,
  icon,
  indicatorIcon,
  indicatorAmount,
  indicatorColor,
  amount,
  title,
}) => (
  <>
    <View style={styles.monthlyContainerTextOne}>
      <BagdeIcon
        backgroundcolor={badgeColor}
        imageHight={25}
        imageWidth={20}
        tintColor={WHITE}
        paddingLeft={8}
        radius={17}
        icon={icon}
        viewHight={35}
        viewWidth={35}
      />
    </View>
    <View style={styles.monthlyContainerTextTwo}>
      <View style={styles.monthlyIndicator}>
        <Indicator
          icon={indicatorIcon}
          tintColor={indicatorColor}
          textColor={indicatorColor}
          amount={indicatorAmount}
          backgroundColor={indicatorColor}
        />
      </View>
      <DisplayNumberFormat
        value={amount}
        textStyle={styles.monthlyAmountText}
      />
    </View>
    <View style={styles.monthlyContainerTextThree}>
      <Text style={styles.monthlySummary}>{title}</Text>
    </View>
  </>
);

const Dashboard = () => {
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
        <Right>
          <Button transparent>
            <Icon type="MaterialIcons" name="more-vert" />
          </Button>
        </Right>
      </Header>
      <View style={styles.searchView}>
        <Text style={styles.welcomeText}>Welcome Opara!</Text>
        <View style={styles.pickerContainer}>
          <Text style={{ color: WHITE }}>Total Summary</Text>
          <View style={styles.pickerView}>
            <DashbordPicker />
          </View>
        </View>
      </View>
      <View style={styles.todayAmountView}>
        <View style={styles.todayAmountContainer}>
          <BagdeIcon
            backgroundcolor={SECONDARYCOLOR}
            imageHight={25}
            imageWidth={20}
            tintColor={WHITE}
            paddingLeft={8}
            radius={17}
            icon="chart-one"
            viewHight={35}
            viewWidth={35}
          />
          <DisplayNumberFormat
            value={100000000}
            textStyle={styles.todayAmountText}
          />
        </View>

        <View style={styles.todayAmountContainer2}>
          <Text style={styles.todayEmptyText}></Text>
          <Indicator
            icon="arrow-up"
            tintColor={GREEN}
            textColor={GREEN}
            backgroundColor={GREEN}
            amount={20.4}
          />
          <Text style={styles.todayTextThree}>Today Summary</Text>
        </View>
      </View>
      <Content padder style={styles.content}>
        <View style={styles.remitContainer}>
          <View style={styles.remite}>
            <MonthlyContainer
              amount={20000000}
              badgeColor={BADGECOLORONE}
              icon="chart-three"
              indicatorAmount={30.5}
              indicatorColor={INDICATORCOLORONE}
              indicatorIcon="arrow-up"
              title="Monthly Summary"
            />
          </View>
          <View style={styles.remite}>
            <MonthlyContainer
              amount={1000}
              badgeColor={INDICATORCOLORTWO}
              icon="chart-two"
              indicatorAmount={20.5}
              indicatorColor={INDICATORCOLORTWO}
              indicatorIcon="arrow-down"
              title="Cash At Hand"
            />
          </View>
        </View>
        <View style={styles.mdaText}>
          <Text style={styles.categoryText}>Weekly chart</Text>
          <Text style={styles.viewCategoryText}>see all</Text>
        </View>
        <View style={styles.listMdaView}>
          <View style={styles.displayLineChartContainer}>
            <DisplayLineChart />
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Dashboard;
