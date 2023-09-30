import { SafeAreaView } from "react-native";
import TelaInicial from "./src/screens/TelaInicial";
import Home from "./src/screens/Home";
import Loja from "./src/screens/Loja";
import CarrinhoCompras from "./src/screens/CarrinhoCompras";
import Login from "./src/screens/Login";
import Produto from "./src/screens/Produto";
import Carousel from "./src/components/Carrousel";
import StackRoutes from "./src/routes/StackRoutes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
      {/* <Carousel/> */}
      {/* <Produto/> */}
      {/* <Login/> */}
      {/* <CarrinhoCompras/> */}
      {/* <Loja/> */}
      {/* <Home /> */}
      {/* <TelaInicial /> */}
    </NavigationContainer>
  );
}
