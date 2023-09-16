import { SafeAreaView } from "react-native";
import TelaInicial from "./src/screens/TelaInicial";
import Home from "./src/screens/Home";
import Loja from "./src/screens/Loja";

export default function App() {
  return (
    <SafeAreaView>
      <Loja/>
      {/* <Home /> */}
      {/* <TelaInicial /> */}
    </SafeAreaView>
  );
}
