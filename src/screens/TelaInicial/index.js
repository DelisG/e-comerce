import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";
import image from "../../assets/images/tela_principal.png";

function TelaInicial() {
  return (
    <SafeAreaView>
      <Image source={image} style={styles.image} />
      <Text style={styles.titulo}>Todas as suas compras em um só App!</Text>
      <Text style={styles.subtitulo}>
        Venda seus produtos de maneira mais inteligente e rápida para obter
        dinheiro imediato e consciencia mais limpa.
      </Text>
      <View style={styles.buttobGroup}>
        <Pressable onPress={() => {}} style={styles.botao}>
          <Text style={styles.textBotao}>Login</Text>
        </Pressable>
        <Pressable onPress={() => {}} style={styles.botaoOutline}>
          <Text style={styles.textBotaoOutline}>Sing up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  image: {
    marginTop: 100,
    width: 300,
    height: 360,
  },
  titulo: {
    margin: 25,
    marginBotton: 15,
    fontSize: 35,
  },
  subtitulo: {
    margin: 25,
    marginTop: 0,
    fontSize: 16,
  },
  botao: {
    backgroundColor: "#FF7A00",
    margin: 25,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#FF7A00",
    width: 120,
  },
  textBotao: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  botaoOutline: {
    backgroundColor: "#fff",
    margin: 25,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#FF7A00",
    width: 120,
  },
  textBotaoOutline: {
    textAlign: "center",
    color: "#FF7A00",
    fontWeight: "bold",
  },
  buttobGroup: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-between",
  },
});
export default TelaInicial;
