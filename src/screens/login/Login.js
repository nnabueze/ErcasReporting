import { Button, Form, Icon, Input, Item, Label, Text } from "native-base";
import React from "react";
import Spinner from "react-native-loading-spinner-overlay";
import {
  ActivityIndicator,
  Image,
  Keyboard,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import LoginLogic from "./LoginLogic";

import loginStyles from "./LoginSheet";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const Login = ({ navigation }) => {
  const {
    onLoginClick,
    email,
    setEmail,
    password,
    setPassword,
    displayAlert,
    displaySpinner,
    displayAlertMessage,
    simpleAlert,
  } = LoginLogic(navigation);

  return (
    <DismissKeyboard>
      <View style={loginStyles.container}>
        <StatusBar hidden={true} />
        <View style={loginStyles.innerContainerOne}>
          <View style={loginStyles.box1}>
            <View style={loginStyles.logoContainer}>
              <View style={loginStyles.logoText}>
                <Text style={loginStyles.logo}>Ercas Report App</Text>
                <Text>Just one step away to our product</Text>
              </View>
              <View style={loginStyles.illustration}>
                <Image
                  source={require(`../../../assets/img/illustration-1.png`)}
                  resizeMode="contain"
                  style={loginStyles.image}
                />
              </View>
            </View>
            <View style={loginStyles.errorContainer}>
              <Text style={loginStyles.errorText}>Keep your data safe!</Text>
            </View>
          </View>
          <View style={loginStyles.box2}>
            {displaySpinner && (
              <Spinner
                visible={displaySpinner}
                textContent={"Loading..."}
                textStyle={{ color: "#fff" }}
                overlayColor="rgba(0, 0, 0, 0.7)"
              />
            )}
            {displayAlert && simpleAlert(displayAlertMessage)}
            <Form>
              <Item style={loginStyles.textBox} floatingLabel last>
                <Label>Username</Label>
                <Input value={email} onChangeText={(text) => setEmail(text)} />
                <Icon active name="person" />
              </Item>
              <Item style={loginStyles.textBox} floatingLabel last>
                <Label>Password</Label>
                <Input
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                />
                <Icon active name="visibility" type="MaterialIcons" />
              </Item>
              <Button
                style={loginStyles.loginButton}
                onPress={() => onLoginClick(email, password)}
              >
                <Text>Login</Text>
              </Button>
            </Form>
          </View>
        </View>
        <View style={loginStyles.innerContainerTwo}></View>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  loading: {
    backgroundColor: "black",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
