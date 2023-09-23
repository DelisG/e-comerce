import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import AntDesigner from "react-native-vector-icons/AntDesign";
import modelo1 from "../../assets/images/modelo_1.png";
import CardItem from "../../components/CarItem";

function CarrinhoCompras() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable onPress={() => {}}>
          <AntDesigner name="arrowleft" size={20} color={"#fff"} />
        </Pressable>
        <Text style={styles.titulo}> Minhas Compras</Text>
        <Pressable onPress={() => {}}>
          <Text style={styles.link}>Limpar</Text>
        </Pressable>
      </View>
      <CardItem />
    </View>
  );
}
export default CarrinhoCompras;

const styles = StyleSheet.create({
  container: {
    margin: 25,
    backgroundColor: "",
  },
  row: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
