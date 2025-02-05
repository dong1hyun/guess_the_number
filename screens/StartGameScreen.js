import { Alert, Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/instructionText";

function StartGameScreen({ onPickNumber }) {
    const [text, setText] = useState("");
    const { width, height } = useWindowDimensions();

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

    const marginTop = height < 400 ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, { marginTop }]}>
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
            </KeyboardAvoidingView>
        </ScrollView>

    )
}

export default StartGameScreen;

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        marginTop: deviceHeight < 400 ? 30 : 100,
        alignItems: 'center',
        gap: 24
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