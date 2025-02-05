import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        gap: 12,
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 0.25,
        backgroundColor: Colors.primary800
    },
})