import { useRoute } from "@react-navigation/native";
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

function BasalCaseInfo({ navigation }) {
  const [data, setData] = useState([]);

  const route = useRoute();

  return (
    <View>
      <ScrollView>
        <View style={styles.icon}>
          <Image
            style={styles.imgicon}
            source={{ uri: `http://${URL}:8000${route.params.image_url}` }}
          />
          <Text style={styles.title}>Basal Cell</Text>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Description:</Text>
          </View>
          <View style={styles.container1}>
            <Text style={styles.text1}>
              Basal cell carcinoma is a type of skin cancer. Basal cell
              carcinoma begins in the basal cells — a type of cell within the
              skin that produces new skin cells as old ones die off.{" "}
            </Text>
            <Text style={styles.text1}>
              Most basal cell carcinomas are thought to be caused by long-term
              exposure to ultraviolet (UV) radiation from sunlight{" "}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>Treatment:</Text>
          </View>
          <View style={styles.container1}>
            <Text style={styles.text}>
              {"\u2B24"} Requires use of one or more drugs (applied to the skin,
              taken by mouth, or both) to control and prevent recurrence.
            </Text>
            <Text style={styles.text}>
              {"\u2B24"} Discontinue the offending drug, if drug-related.
            </Text>
            <Text style={styles.text}>
              {"\u2B24"} Requires long periods of treatment because acne does
              not go away immediately (it may take one to four months before
              improvement may be noticed).
            </Text>
            <Text style={styles.text}>
              {"\u2B24"} Certain procedures such as lasers and light therapy,
              chemical peels, extraction and injection.
            </Text>
          </View>
          <View>
            <Text style={styles.text}>Symptoms and Prevention:</Text>
          </View>
          <View style={styles.container1}>
            <Text style={styles.titleText}> Symptoms</Text>
            <Text style={styles.text1}>
        {'\u2B24'} A shiny, skin-colored bump that's translucent, meaning you can see a bit through the surface. 
        The bump can look pearly white or pink on white skin. On brown and Black skin, the bump often looks brown or glossy black. 
        Tiny blood vessels might be visible, though they may be difficult to see on brown and Black skin. The bump may bleed and scab over.
        </Text>
        <Text style={styles.text1}>
        {'\u2B24'} A brown, black or blue lesion or a lesion with dark spots with a slightly raised, translucent border.
        </Text>
        <Text style={styles.text1}>
        {'\u2B24'}A flat, scaly patch with a raised edge. Over time, these patches can grow quite large.
        </Text>
        <Text style={styles.text1}>
        {'\u2B24'} A white, waxy, scar-like lesion without a clearly defined border.
        </Text>
        <View>
        <Text style={styles.titleText}> Prevention</Text>
            <Text style={styles.text1}>
        {'\u2B24'}No exact preventive measure as the disorder commonly occurs in teens.

        </Text>
        <Text style={styles.text1}>
        {'\u2B24'} See a dermatologist for early treatment to prevent complications such as scarring.
        </Text>
        </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default BasalCaseInfo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    marginBottom: 10,
  },

  icon: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    width: 250,
    margin: 50,
  },
  imgicon: {
    resizeMode: "contain",
    alignSelf: "center",
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  container1: {
    backgroundColor: "#B1907F",
    margin: 10,
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#834D1E",
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
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 200,
    resizeMode: "contain",
  },

  imgicon: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },

  text1: {
    fontSize: 15,
    textAlign: "left",
    color: "white",
    margin: 5,
  },

  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    margin: 10,
  },
});
