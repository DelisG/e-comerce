import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
// import  from "../../components/cardCategorias";
import Ionicon from "react-native-vector-icons/Ionicons";
import imagem1 from "../../assets/images/cartao_compras_icon_1.png";
import imagem2 from "../../assets/images/cartao_compras_icon_2.png";
import imagem3 from "../../assets/images/cartao_compras_icon_3.png";
import imagem4 from "../../assets/images/cartao_compras_icon_4.png";
import modelo1 from "../../assets/images/modelo_1.png";

import CardRecomendacoes from "../../components/CardRecomendacoes";
import SectionHeader from "../../components/SectionHeader";
import CardCategorias from "../../components/CardCategorias";
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();

function Loja() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.seachbar}>
          <TextInput
            KayboardType="text"
            placeholder="Faça já sua busca aqui"
            onTouchCancel={() => {}}
            style={styles.input}
          />
          <Pressable>
            <Ionicon name="search" />
          </Pressable>
        </View>

        <Pressable onPress={() => navigation.navigate("carrinhoCompras")}></Pressable>
        <Ionicon name="cart-outline" size={30} color={"#000"} />
      </View>

      <SectionHeader title={"itens recomendados"} />

      <View style={styles.row}>
        <CardCategorias image={imagem1} label={"Popular"} />
        <CardCategorias image={imagem2} label={"Homem"} />
        <CardCategorias image={imagem3} label={"Mulher"} />
        <CardCategorias image={imagem4} label={"Crianças"} />
      </View>

      <View style={styles.row}>
        <Text style={styles.titulo}>Comprar por categoria</Text>
        <Pressable onPress={() => {}}>
          <Text style={styles.link}>Ver tudo</Text>
        </Pressable>
      </View>

      <CardRecomendacoes image={modelo1} name={""} price={""} />
      <CardRecomendacoes image={modelo1} name={""} price={""} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 25,
    backgroundColor: "pink",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center,",
  },

  input: {},
  seachbar: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 250,
    marginVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginEnd: 20,
  },

  row: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Loja;
