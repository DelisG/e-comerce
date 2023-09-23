import { SafeAreaView } from "react-native";
import TelaInicial from "./src/screens/TelaInicial";
import Home from "./src/screens/Home";
import Loja from "./src/screens/Loja";
import CarrinhoCompras from "./src/screens/CarrinhoCompras";

export default function App() {
  return (
    <SafeAreaView>
      <CarrinhoCompras/>
      {/* <Loja/> */}
      {/* <Home /> */}
      {/* <TelaInicial /> */}
    </SafeAreaView>
  );
}
