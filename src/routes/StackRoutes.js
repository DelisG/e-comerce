import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicial from "../screens/TelaInicial";
import Login from "../screens/Login";
import Home from "../screens/Home";
import BottontabRoutes from "./BottomTabRoutes";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tela Inicial"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Tela Inicial" component={TelaInicial} />

      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Botton Tab Routes" component={BottontabRoutes} />

      <Stack.Screen name="Produto" component={Produto} />

      <Stack.Screen name="Carrinho Compras" component={CarrinhoCompras} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
