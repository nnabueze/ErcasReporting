import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
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
  Card,
  CardItem,
  Button,
} from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Dimensions, Image, StatusBar, StyleSheet } from "react-native";
import VerifyLogic from "./VerifyLogic";
import {
  BLACK,
  GRAY,
  INDICATORCOLORONE,
  INDICATORCOLORTWO,
  PRIMARYCOLOR,
  WHITE,
} from "../../Contants";
import { ShowToast } from "../../components/ShowToast";
import Spinner from "react-native-loading-spinner-overlay";
const { height, width } = Dimensions.get("window");

const Verify = () => {
  const {
    onPickerChange,
    selectedValue,
    allBillers,
    billerName,
    onLogout,
    isAmin,
    isContent,
    isPending,
    setRemittanceKey,
    displaySpinner,
    isError,
    errorMessage,
    amount,
    dateApproved,
    dateGenerated,
    handlerName,
    remittanceId,
    onBackClick,
    onClearClick,
  } = VerifyLogic();

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
          <Title>Verification</Title>
        </Body>
        <Right>
          <Button transparent onPress={onLogout}>
            <Icon type="MaterialIcons" name="logout" />
          </Button>
        </Right>
      </Header>
      <View style={styles.billerView}>
        <View style={styles.billerViewText2}>
          <Text style={styles.billerViewText}>{billerName}</Text>
        </View>
        <View style={styles.remittanceText}>
          <Text style={{ color: WHITE }}>Remittance Verification</Text>
        </View>
      </View>
      <Content padder>
        {displaySpinner && (
          <Spinner
            visible={displaySpinner}
            textContent={"Loading..."}
            textStyle={{ color: "#fff" }}
            overlayColor="rgba(0, 0, 0, 0.7)"
          />
        )}
        {isAmin && (
          <View style={styles.remittanceInputContainer}>
            <View style={styles.remittanceInputView}>
              <Item regular>
                <Input
                  placeholder="Enter remittance Id"
                  onChangeText={(e) => setRemittanceKey(e)}
                />
              </Item>
            </View>
            <View style={styles.pickerView}>
              <Picker
                mode="dropdown"
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  onPickerChange(itemValue)
                }
              >
                <Picker.Item label="Select Biller" value="" />
                {allBillers.map((item, index) => (
                  <Picker.Item
                    key={index}
                    label={item.IGR_Name}
                    value={item.IGR_Code}
                  />
                ))}
              </Picker>
            </View>
          </View>
        )}
        <View style={styles.imageContainer}>
          {isContent ? (
            <View style={styles.contentView}>
              <View style={styles.dataText}>
                <Text>Handler Name:</Text>
                <Text>{handlerName}</Text>
              </View>
              <View style={styles.dataText2}>
                <Text>Remittance Key:</Text>
                <Text>{remittanceId}</Text>
              </View>
              <View style={styles.dataText}>
                <Text>Amount:</Text>
                <Text>{amount}</Text>
              </View>
              <View style={styles.dataText2}>
                <Text>Status:</Text>
                {isPending ? (
                  <>
                    <Text
                      style={{ color: INDICATORCOLORTWO, fontWeight: "bold" }}
                    >
                      Pending!
                    </Text>
                  </>
                ) : (
                  <>
                    <Text
                      style={{ color: INDICATORCOLORONE, fontWeight: "bold" }}
                    >
                      Cleared!
                    </Text>
                  </>
                )}
              </View>
              <View style={styles.dataText}>
                <Text>Date Generated:</Text>
                <Text>{dateGenerated}</Text>
              </View>
              <View style={styles.dataText2}>
                <Text>Date Approved:</Text>
                <Text>{dateApproved}</Text>
              </View>
              <View style={styles.dataTextButton}>
                <Button rounded warning onPress={onBackClick}>
                  <Text> Back </Text>
                </Button>
                {isPending && (
                  <Button rounded success onPress={onClearClick}>
                    <Text> Clear </Text>
                  </Button>
                )}
              </View>
            </View>
          ) : (
            <>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {isAmin && !isContent ? (
                  <>
                    <Text>{errorMessage}</Text>
                  </>
                ) : (
                  <>
                    <Text>You dont have full access to verify remittance</Text>
                  </>
                )}
              </View>
              <Image
                source={require(`../../../assets/img/illustration-3.png`)}
                resizeMode="contain"
                style={styles.image}
              />
            </>
          )}

          {isError && ShowToast(errorMessage)}
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
  picker: {
    color: BLACK,
  },
  remittanceText: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  billerViewText2: { flex: 1 },
  remittanceInputContainer: {
    height: hp("13%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: hp(1),
    paddingRight: hp(2),
  },
  remittanceInputView: { flex: 1 },
  pickerView: {
    flex: 0.5,
  },
  image: { height: "100%", width: "100%" },
  imageContainer: { height: hp("45%") },
  contentView: {
    flex: 1,
  },
  dataText: {
    flex: 1,
    backgroundColor: "#efefef",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: hp(2),
    paddingRight: hp(2),
  },
  dataText2: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: hp(2),
    paddingRight: hp(2),
  },
  dataTextButton: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: hp(2),
    paddingRight: hp(2),
  },
});

export default Verify;
