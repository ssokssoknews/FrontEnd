import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  flex: 1;
`;

const RedStyledText = styled.Text`
  font-size: 20px;
  color: #3f3f3f;
  margin-bottom: 12px;
  color: #b2393e;
  font-weight: bold;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #3f3f3f;
  margin-bottom: 70px;
`;

const Name = styled.Text`
  font-weight: 700;
  color: #b2393e;
  font-size: 25px;
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
  width: 120px;
  height: 70px;
  background-color: #ffffff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-left: 18px;
  margin-right: 18px;
`;

const CategoryContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Categories = ({ navigation }) => {
  const [button1isPressed, setButton1IsPressed] = useState(false);
  const [button2isPressed, setButton2IsPressed] = useState(false);
  const [button3isPressed, setButton3IsPressed] = useState(false);
  const [button4isPressed, setButton4IsPressed] = useState(false);
  const [button5isPressed, setButton5IsPressed] = useState(false);
  const [button6isPressed, setButton6IsPressed] = useState(false);
  const [button7isPressed, setButton7IsPressed] = useState(false);
  const [button8isPressed, setButton8IsPressed] = useState(false);
  return (
    <Container>
      <RedStyledText>어떤 소식에 관심이 많은지 궁금해요!</RedStyledText>
      <StyledText>
        나는
        <Text style={{ color: "#b2393e" }}> _____ </Text>에 관심이 많아요.
      </StyledText>
      <CategoryContainer>
        <CategoryButton
          onPressIn={() => {
            setButton1IsPressed(true);
            setTimeout(() => setButton1IsPressed(false), 30000);
          }}
          // onPressOut={() => setButton1IsPressed(false)}
          style={button1isPressed ? styles.buttonPressed : null}
        >
          <Name>시사</Name>
        </CategoryButton>
        <CategoryButton
          onPressIn={() => {
            setButton2IsPressed(true);
            setTimeout(() => setButton2IsPressed(false), 30000);
          }}
          style={button2isPressed ? styles.buttonPressed : null}
        >
          <Name>사람</Name>
        </CategoryButton>
      </CategoryContainer>
      <CategoryContainer>
        <CategoryButton
          onPressIn={() => {
            setButton3IsPressed(true);
            setTimeout(() => setButton3IsPressed(false), 30000);
          }}
          style={button3isPressed ? styles.buttonPressed : null}
        >
          <Name>비평</Name>
        </CategoryButton>
        <CategoryButton
          onPressIn={() => {
            setButton4IsPressed(true);
            setTimeout(() => setButton4IsPressed(false), 30000);
          }}
          style={button4isPressed ? styles.buttonPressed : null}
        >
          <Name>대학</Name>
        </CategoryButton>
      </CategoryContainer>
      <CategoryContainer>
        <CategoryButton
          onPressIn={() => {
            setButton5IsPressed(true);
            setTimeout(() => setButton5IsPressed(false), 30000);
          }}
          style={button5isPressed ? styles.buttonPressed : null}
        >
          <Name>사회</Name>
        </CategoryButton>
        <CategoryButton
          onPressIn={() => {
            setButton6IsPressed(true);
            setTimeout(() => setButton6IsPressed(false), 30000);
          }}
          style={button6isPressed ? styles.buttonPressed : null}
        >
          <Name>문학</Name>
        </CategoryButton>
      </CategoryContainer>
      <CategoryContainer>
        <CategoryButton
          onPressIn={() => {
            setButton7IsPressed(true);
            setTimeout(() => setButton7IsPressed(false), 30000);
          }}
          style={button7isPressed ? styles.buttonPressed : null}
        >
          <Name>사진</Name>
        </CategoryButton>
        <CategoryButton
          onPressIn={() => {
            setButton8IsPressed(true);
            setTimeout(() => setButton8IsPressed(false), 30000);
          }}
          style={button8isPressed ? styles.buttonPressed : null}
        >
          <Name>교양</Name>
        </CategoryButton>
      </CategoryContainer>
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

const styles = StyleSheet.create({
  buttonPressed: {
    backgroundColor: "#DEDEDE",
  },
});

export default Categories;
