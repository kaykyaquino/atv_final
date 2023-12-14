
import {SafeAreaView, Image, StyleSheet, Text,View } from 'react-native';


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
  
      {/*IMAGEM DE LOGIN*/}
      <View style={styles.topo}> 
        <Image
        style={styles.login}
        source={require('../assets/imagens/home1.png')}
        />
      </View>
      
      {/*TITULO DE LOGIN*/}
      {<Text style={styles.texto}>BEM-VINDO!!</Text>}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16
  },
  topo: {
    alignItems: 'center'
  },
  login: {
    width: 300,
    height: 300
  },
  texto: {
    fontSize:50,
    fontWeight:'500',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20
  },
  containerTextInput: {
    flexDirection: 'row',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
    alignItems: 'center'
  },
  textInput: {
    padding: 10
  },
  btmLogin: {
    backgroundColor: '#3480EB',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30
  },
  txtLogin: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#FFF'
  },
  logarCom: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  containerLoginCom:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30
  },
  btmLoginCom:{
    borderBlockColor: '#DDD',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginRight: 10,
  },
  botaoRegistro:{
    color: '3480EB',
    fontWeight: '700'
  },

  header_container:{
    flex:1,
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
},
});