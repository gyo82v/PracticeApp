import { View, StyleSheet, Platform } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import ImageViewer from "@/components/image-viewer";
import Button from "@/components/button";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" onPress={() => alert("Choose a photo pressed")} theme="primary" />
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
