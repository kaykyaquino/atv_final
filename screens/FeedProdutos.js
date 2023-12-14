
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

const produtos = [
 {
    codigo_produto:1,
    produto: 'Raquete Wilson - Preta e laranja',
    preco: 'R$ 1520,00',
    descricao: 'Raquete profissional para tênis',
    imagem_produto:require('../assets/imagens/produtos/raquete1.png'),
 },

 {
    codigo_produto:2,
    produto: 'Raquete Wilson - Azul e amarela',
    preco: 'R$ 1520,00',
    descricao: 'Raquete profissional para tênis',
    imagem_produto:require('../assets/imagens/produtos/raquete2.png'),
 },

 {
    codigo_produto:3,
    produto: 'Raquete Babolat - Multicolor',
    preco:' R$ 930,00',
    descricao: 'Raquete profissional para tênis',
    imagem_produto:require('../assets/imagens/produtos/raquete3.png'),
  },

  {
    codigo_produto:4,
    produto: 'Raquete Babolat - Cinza e preta',
    preco: 'R$ 930,00',
    descricao: 'Raquete profissional para tênis',
    imagem_produto:require('../assets/imagens/produtos/raquete4.png'),
  },

  {
    codigo_produto:5,
    produto: 'Raquete Babolat - Azul e preta',
    preco: 'R$ 930,00',
    descricao: 'Raquete profissional para tênis',
    imagem_produto:require('../assets/imagens/produtos/raquete5.png'),
  },

  {
    codigo_produto:6,
    produto: 'Camiseta Nike - Azul e laranja',
    preco: 'R$ 150,00',
    descricao: 'Camiseta esportiva original',
    imagem_produto:require('../assets/imagens/produtos/camisa1.png'),
  },

  {
    codigo_produto:7,
    produto: 'Camiseta Andro - Azul',
    preco: 'R$ 85,00',
    descricao: 'Camiseta polo e esportiva original',
    imagem_produto:require('../assets/imagens/produtos/camisa2.png'),
  },

  {
    codigo_produto:8,
    produto: 'Camiseta Adidas - Multicolor ',
    preco: 'R$ 125,00',
    descricao: 'Camiseta esportiva estilizada original',
    imagem_produto:require('../assets/imagens/produtos/camisa3.png'),
  },

  {
    codigo_produto:9,
    produto: 'R$ Bolsa Wilson',
    preco: 'R$ 230,00',
    descricao: 'Bolsa esportiva para equipamentos',
    imagem_produto:require('../assets/imagens/produtos/bolsa2.png'),
  },

  {
    codigo_produto:10,
    produto: 'Bolsa Yans Sports',
    preco: 'R$ 100,00',
    descricao: 'Bolsa esportiva para equipamentos',
    imagem_produto:require('../assets/imagens/produtos/bolsa3.png'),
  },
];


const ItemProduto = ({item}) => { return (
  <View style={styles.produto_container}>


  <Image 
    style={styles.produto_img}
    source={item.imagem_produto}
  />

<View styles={styles.produto_text_container}>
  <Text style={styles.produto_name}>{item.produto}</Text>
  <Text style={styles.produto_descricao}>{item.descricao}</Text>
  <Text style={styles.produto_name}>{item.preco}</Text>

  <TouchableOpacity style={styles.produto_button_details}>
    <Text style={styles.produto_button_text}>DETALHES</Text>
  </TouchableOpacity>
</View>

</View>
  )
}

export default function Produtos() {
  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={produtos}
        renderItem={ItemProduto}
        keyExtractor={produtos => produtos.codigo_produto}
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
  produto_container:{
      flex:1,
      flexDirection:'row',
      padding:10,
      borderWidth:2,
      borderRadius:10,
      borderColor:'black',
      marginBottom:10,
      backgroundColor:'white'
  },
  produto_img:{
      width:120,
      height:150,
      marginRight:10,
      marginBottom:10
  },
  produto_text_container:{
      width:200,
      justifyContent:'center'
  },
  produto_name:{
      fontSize:16,
      fontWeight:'900',
      width:'100%',
      textAlign:'left'
  },
  produto_descricao:{
      fontSize:14,
      fontWeight:'600',
      width:'100%',
      textAlign:'left',
      color:'orange',
      marginBottom:10
  }, 
  produto_button_details:{
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 10,
      borderRadius:5,
      marginTop:90,
      width:'50%'
  },
  produto_button_text:{
      color:'#FFF',
      fontSize:16,
      fontWeight:'bold'
  },
});
