import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, Dimensions, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const Height = Dimensions.get("window").height;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  height: ${Height}px;
`;

const StyledLogo = styled.Image`
  align-self: center;
  width: 130px;
  height: 130px;
  object-fit: contain;
`;

const StyledLogoName = styled.Image`
  align-self: center;
  width: 160px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 50px;
`;

const Name = styled.Text`
  font-weight: 700;
  font-size: 17px;
  width: 100%;
  margin: 4px;
`;

const StyledInput = styled.TextInput`
  height: 50px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #dedede;
  margin: 2px;
  padding: 18px;
`;

const InputContainer = styled.View`
  width: 92%;
  margin: 10px;
`;

const StyledButton = styled.TouchableOpacity`
  height: 50px;
  width: 92%;
  margin: 10px;
  border-radius: 10px;
  background-color: #b2393e;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-weight: bold;
  color: #ffffff;
  font-size: 16px;
`;

const Login = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView>
      <Container>
        <StyledLogo source={require("../../assets/icon.png")}></StyledLogo>
        <StyledLogoName
          source={require("../../assets/images/logo-name.png")}
        ></StyledLogoName>

        <InputContainer>
          <Name>아이디</Name>
          <StyledInput placeholder="아이디를 입력하세요" />
        </InputContainer>

        <InputContainer>
          <Name>비밀번호</Name>
          <StyledInput placeholder="비밀번호를 입력하세요" />
        </InputContainer>
        <Text
          style={{
            color: "#858585",
            fontWeight: "700",
            marginTop: 6,
            marginBottom: 40,
            fontSize: 16,
          }}
        >
          비밀번호를 잊으셨나요?
        </Text>

        <StyledButton
          onPress={() => {
            navigation.navigate("Categories");
          }}
        >
          <ButtonText>로그인</ButtonText>
        </StyledButton>
        <StyledButton
          style={{ backgroundColor: "#ffffff" }}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <ButtonText style={{ color: "#B2393E" }}>회원가입</ButtonText>
        </StyledButton>
      </Container>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  buttonPressed: {
    backgroundColor: "#d8bfa6",
  },
});

export default Login;
