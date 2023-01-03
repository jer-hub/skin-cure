import React from "react";
import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";

function ResultScreen({ navigation }) {
  const route = useRoute();
  const result = route.params.result;
  const photo = route.params.photo;
  const image_url = route.params.image_url;
  const accuracy = route.params.accuracy * 100;
  return (
    <View style={styles.container}>
      <Image source={{ uri: photo && image_url }} style={styles.img}/>
      <View style={styles.boxContainer}>
        <Text style={styles.baseText}>
          SkinCure detected that this is {accuracy}% {result}
        </Text>
        <View style={{ alignItems: "center", marginTop: 25}}>
          <Text>Would you want to save or go back to home?</Text>
        </View>
        <View>
          <View style={styles.btn_container}>
            <Pressable
              style={styles.btn}
              onPress={() =>
                navigation.navigate("CreateProfile", {
                  result: result,
                  photo: photo,
                  image_url: image_url,
                  accuracy: accuracy,
                })
              }
            >
              <Text style={{ color: "white" }}>SAVE</Text>
            </Pressable>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Text style={{ color: "white" }}>HOME</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ResultScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    width: 300, 
    height: 300, 
    borderRadius: 50, 
    margin: 20
  },

  boxContainer: {
    backgroundColor: "#FDFD96",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#4C4C4C",
    padding: 20,
  },
  btn_container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    borderRadius: 10,
    backgroundColor: "#834D1E",
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  baseText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4C4C4C",
  },
});
