import { Platform, StyleSheet, Text } from "react-native";

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
        // borderWidth: Platform.OS === 'android' ? 2 : 4,
        // borderWidth: Platform.select({android: 2, ios: 4}),
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        width: 300,
    }
});