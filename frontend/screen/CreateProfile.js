import { useRoute } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { StyleSheet, TextInput, View, Text, Button, Alert } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import { URL } from "../url";

function CreateProfile({ navigation }) {
  const route = useRoute();

  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [sex, setSex] = useState(null);
  const [errors, setErrors] = useState({
    nameError: null,
    ageError: null,
    sexError: null,
  });

  var radio_props = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const handleCreateProfile = async () => {
    let nameError = null;
    let ageError = null;
    let sexError = null;
    if (name === null) {
      nameError = "Please write a name.";
    }
    if (age === null) {
      ageError = "Please write your age.";
    }
    if (isNaN(age)) {
      ageError = "Age must be a number.";
    }
    if (sex === null) {
      sexError = "Please select a sex.";
    }
    setErrors({
      nameError: nameError,
      ageError: ageError,
      sexError: sexError,
    });
    console.log(errors);
    if (nameError == null && ageError == null && sexError == null) {
      console.log("entered")

      const formData = new FormData();
      formData.append("image", {
        uri: route.params.image_url,
        name: "image.jpg",
        type: "image/jpeg",
      });
      formData.append("name", name)
      formData.append("age", age)
      formData.append("sex", sex)
      formData.append("result", route.params.result)
      formData.append("acc", route.params.accuracy)

      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData
      };

      try {
        let response = await fetch(
          `http://${URL}:8000/skincure/profiles/`,
          settings
        );
        let result = await response.json();
        navigation.navigate("HomeScreen")
      } catch (err) {
        Alert.alert(err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.radioButtonLabel}>Create a Profile</Text>
      <View style={{ width: "100%" }}>
        <TextInput
          style={styles.baseTextInput}
          value={name}
          onChangeText={(name) => {
            setName(name);
          }}
          placeholder="Name"
        />
        {errors.nameError && (
          <Text style={{ color: "red" }}>{errors.nameError}</Text>
        )}
        <TextInput
          style={styles.baseTextInput}
          value={age}
          onChangeText={(age) => {
            setAge(age);
          }}
          placeholder="Age"
        />
        {errors.ageError && (
          <Text style={{ color: "red" }}>{errors.ageError}</Text>
        )}
        <Text style={styles.radioButtonLabel}>Select Sex:</Text>
        <View style={{ padding: 10 }}>
          <RadioForm
            buttonColor={"#834D1E"}
            selectedButtonColor={"#834D1E"}
            radio_props={radio_props}
            initial={""}
            onPress={(value) => setSex(value)}
          />
        </View>
        {errors.sexError && (
          <Text style={{ color: "red" }}>{errors.sexError}</Text>
        )}
        <View style={{ padding: 20 }}>
          <Button title="Submit" onPress={handleCreateProfile} />
        </View>
      </View>
    </View>
  );
}

export default CreateProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  textInputRow: {
    flexDirection: "row",
  },

  radioButtonLabel: {
    fontSize: 20,
    margin: 10,
  },

  baseTextInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
