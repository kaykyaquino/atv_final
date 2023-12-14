
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from 'react-native';

const categoria = [
 {
    codigo_categoria:1,
    categoria: 'RAQUETES',
    descricao: 'Raquete profissional para tênis',
    imagem_categoria:require('../assets/imagens/produtos/raquete1.png'),
 },

 {
    codigo_categoria:2,
    categoria: 'MOCHILAS',
    descricao: 'Mochilas para tênis',
    imagem_categoria:require('../assets/imagens/produtos/bolsa2.png'),
 },

 {
    codigo_categoria:3,
    categoria: 'CAMISAS',
    descricao: 'Camisas para tênis',
    imagem_categoria:require('../assets/imagens/produtos/camisa3.png'),
  },
];

const ItemCategoria = ({item}) => { return (
  <View style={styles.categoria_container}>


  <Image 
    style={styles.categoria_img}
    source={item.imagem_categoria}
  />

<View styles={styles.categoria_text_container}>
  <Text style={styles.categoria_name}>{item.categoria}</Text>
  <Text style={styles.categoria_descricao}>{item.descricao}</Text>
</View>



  </View>
  )
}

export default function Categorias() {
  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={categoria}
        renderItem={ItemCategoria}
        keyExtractor={categoria => categoria.codigo_categoria}
    />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
  categoria_container:{
      flex:1,
      flexDirection:'row',
      padding:10,
      borderWidth:2,
      borderRadius:10,
      borderColor:'black',
      marginBottom:10,
      backgroundColor:'white'
  },
  categoria_img:{
      width:120,
      height:150,
      marginRight:10,
      marginBottom:10
  },
  categoria_text_container:{
      width:200,
      justifyContent:'center'
  },
  categoria_name:{
      fontSize:16,
      fontWeight:'900',
      width:'100%',
      textAlign:'left'
  },
  categoria_descricao:{
      fontSize:14,
      fontWeight:'600',
      width:'100%',
      textAlign:'left',
      color:'orange',
      marginBottom:10
  }, 
  
  categoria_button_text:{
      color:'#FFF',
      fontSize:16,
      fontWeight:'bold'
  },
});

