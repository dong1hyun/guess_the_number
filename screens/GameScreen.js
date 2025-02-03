import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
    console.log("이니셜")
    const rnNum = Math.floor(Math.random() * (max - min)) + min;

    if (rnNum === exclude) return generateRandomBetween(min, max, exclude);
    else return rnNum;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [guessNumber, setGuessNumber] = useState(initialGuess);

    useEffect(() => {
        if(guessNumber === userNumber) {
            console.log("오버")
            onGameOver();
        }
    }, [guessNumber, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && guessNumber < userNumber) ||
            (direction === 'greater' && guessNumber > userNumber)
        ) {
            Alert.alert(
                "경고", "거짓말 하면 안돼요!!", 
                [{text: "Okay", style: "cancel"}]
            );
            return;
        }
        if (direction === 'lower') {
            maxBoundary = guessNumber;
        }
        else {
            minBoundary = guessNumber + 1;
        }
        const newRnNum = generateRandomBetween(minBoundary, maxBoundary, guessNumber);
        setGuessNumber(newRnNum);
    }
    return (
        <View style={styles.screen}>
            <Title style={styles.title}>Computer's Guess</Title>
            <NumberContainer>{guessNumber}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
            </View>
            <View>

            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    }
});