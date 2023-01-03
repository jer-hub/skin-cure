import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Image,
  TouchableOpacity,
  AppRegistry,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { URL } from '../url'

const ProfileCases = () => {
  const navigation = useNavigation()
    return (
      <View style={styles.CasesStyle}>
        <ContainerView />
        <View style={styles.footer}>
          <TouchableHighlight style={styles.bottomButtons} onPress={()=>navigation.navigate("HomeScreen")}>
            <Text style={styles.footerText}>Go back to home</Text>
          </TouchableHighlight>
          {/* <TouchableHighlight style={styles.bottomButtons}>
            <Text style={styles.footerText}>Cases</Text>
          </TouchableHighlight> */}
        </View>
      </View>
    );
  }


const ContainerView = () => {
  const [profileCases, setProfileCases] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  const displayDelete = (id) => {
    return (
      editMode && (
        <View style={{ position: "absolute", zIndex: 1, top: 0, right: 15 }}>
          <TouchableOpacity onPress={() => deleteProfileCase(id)}>
            <Image
              source={require("../assets/icons/closeIcon.png")}
              style={styles.imgCloseIcon}
            />
          </TouchableOpacity>
        </View>
      )
    );
  };

  const deleteProfileCase = async (id) => {
    const settings = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };
    try {
      let response = await fetch(
        `http://${URL}:8000/skincure/delete/profile/case/`,
        settings
      );
      let result = await response.json();
      setProfileCases(result);
    } catch (err) {
      Alert.alert(err);
    }
  };

  const displayProfileCases = async () => {
    let response = await fetch(
      `http://${URL}:8000/skincure/${route.params.userID}/cases/`
    );
    let results = await response.json();
    setProfileCases(results);
  };

  const mapProfileList = () => {
    return profileCases.map((profile, index) => {
      return (
        <TouchableOpacity
            key={index}
          onPress={() => {
            if(profile.result == "acne"){
                navigation.navigate("AcneCaseInfo", {
                  image_url: profile.image_url,
                });
            } else if (profile.result == "wartz") {
                navigation.navigate("WartzCaseInfo", {
                  image_url: profile.image_url,
                });
            } else if (profile.result == "ezcema") {
                navigation.navigate("EzcemaCaseInfo", {
                  image_url: profile.image_url,
                });
            } else if (profile.result == "basal") {
                navigation.navigate("BasalCaseInfo", {
                  image_url: profile.image_url,
                });
            }

          }}
        >
          <View style={styles.icon}>
            {displayDelete(profile.id)}

            <Image source={{ uri: profile.image_url }} style={styles.imgicon} />
            <Text>{profile.result}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  useEffect(() => {
    displayProfileCases();
  }, []);

  return (
    <>
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity
          style={styles.editMode(editMode)}
          onPress={() => {
            setEditMode(!editMode);
          }}
        >
          <Image
            source={require("../assets/icons/edit-icon.png")}
            style={styles.imgEdit}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.row}>{mapProfileList()}</View>
      </ScrollView>
    </>
  );
};

export default ProfileCases;
const styles = StyleSheet.create({
  CasesStyle: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FCF2D9",
  },
  footer: {
    position: "absolute",
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor: "#834D1E",
    flexDirection: "row",
    height: 80,
    alignItems: "center",
  },
  bottomButtons: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  footerText: {
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 18,
  },
  textStyle: {
    alignSelf: "center",
    color: "orange",
  },
  scrollViewStyle: {
    borderWidth: 0,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: 150,
    margin: 10,
  },
  row: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 1,
  },

  imgicon: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },

  imgCloseIcon: {
    width: 27,
    height: 27,
  },

  badge: {
    position: "relative",
  },

  imgEdit: {
    height: 30,
    width: 30,
  },

  editMode: (editMode) => {
    const color = editMode ? "white" : "transparent";

    return {
      marginTop: 20,
      marginRight: 20,
      borderRadius: 10,
      backgroundColor: color,
    };
  },
});

AppRegistry.registerComponent("TRYAPP", () => ProfileCases);
