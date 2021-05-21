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

import DashboardLogic from "./DashboardLogic";

const Dashboard = () => {
  const { navigateToScreen } = DashboardLogic();
  return (
    <Container>
      <Header>
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
