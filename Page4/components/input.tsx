import { View, Text, TextInput, StyleSheet } from 'react-native';




function Input ({text, name}) {
    return (
        <View>
            <Text >{name}</Text>
            
            <TextInput placeholder={text} style={styles.input} />
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        marginTop: 39,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 27,
        height: 40,

        
    },


});
export default Input;