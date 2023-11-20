import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  flex: 1;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #3f3f3f;
  margin-bottom: 20px;
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

const SignUp = ({ navigation }) => {
  return (
    <Container>
      <StyledText>
        오늘의 학교 소식,{"\n"}
        <Text style={{ fontWeight: "700", color: "#b2393e" }}>쏙쏙 학보</Text>가
        요약 해드려요!
      </StyledText>
      <InputContainer>
        <Name>아이디</Name>
        <StyledInput placeholder="아이디를 입력하세요" />
      </InputContainer>

      <InputContainer>
        <Name>이름</Name>
        <StyledInput placeholder="본인의 이름을 입력하세요" />
      </InputContainer>
      <InputContainer>
        <Name>비밀번호</Name>
        <StyledInput placeholder="비밀번호를 입력하세요" />
      </InputContainer>

      <InputContainer>
        <Name>비밀번호 확인</Name>
        <StyledInput placeholder="비밀번호를 입력하세요" />
      </InputContainer>

      <StyledButton
        onPress={() => {
          navigation.navigate("Categories");
        }}
      >
        <ButtonText>다음</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default SignUp;
