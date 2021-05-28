import React from "react";
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image, StatusBar } from "react-native";

const Verify = () => {
  return (
    <Container>
      <Header
        style={{
          elevation: 0,
        }}
      >
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
          <Button transparent>
            <Icon type="MaterialIcons" name="more-vert" />
          </Button>
        </Right>
      </Header>
      <Content padder>
        <View style={{ height: hp("20%") }}>
          <Text>
            This page is to verify transaction and also clear any pending
            remittance...coming up soon.
          </Text>
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

export default Verify;
