import { Button, Form, Icon, Input, Item, Label, Text } from "native-base";
import React from "react";
import {
  Image,
  Keyboard,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { WHITE } from "../../Contants";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const Login = () => {
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.innerContainerOne}>
          <View style={styles.box1}>
            <View style={styles.logoContainer}>
              <View style={styles.logoText}>
                <Text style={styles.logo}>Ercas Report App</Text>
                <Text>Just one step away to our product</Text>
              </View>
              <View style={styles.illustration}>
                <Image
                  source={require(`../../../assets/img/illustration-1.png`)}
                  resizeMode="contain"
                  style={styles.image}
                />
              </View>
            </View>
            <View style={styles.errorContainer}>
              <Text>Keep your data safe!</Text>
            </View>
          </View>
          <View style={styles.box2}>
            <Form>
              <Item style={styles.textBox} floatingLabel last>
                <Label>Username</Label>
                <Input />
                <Icon active name="person" />
              </Item>
              <Item style={styles.textBox} floatingLabel last>
                <Label>Password</Label>
                <Input />
                <Icon active name="visibility" type="MaterialIcons" />
              </Item>
              <Button style={styles.loginButton}>
                <Text>Login</Text>
              </Button>
            </Form>
          </View>
        </View>
        <View style={styles.innerContainerTwo}></View>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  innerContainerTwo: {
    height: hp("25%"),
    backgroundColor: "green",
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
  },
});

export default Login;
