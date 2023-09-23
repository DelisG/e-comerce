import { SafeAreaView } from "react-native";
import TelaInicial from "./src/screens/TelaInicial";
import Home from "./src/screens/Home";
import Loja from "./src/screens/Loja";
import CarrinhoCompras from "./src/screens/CarrinhoCompras";
import Login from "./src/screens/Login";

export default function App() {
  return (
    <SafeAreaView>
      <Login/>
      {/* <CarrinhoCompras/> */}
      {/* <Loja/> */}
      {/* <Home /> */}
      {/* <TelaInicial /> */}
    </SafeAreaView>
  );
}
