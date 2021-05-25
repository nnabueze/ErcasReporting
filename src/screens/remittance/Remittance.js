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

const Remittance = () => {
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
          <Text>Remittance</Text>
        </View>
      </Content>
    </Container>
  );
};

export default Remittance;
