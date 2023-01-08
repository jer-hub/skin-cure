import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
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
import { URL } from '../url'

const Profile = () => {
    const navigation = useNavigation()
    return (
      <View style={styles.CasesStyle}>
        <ContainerView />
        <View style={styles.footer}>
          <TouchableHighlight style={styles.bottomButtons} onPress={()=>navigation.navigate("HomeScreen")}>
            <Text style={styles.footerText}>Go back to home</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
}

const ContainerView = ({ navigation }) => {
  const [profileList, setProfileList] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const displayDelete = (id) => {
    return (
      editMode && (
        <View style={{ position: "absolute", zIndex: 1, top: 0, right: 15 }}>
          <TouchableOpacity onPress={() => deleteProfile(id)}>
            <Image
              source={require("../assets/icons/closeIcon.png")}
              style={styles.imgCloseIcon}
            />
          </TouchableOpacity>
        </View>
      )
    );
  };

  const deleteProfile = async (id) => {
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
        `http://${URL}:8000/skincure/delete/profile/`,
        settings
      );
      let result = await response.json();
      setProfileList(result);
    } catch (err) {
      Alert.alert(err);
    }
  };

  const displayProfileList = async () => {
    let response = await fetch(`http://${URL}:8000/skincure/profiles/`);
    let results = await response.json();
    setProfileList(results);
  };

  const mapProfileList = () => {
    navigation = useNavigation()
    return profileList.map((profile, index) => {
      return (
        <TouchableOpacity
        key={index}
        onPress={() => {
          if(profile.skin_disease == "Acne"){
              navigation.navigate("AcneCaseInfo", {
                image_url: profile.pic,
              });
          } else if (profile.skin_disease == "Wartz") {
              navigation.navigate("WartzCaseInfo", {
                image_url: profile.pic,
              });
          } else if (profile.skin_disease == "Eczema") {
              navigation.navigate("EzcemaCaseInfo", {
                image_url: profile.pic,
              });
          } else if (profile.skin_disease == "Basal Cell") {
              navigation.navigate("BasalCaseInfo", {
                image_url: profile.pic,
              });
          } else if (profile.skin_disease == "Normal") {
            navigation.navigate("NormalInfo", {
              image_url: profile.pic,
            });
        }
        }}
          >
          <View style={styles.icon}>
            {displayDelete(profile.id)}
            <Image
              source={{uri: `http://${URL}:8000${profile.pic}`}}
              style={styles.imgicon}
            />
            <Text>{profile.created_at}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  useEffect(() => {
    displayProfileList();
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

export default Profile;
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

AppRegistry.registerComponent("TRYAPP", () => Profile);
