import React, { useState } from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Height = Dimensions.get("window").height;
const Container = styled.SafeAreaView`
  background-color: #f1f2f6;
  align-items: center;
  justify-content: center;
  height: ${Height}px;
`;

const LogoContainer = styled.SafeAreaView`
  margin-bottom: 5px;
`;

const StyledText = styled.Text`
  margin: 10px 5px 5px 5px;
  width: 78%;
  font-size: 12px;
  color: #4e5256;
`;

const CenterText = styled.Text`
  margin: 15px 5px 20px 9px;
  width: 45px;
  font-size: 15px;
  color: #325d92;
`;

const StyledInput = styled.TextInput`
  width: 80%;
  height: 43px;
  margin: 3px;
  padding: 15px;
  background-color: #ffffff;
  border: #d9d9d9;
  border-radius: 8px;
`;

const StyledButton = styled.TouchableOpacity`
  margin-top: 30px;
  width: 80%;
  height: 45px;
  border-radius: 10px;
  background-color: #285fb4;
  border: 1px solid #285fb4;
`;

const ButtonText = styled.Text`
  color: white;
  align-self: center;
  justify-content: center;
  margin-top: 15px;
  font-weight: 800;
  font-size: 18px;
`;

const StyledIcon = styled.Image`
  width: 210px;
  height: 210px;
  object-fit: contain;
`;

const Easyloginbtn = styled.Image`
  width: 85%;
  margin-top: 10px;
  object-fit: contain;
`;

const Kakaobtn = styled.Image`
  width: 450px;
  margin-bottom: 20px;
  height: 63px;
  object-fit: contain;
`;

const Landing = ({ navigation }) => {
  const [emailInput, setEmailInput] = useState("");
  const [pwInput, setPwInput] = useState("");

  const handleEmailInput = (e) => {
    setEmailInput(e);
  };

  const handlePwInput = (e) => {
    setPwInput(e);
  };

  return (
    <KeyboardAwareScrollView>
      <Container>
        <LogoContainer>
          <StyledIcon source={require("../../assets/logo.png")} />
        </LogoContainer>
        <StyledText>ID</StyledText>
        <StyledInput
          type="text"
          placeholder="아이디"
          onChangeText={handleEmailInput}
        ></StyledInput>
        <StyledText>Password</StyledText>
        <StyledInput
          secureTextEntry={true}
          type="password"
          placeholder="비밀번호"
          onChangeText={handlePwInput}
        />

        <StyledButton onPress={() => navigation.navigate("Main")}>
          <ButtonText>로그인</ButtonText>
        </StyledButton>
        <CenterText>회원가입</CenterText>

        <Easyloginbtn source={require("../../assets/easy-login.png")} />
        <Kakaobtn source={require("../../assets/kakao-btn.png")} />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Landing;
