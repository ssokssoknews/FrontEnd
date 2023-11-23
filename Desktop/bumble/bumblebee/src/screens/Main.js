import React from "react";
import styled from "styled-components/native";
import { View, Text, TextInput, StyleSheet, image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// const Height = Dimensions.get("window").height;
const Container = styled.SafeAreaView`
  flex: 1;
`;
const StyledInput = styled.TextInput`
  margin-top: 10% !important;

  width: 90%;
  height: 43px;
  margin: 3px;
  padding: 20px;
  background-color: #ffffff;
  border: #d9d9d9;
  border-radius: 8px;
`;

function Main({ navigation }) {
  return (
    <Container>
      <GooglePlacesAutocomplete
        minLength={2}
        placeholder="장소를 검색해보세요!"
        query={{
          key: "AIzaSyAM55rqSfcujPDfoH-QXUDh0zQF8_wB01M",
          language: "ko",
          components: "country:kr",
        }}
        keyboardShouldPersistTaps={"handled"}
        fetchDetails={true}
        onPress={(data, details) => {
          console.log(data, details);
        }}
        onFail={(error) => console.log(error)}
        onNotFound={() => console.log("no results")}
        keepResultsAfterBlur={true}
        enablePoweredByContainer={false}
        styles={styles.search}
      />
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.281882019,
          longitude: 127.01439446,
          latitudeDelta: 0.0062,
          longitudeDelta: 0.0041,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.281882019,
            longitude: 127.014999,
          }}
          pinColor="#2D63E2"
          // title="하이"
          description="위험물체"
          image={require("../../assets/danger.png")}
        />
        <Marker
          coordinate={{
            latitude: 37.283892019,
            longitude: 127.01439446,
          }}
          pinColor="#red"
          // title="위험물체"
          description="위험물체"
          image={require("../../assets/danger.png")}
        />
        <Marker
          coordinate={{
            latitude: 37.280382019,
            longitude: 127.013189,
          }}
          pinColor="#2D63E2"
          // title="하이"
          description="편의시설"
          image={require("../../assets/safe.png")}
        />
        <Marker
          coordinate={{
            latitude: 37.279302019,
            longitude: 127.013889,
          }}
          pinColor="#2D63E2"
          // title="하이"
          description="편의시설"
          image={require("../../assets/safe.png")}
        />
        <Marker
          coordinate={{
            latitude: 37.284590019,
            longitude: 127.013789,
          }}
          pinColor="#2D63E2"
          // title="하이"
          description="편의시설"
          image={require("../../assets/safe.png")}
        />
        <Marker
          coordinate={{
            latitude: 37.284380019,
            longitude: 127.015689,
          }}
          pinColor="#2D63E2"
          // title="하이"
          description="편의시설"
          image={require("../../assets/safe.png")}
        />
        <Marker
          coordinate={{
            latitude: 37.284590019,
            longitude: 127.012789,
          }}
          pinColor="#2D63E2"
          // title="하이"
          description="편의시설"
          image={require("../../assets/safe.png")}
        />

        <Marker
          coordinate={{
            latitude: 37.280580019,
            longitude: 127.015789,
          }}
          pinColor="#2D63E2"
          // title="하이"
          description="편의시설"
          image={require("../../assets/safe.png")}
        />
        <Marker
          coordinate={{
            latitude: 37.279102019,
            longitude: 127.015889,
          }}
          pinColor="#2D63E2"
          // title="하이"
          description="위험물체"
          image={require("../../assets/danger.png")}
        />
        {/* <StyledInput
          type="text"
          placeholder="관광지"
          // onChangeText={handleEmailInput}
        ></StyledInput> */}
      </MapView>
      <Text>hihi</Text>
    </Container>
  );
}
const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Main;
