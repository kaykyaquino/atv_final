import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import drawerMenu from "./drawerMenu/DrawerMenu";

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="DrawerMenu">
    
      <Stack.Screen
        name="Home" // refere  inicial a tela para acessar ela
        component={Home} // é a tela em si
        options={{title:"HOME"}} // opções para colocar na tela
        />

      <Stack.Screen
        name="DrawerMenu"
        component={drawerMenu}
        options={{title:'', headerShown:false}}
        />

    </Stack.Navigator>
    </NavigationContainer>
  )

}