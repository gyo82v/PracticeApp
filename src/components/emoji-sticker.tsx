import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import Animated from 'react-native-reanimated';

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <Animated.View style={[styles.sticker, {width: imageSize, height: imageSize}]}>
      <Image source={stickerSource} style={styles.image}/>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  sticker: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  image: {
    width: "100%",
    height: "100%"
  }
})
