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
import React from "react";

const Remittance = () => {
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
          <Title>Collection</Title>
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
            This page enable agents to do cash collection on the
            platform....coming up soon.
          </Text>
        </View>
        <View style={{ height: hp("60%") }}>
          <Image
            source={require(`../../../assets/img/illustration-4.png`)}
            resizeMode="contain"
            style={{ height: "100%", width: "100%" }}
          />
        </View>
      </Content>
    </Container>
  );
};

export default Remittance;
