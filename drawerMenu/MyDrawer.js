
import { createDrawerNavigator } from '@react-navigation/drawer';

import FeedProdutos from '../screens/FeedProdutos';
import TelaDrawer2 from '../screens/TelaDrawer2';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();


export default function MyDrawer(){
    return (
        <Drawer.Navigator initialRouteName="Home">
            
            <Drawer.Screen
            name='Home'
            component={Home}
            options={
                {
                    title:'Bem-vindos',
                    headerTitleStyle:{color:'trasparent'}
            }
            }
            />

        <Drawer.Screen
            name='Produtos'
            component={FeedProdutos}
            options={
                {
                    title:'Produtos',
                    headerTitleStyle:{color:'trasparent'}
            }
            }
            />

        <Drawer.Screen
            name='TelaDrawer2'
            component={TelaDrawer2}
            options={
                {  
                    title:'Categorias',
                    headerTitleStyle:{color:'trasparent'}
            }
            }
            />  

        </Drawer.Navigator>

        
    );
}
