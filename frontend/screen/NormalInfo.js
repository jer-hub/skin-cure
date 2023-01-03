import { useRoute } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import {URL} from '../url'

function NormalInfo( ) {

  const route = useRoute();

  return (
    <View>
      <ScrollView>
        <View style={styles.icon}>
          <Image
            style={styles.imgicon}
            source={{ uri: `http://${URL}:8000${route.params.image_url}` }}
          />
          <Text style={styles.title}>This is a normal skin or may not be a skin</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default NormalInfo;
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#834D1E",
  },
});
