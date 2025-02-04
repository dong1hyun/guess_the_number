import { StyleSheet, Text } from "react-native";

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-snas-bold',
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%'
    }
});