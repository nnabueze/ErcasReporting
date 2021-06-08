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
import { RefreshControl, StatusBar } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import BagdeIcon from "../../components/BagdeIcon";
import DashbordPicker from "../../components/DashbordPicker";
import DisplayLineChart from "../../components/DisplayLineChart";
import DisplayNumberFormat from "../../components/DisplayNumberFormat";
import NativeBasePicker from "../../components/NativeBasePicker";
import { ShowToast } from "../../components/ShowToast";
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
  BADGECOLORTHREE,
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
  const {
    onLogout,
    billerName,
    role,
    userName,
    capitalize,
    cashAtHand,
    todayAmount,
    monthlyAmount,
    yesterdayAmount,
    errorMessage,
    isError,
    onRefresh,
    refereshing,
    onPickerChange,
    selectedValue,
    allBillers,
    displaySpinner,
    onDashboardMenuClick,
    day3,
    day4,
    day5,
    day6,
    today,
    yesterday,
  } = DashboardLogic();
  return (
    <Container>
      <Header androidStatusBarColor={PRIMARYCOLOR} style={styles.header}>
        <StatusBar hidden={false} />
        <Left>
          <Button transparent onPress={onDashboardMenuClick}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Dashboard</Title>
        </Body>
        <Right>
          <Button transparent onPress={onLogout}>
            <Icon type="MaterialIcons" name="logout" />
          </Button>
        </Right>
      </Header>
      <View style={styles.searchView}>
        <Text style={styles.welcomeText}>Welcome {capitalize(userName)}!</Text>
        <View style={styles.pickerContainer}>
          <Text style={{ color: WHITE }}>{capitalize(billerName)} Summary</Text>
          <View style={styles.pickerView}>
            {role === "SuperAdmin" && (
              <DashbordPicker
                onPickerChange={onPickerChange}
                selectedValue={selectedValue}
                billers={allBillers}
              />
            )}

            {/* <NativeBasePicker /> */}
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
            value={todayAmount}
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
      <Content
        padder
        style={styles.content}
        refreshControl={
          <RefreshControl
            style={{ backgroundColor: "#E0FFFF" }}
            refreshing={refereshing}
            onRefresh={onRefresh}
            tintColor="#ff0000"
            title="Loading..."
            titleColor="#000"
            colors={["#ff0000", "#00ff00", "#0000ff"]}
            progressBackgroundColor="#efefef"
          />
        }
      >
        {displaySpinner && (
          <Spinner
            visible={displaySpinner}
            textContent={"Loading..."}
            textStyle={{ color: "#fff" }}
            overlayColor="rgba(0, 0, 0, 0.7)"
          />
        )}
        <View style={styles.remitContainer}>
          <View style={styles.remite}>
            <MonthlyContainer
              amount={monthlyAmount}
              badgeColor={BADGECOLORONE}
              icon="chart-three"
              indicatorAmount={9}
              indicatorColor={INDICATORCOLORONE}
              indicatorIcon="arrow-up"
              title="Monthly Summary"
            />
          </View>
          <View style={styles.remite}>
            <MonthlyContainer
              amount={cashAtHand}
              badgeColor={INDICATORCOLORTWO}
              icon="chart-two"
              indicatorAmount={20}
              indicatorColor={INDICATORCOLORTWO}
              indicatorIcon="arrow-down"
              title="Monthly Cash At Hand"
            />
          </View>
        </View>
        <View style={styles.yesterdayContainer}>
          <View style={styles.yesterdayViewOne}>
            <View style={styles.yesterdayColumnOne}>
              <BagdeIcon
                backgroundcolor={BADGECOLORTHREE}
                imageHight={25}
                imageWidth={20}
                tintColor={WHITE}
                paddingLeft={8}
                radius={17}
                icon="chart-four"
                viewHight={35}
                viewWidth={35}
              />
            </View>

            <View style={styles.yesterdayColumnTwo}>
              <Indicator
                icon="arrow-up"
                tintColor={GREEN}
                textColor={GREEN}
                backgroundColor={GREEN}
                amount={20.4}
              />
            </View>

            <View style={styles.yesterdayColumnThree}>
              <DisplayNumberFormat
                value={yesterdayAmount}
                textStyle={styles.yesterdayAmount}
              />
            </View>
          </View>
          <View style={styles.yesterdayViewTwo}>
            <Text style={styles.yesterdaySummary}>Yesterday Summary</Text>
          </View>
        </View>

        <View style={styles.mdaText}>
          <Text style={styles.categoryText}>Weekly chart</Text>
          <Text style={styles.viewCategoryText}>see all</Text>
        </View>
        <View style={styles.listMdaView}>
          <View style={styles.displayLineChartContainer}>
            <DisplayLineChart
              today={today}
              yesterday={yesterday}
              day3={day3}
              day4={day4}
              day5={day5}
              day6={day6}
            />
          </View>
        </View>
        {isError && ShowToast(errorMessage)}
      </Content>
    </Container>
  );
};

export default Dashboard;
