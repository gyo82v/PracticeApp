import {StyleSheet, Pressable, Text, View} from "react-native";
import { SymbolView } from 'expo-symbols';

type Props = {
    label: string,
    theme?: "primary"
    onPress?: () => void
}

export default function Button({label, theme, onPress}: Props) {
    if(theme === "primary") return(
        <View style={styles.buttonContainer}>
            <Pressable onPress={onPress} style={[styles.button, styles.primaryButton]}>
                <SymbolView
                  name={{ ios: 'photo', android: 'image', web: 'image' }}
                  size={18}
                  tintColor="#25292e" 
                />
                <Text style={[styles.buttonLabel, {color: "#25292e"}]}>{label}</Text>
            </Pressable>
        </View>
    )
    return(
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonLabel: {
        color : "#fff",
        fontSize: 16
    },
    button: {
        height: 48,
        paddingHorizontal: 20,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 8
    },
    primaryButton:{
        backgroundColor: "#ffd33d"
    }
})

