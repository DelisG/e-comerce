import { Pressable, StyleSheet, Text, View } from "react-native";
import thumbnail1 from "../../assets/images/modelo_1.png";
import thumbnail2 from "../../assets/images/modelo_2.png";
import thumbnail3 from "../../assets/images/modelo_3.png";
import thumbnail4 from "../../assets/images/modelo_4.png";

import AntDesign from "react-native-vector-icons/AntDesign";
import Carousel from "../../components/Carrousel";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function Produto(route) {

  const images = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];
  const sizes = [p, m, g];

  const [sizeOption, setSizeOption] = useState();
  const [numItens, setNumItens] = useState();

  const navigation = useNavigation();

  const incrementerNumItens = () => {
    if (numItens > 0) {
      setNumItens(numItens + 1);
    }
  };

  const decrementerNumItens = () => {
    if (numItens > 0) {
      setNumItens(numItens - 1);
    }
  };

  return (
    <ScrollView>
      <Carousel />

      <Pressable style={styles.arrow} onPress={() => navigation.goBack}>
        <AntDesign name="arrowleft" size={20} color={"#FDCC0D"}></AntDesign>
      </Pressable>

      <View style={styles.row}>
        {images.map((image, indice) => {
          return (
            <Pressable
              onPress={() => navigation.navigate("carrinhoCompras")}>
              <AntDesign name="shoppingCart" size={20}></AntDesign>
            </Pressable>
          );
        })}
      </View>

      <View>
        <Pressable onPress={() => {}}>
          <AntDesign name="star" size={20} color={"#FDCC0D"}></AntDesign>
          <Text style={styles.rate}>4.9</Text>
          <Text style={styles.reviews}>(85) Review</Text>
        </Pressable>
      </View>

      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.text}>Selecionar Tamanho:</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.linha}></View>
        <Text style={styles.orange}>OR</Text>
        <View style={styles.linha}></View>
      </View>

      <View style={{ flexDirection: "row" }}>
        {sizes.map((size, indice) => {
          return (
            <Pressable
              onPress={() => setSizeOption(indice)}
              style={[
                indice === sizeOption
                  ? styles.sizeButton
                  : styles.sizeButtonSelected,
              ]}
              key={indice}
            >
              <Text style={styles.sizeText}>{size}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.row}>
        <View style={(styles.row, styles.buttonGroup)}>
          <Pressable onPress={decrementerNumItens} style={styles.button}>
            <AntDesign name="minus" size={15}></AntDesign>
          </Pressable>

          <Text style={styles.numItens}>{numItens}</Text>

          <Pressable onPress={incrementerNumItens} style={styles.button}>
            <AntDesign name="plus" size={15}></AntDesign>
          </Pressable>
        </View>

        <Pressable onPress={() => {}} style={styles.buttonCarrinho}>
          <Text style={styles.textCarrinho}>Adicionar ao carrinho</Text>
        </Pressable>

        <Pressable onPress={() => {}} style={styles.button}>
          <AntDesign name="plus" size={15}></AntDesign>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default Produto;

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rate: {
    fontSize: 18,
    fontWeight: "bold",
    marginStart: 5,
  },
  reviews: {
    color: "#cacaca",
    marginStart: 5,
  },
  name: {
    fontSize: 16,
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 15,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: "#cacaca",
    borderRadius: 5,
    padding: 20,
    marginEnd: 10,
  },
  sizeButtonSelected: {
    backgroundColor: "#FFA959",
    borderColor: "#FFA959",
  },
  sizeText: {
    fontSize: 16,
  },
  button: {
    borderWidth: 1,
    borderColor: "#cacaca",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
    marginEnd: 10,
    marginHorizontal: 10,
  },
  numItens: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonGroup: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 10,
    borderRadius: 5,
    margintop: 30,
    alignItems: "center",
  },
  buttonCarrinho: {
    backgroundColor: "#FF7A00",
    padding: 10,
    justifyContent: "center",
    borderRadius: 5,
    margintop: 30,
  },
  textCarrinho: {
    color: "#fff",
    fontWeight: "bold",
  },
  arrow: {
    position: "absolute",
    marginHorizontal: 25,
    marginVertical: 50,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
  },
  rowButton:{
    position: "absolute",
    flex: 1,
  }
});
