import { View, Text, Image, StyleSheet } from "react-native";

function BackgroundColor ({name, color}){ 
    const styles = StyleSheet.create({
        container: {
            backgroundColor: color,
            width: '100%',
            alignItems: 'center',
            


        },
    });
    
    return (
        <View style={styles.container}>
            <Image style={styles1.image} source={require('../assets/Logo.png')} />
            <Text style={styles1.text}>{name}</Text>


            
        </View>
        
    );
}

const styles1= StyleSheet.create({
        image: {
            width: 200,
            height: 51,
            marginTop: 60,
            margin: 0,
            

      },
      text: {
        color: '#FFFFFF',
        fontSize: 20,
        marginTop: 26,
        marginBottom: 16,

        textAlign: 'center',
      },
      
});

export default BackgroundColor; 