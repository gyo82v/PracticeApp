import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { GestureDetector, useTapGesture } from 'react-native-gesture-handler';

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize);

  const doubleTap = useTapGesture({
    numberOfTaps: 2,
    onActivate: () => {
      scaleImage.set(scaleImage.get() === imageSize ? imageSize * 2 : imageSize);
    }
  })

  const stickerStyle = useAnimatedStyle(() => {
    return{
      width: withSpring(scaleImage.get()),
      height: withSpring(scaleImage.get())
    }
  })


  return (
    <GestureDetector gesture={doubleTap}>
        <Animated.View style={[styles.sticker, stickerStyle]}>
            <Image source={stickerSource} style={styles.image}/>
        </Animated.View>
    </GestureDetector >
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
