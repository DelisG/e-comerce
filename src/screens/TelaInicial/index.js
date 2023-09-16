import { SafeAreaView, Image, StyleSheet, Text } from "react-native";
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
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  image: {
    marginTop: 100,
    width: 300,
    height: 360
  },
  titulo: {
    margin: 25,
    marginBotton:15,
    fontSize:35
  },
   subtitulo: {
    margin: 25,
    marginTop: 0,
    fontSize:16
  }
})
export default TelaInicial;
