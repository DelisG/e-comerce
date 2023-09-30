import { SafeAreaView } from "react-native";
import TelaInicial from "./src/screens/TelaInicial";
import Home from "./src/screens/Home";
import Loja from "./src/screens/Loja";
import CarrinhoCompras from "./src/screens/CarrinhoCompras";
import Login from "./src/screens/Login";
import Produto from "./src/screens/Produto";
import Carousel from "./src/components/Carrousel";

export default function App() {
  return (
    <SafeAreaView>
      <Carousel/>
      {/* <Produto/> */}
      {/* <Login/> */}
      {/* <CarrinhoCompras/> */}
      {/* <Loja/> */}
      {/* <Home /> */}
      {/* <TelaInicial /> */}
    </SafeAreaView>
  );
}
