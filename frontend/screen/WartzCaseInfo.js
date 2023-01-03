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

function WartzCaseInfo({ navigation }) {
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
          <Text style={styles.title}>Wartz</Text>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Description:</Text>
          </View>
          <View style={styles.container1}>
            <Text style={styles.text1}>
              Warts are a type of skin infection caused by the human
              papillomavirus (HPV). The infection causes rough, skin-colored
              bumps to form on the skin. The virus is contagious. You can get
              warts from touching someone who has them.
            </Text>
            <Text style={styles.text1}>
              Warts most commonly appear on the hands, but they can also affect
              the feet, face, genitals and knees.{" "}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>Treatment:</Text>
          </View>
          <View style={styles.container1}>
            <Text style={styles.text1}>
              {"\u2B24"} Your dermatologist may prescribe topical medications to
              destroy the warts. This may require several applications. Often,
              your dermatologist will recommend treatment using physical
              destruction of the lesions such as cryotherapy (freezing using
              liquid nitrogen), cautery, or even lasers
            </Text>
          </View>
          <View>
            <Text style={styles.text}>Symptoms and Prevention:</Text>
          </View>
          <View style={styles.container1}>
            <Text style={styles.titleText}> Symptoms</Text>
            <Text style={styles.text1}>
              {"\u2B24"} Rough bumps or growths that may look like a
              cauliflower; some look like flat-topped bumps that cluster around
              certain areas such as the face and neck. Rough bumps or growths
              that may look like a cauliflower; some look like flat-topped bumps
              that cluster around certain areas such as the face and neck.
            </Text>
            <Text style={styles.text1}>
              {"\u2B24"} May be colored flesh, pink, white or tan and often
              contain tiny black dots.
            </Text>
            <Text style={styles.text1}>
              {"\u2B24"}Genital warts are usually passed through sexual
              intercourse.
            </Text>
            <Text style={styles.text1}>
              {"\u2B24"}May cause pain if located around the nails or at the
              soles of the feet.
            </Text>
            <Text style={styles.titleText}> Prevention</Text>
            <Text style={styles.text1}>{"\u2B24"}Keep your skin dry.</Text>
            <Text style={styles.text1}>
              {"\u2B24"} Wear slippers all the time.
            </Text>
            <Text style={styles.text1}>
              {"\u2B24"}Avoid touching/picking or scratching your warts since
              this may spread the virus to other areas of the body.
            </Text>
            <Text style={styles.text1}>
              {"\u2B24"} In hairy areas, better to cut the hair with scissors
              than shave to avoid the warts.
            </Text>
            <Text style={styles.text1}>
              {"\u2B24"} Practice safe sex: abstinence, monogamy, condom use.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default WartzCaseInfo;
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
