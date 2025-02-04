import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/instructionText";

function StartGameScreen({ onPickNumber }) {
    const [text, setText] = useState("");

    function numberInputHandler(input) {
        setText(input);
    }

    function resetInputHandler() {
        setText("");
    }

    function confirmInputHandler() {
        const number = parseInt(text);
        if (isNaN(number) || number <= 0 || number > 99) {
            Alert.alert(
                "ㅠㅠ",
                "유효하지 않은 숫자입니다.",
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        onPickNumber(number);
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>숫자를 입력하세요.</InstructionText>
                <TextInput
                    onChangeText={numberInputHandler}
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    value={text}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 24,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
});