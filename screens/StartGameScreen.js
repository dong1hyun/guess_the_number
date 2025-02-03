import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";

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
            <View style={styles.inputContainer}>
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
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100
    },
    inputContainer: {
        alignItems: 'center',
        gap: 12,
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 0.25,
        backgroundColor: Colors.primary800
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