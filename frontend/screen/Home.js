import React, { useEffect } from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {URL} from '../url'

function Home({ navigation }) {

  useEffect(() => {
    const fetchApiCall = () => {
      fetch(`http://${URL}:8000/skincure/guest/`, {
        method: "GET",
      })
    }
    fetchApiCall();
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={styles.container2}>
          <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")}>
            <Image
              style={styles.option}
              source={require("../assets/icons/add_case.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>
              {" "}
              Simply click the icon to add new cases.
            </Text>
          </View>
          <View style={styles.container1}>
            <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
              <Image
                style={styles.image}
                source={require("../assets/icons/profile.png")}
              ></Image>
            </TouchableOpacity>
            <Text style={styles.text1}>PROFILES</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}



export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    marginBottom: 10,
  },
  container2: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#B1907F",
    textAlign: "center",
    borderBottomRightRadius: 175,
    borderBottomLeftRadius: 175,
    marginBottom: 10,
  },
  container1: {
    backgroundColor: "#B1907F",
    margin: 10,
    padding: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: "medium",
    textAlign: "center",
    color: "#834D1E",
  },
  option: {
    flex: 1,
    width: 250,
    height: 231,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 200,
    resizeMode: "contain",
  },

  text1: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#834D1E",
    margin: 10,
  },
});
