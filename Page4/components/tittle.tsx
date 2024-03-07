import { View, Text, StyleSheet } from "react-native";

function Tittle({name}){
    return(
        <View>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginBottom: 55,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})

export default Tittle;