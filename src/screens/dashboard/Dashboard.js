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
import { Image } from "react-native";

import DashboardLogic from "./DashboardLogic";

const Dashboard = () => {
  const { navigateToScreen } = DashboardLogic();
  return (
    <Container>
      <Header
        style={{
          elevation: 0,
        }}
      >
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
      <Content>
        <View>
          <Text>Dashboard</Text>
        </View>
      </Content>
    </Container>
  );
};

export default Dashboard;
