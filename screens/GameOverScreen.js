import { Dimensions, Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    const {width} = useWindowDimensions();
    return (
        <View style={styles.container}>
            <Title>GAME OVER!</Title>
            <View style={width > 450 ? styles.imageHorizontal : styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/images/success.png")} />
            </View>
            <Text style={styles.summaryText}>
                숫자 <Text style={styles.highlight}>{userNumber}</Text>를 찾는데 <Text style={styles.highlight}>{roundsNumber}</Text>라운드가 소요됐습니다.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>새 게임</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderRadius: 150,
        width:300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    imageHorizontal: {
        borderRadius: 150,
        width:150,
        height: 150,
        borderWidth: 3,
        marginTop: 16,
        borderColor: Colors.primary800,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
});