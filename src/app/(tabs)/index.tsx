import { View, StyleSheet, Platform } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";
import ImageViewer from "@/components/image-viewer";
import Button from "@/components/button";
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    })

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri); 
    }else{
      alert("You did not select any image.")
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" onPress={pickImageAsync} theme="primary" />
        <Button label="Use this photo" onPress={() => alert("Use this photo pressed")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292e",
  },
  imageContainer: {
    flex: 1,
    paddingTop: Platform.select({web:96, default: 20}),
  },
  footerContainer:{
    flex: 1/3,
    alignItems: "center"
  }
});
