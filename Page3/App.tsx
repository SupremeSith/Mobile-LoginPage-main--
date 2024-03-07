import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Input from './components/input';
import BackgroundColor from './components/Backgrounds';
import Bottom1 from './components/bottom';
import Tittle from './components/tittle';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackgroundColor name="Cadastre-se" color="#FF0000" />
      <View style={styles.container2}>  
        <Input name="Nome:" text='Insira seu nome: '/>
        <Input name="Sobrenome:" text='Inisra seu sobrenome: '/>
        <Input name="E-mail:" text='Inisra seu email'/>
        <Input name="Telefone:" text='Inisra seu telefone:'/>
        <Input name="Senha:" text='Inisra sua senha:'/>
        <Input name="Confirmar senha:" text='Inisra sua senha:'/>
        <Bottom1 name="Cadastre-se" color="black"/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,

  },
  logo: {
    width: 200,
    height: 51,
    marginTop: 60,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    marginTop: 30,
  },
  container2: {
    flex: 1,
    backgroundColor: '#F6FFFD',
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 20,
    paddingTop:39,
    marginTop: 20,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    display: 'flex',
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, 

    
  },
  link: {
    color: '#4305C7',

  
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 44,
  },
  icon: {
    marginHorizontal: 10,
  },

});