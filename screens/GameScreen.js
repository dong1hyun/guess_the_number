import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/instructionText";
import { Ionicons } from "@expo/vector-icons"
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
    const rnNum = Math.floor(Math.random() * (max - min)) + min;

    if (rnNum === exclude) return generateRandomBetween(min, max, exclude);
    else return rnNum;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [guessNumber, setGuessNumber] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    useEffect(() => {
        if (guessNumber === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [guessNumber, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && guessNumber < userNumber) ||
            (direction === 'greater' && guessNumber > userNumber)
        ) {
            Alert.alert(
                "경고", "거짓말 하면 안돼요!!",
                [{ text: "Okay", style: "cancel" }]
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
        setGuessRounds((prev) => [newRnNum, ...prev]);
    }
    const guessRoundsListLength = guessRounds.length;
    return (
        <View style={styles.screen}>
            <Title style={styles.title}>Computer's Guess</Title>
            <Card>
                <NumberContainer>{guessNumber}</NumberContainer>
                <View>
                    <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton style={styles.buttonContainer} onPress={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name="remove" size={24} color='white' />
                            </PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton style={styles.buttonContainer} onPress={nextGuessHandler.bind(this, 'greater')}>
                                <Ionicons name="add" size={24} color='white' />
                            </PrimaryButton>
                        </View>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList data={guessRounds} renderItem={(itemData) => {
                    return (
                        <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />
                    )
                }}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    instructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
});