import { View, ImageBackground, TouchableOpacity, Text } from "react-native";

const CameraPreview = ({photo, retakePicture, savePhoto, uri}) => {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%'
      }}
    >
      <ImageBackground
      resizeMode="contain"
        source={{uri: photo && uri}}
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            padding: 15,
            justifyContent: 'flex-end'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <TouchableOpacity
              onPress={retakePicture}
              style={{
                width: 100,
                alignItems: "center",
                margin:10,
                fontSize: 10,
                padding: 10,
                backgroundColor: "black"
              }}
            >
              <Text
                style={{
                  color: '#fff',
                }}
              >
                BACK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={savePhoto}
              style={{
                width: 100,
                alignItems: "center",
                margin:10,
                fontSize: 10,
                padding: 10,
                backgroundColor: "black"
              }}
            >
              <Text
                style={{
                  color: '#fff',
                }}
              >
                PROCEED
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default CameraPreview;
