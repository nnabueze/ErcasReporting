import React, { useEffect, useState } from "react";
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
  Form,
  Item,
  Picker,
  Input,
} from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Dimensions, Image, StatusBar, StyleSheet } from "react-native";
import DashbordPicker from "../../components/DashbordPicker";
import VerifyLogic from "./VerifyLogic";
import { PRIMARYCOLOR, WHITE } from "../../Contants";
import Logout from "../../components/Logout";
const { height, width } = Dimensions.get("window");

const Verify = () => {
  const { onPickerChange, selectedValue, allBillers, billerName, onLogout } =
    VerifyLogic();

  return (
    <Container style={styles.Container}>
      <Header androidStatusBarColor={PRIMARYCOLOR} style={styles.header}>
        <StatusBar hidden={false} />
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Verify</Title>
        </Body>
        <Right>
          <Button transparent onPress={onLogout}>
            <Icon type="MaterialIcons" name="logout" />
          </Button>
        </Right>
      </Header>
      <View style={styles.billerView}>
        <View style={{ flex: 0.8 }}>
          <Text style={styles.billerViewText}>{billerName}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ color: WHITE }}>Remittance Verification</Text>
        </View>
      </View>
      <Content padder>
        <View
          style={{
            height: hp("20%"),
            backgroundColor: "red",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            top: hp(-5),
          }}
        >
          <View style={{ flex: 1 }}>
            <Item regular>
              <Input placeholder="Regular Textbox" />
            </Item>
          </View>
          <View style={{ flex: 0.5 }}>
            <DashbordPicker
              onPickerChange={onPickerChange}
              selectedValue={selectedValue}
              billers={allBillers}
            />
          </View>
        </View>
        <View style={{ height: hp("60%") }}>
          <Image
            source={require(`../../../assets/img/illustration-3.png`)}
            resizeMode="contain"
            style={{ height: "100%", width: "100%" }}
          />
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: height,
    width: width,
  },
  header: {
    elevation: 0,
    backgroundColor: PRIMARYCOLOR,
  },
  billerView: {
    height: hp(15),
    backgroundColor: PRIMARYCOLOR,
    paddingLeft: hp(2.5),
    paddingTop: hp(1),
    paddingRight: hp(2.5),
  },
  billerViewText: {
    fontSize: 19,
    color: WHITE,
  },
});

export default Verify;
