import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  flex: 1;
`;

const StyledText = styled.Text`
  font-size: 20px;
  margin-bottom: 12px;
  color: #1e1e1e;
  font-weight: bold;
`;

const Name = styled.Text`
  font-weight: 700;
  color: #b2393e;
  font-size: 16px;
`;

const StyledButton = styled.TouchableOpacity`
  height: 50px;
  width: 85%;
  margin: 50px 10px 10px 10px;
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

const CategoryButton = styled.TouchableOpacity`
  width: 140px;
  height: 35px;
  background-color: #ffffff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-left: 18px;
  margin-right: 18px;
  border: 1px solid #b2393e;
`;

const SummaryButton = styled.TouchableOpacity`
  width: 140px;
  height: 35px;
  background-color: #b2393e;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-left: 18px;
  margin-right: 18px;
  border: 1px solid #b2393e;
`;

const CategoryContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Main = ({ navigation }) => {
  const [button1isPressed, setButton1IsPressed] = useState(false);
  const [button2isPressed, setButton2IsPressed] = useState(false);
  return (
    <Container>
      <CategoryContainer>
        <SummaryButton
          onPressIn={() => {
            setButton1IsPressed(true);
            setTimeout(() => setButton1IsPressed(false), 30000);
          }}
          // onPressOut={() => setButton1IsPressed(false)}
          // style={button1isPressed ? styles.buttonPressed : null}
        >
          <ButtonText>AI 요약</ButtonText>
        </SummaryButton>
        <CategoryButton
          onPressIn={() => {
            setButton2IsPressed(true);
            setTimeout(() => setButton2IsPressed(false), 30000);
          }}
          // style={button2isPressed ? styles.buttonPressed : null}
        >
          <Name>리스트 보기</Name>
        </CategoryButton>
      </CategoryContainer>
      <StyledText>학교 소식 AI가 요약해드려요!</StyledText>

      <StyledButton
        onPress={() => {
          navigation.navigate("Main");
        }}
      >
        <ButtonText>가입 완료</ButtonText>
      </StyledButton>
    </Container>
  );
};

// const styles = StyleSheet.create({
//   buttonPressed: {
//     backgroundColor: "#DEDEDE",
//   },
// });

export default Main;
