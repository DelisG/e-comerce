import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesigner from "react-native-vector-icons/AntDesign";
import modelo1 from "../../assets/images/modelo_1.png";
import CardItem from "../../components/CarItem";
import { TextInput } from "react-native-web";

function CarrinhoCompras() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable onPress={() => {}}>
          <AntDesigner name="arrowleft" size={20} color={"#000"} />
        </Pressable>

        <Text style={styles.titulo}> Minhas Compras</Text>

        <Pressable onPress={() => {}}>
          <Text style={styles.link}>Limpar</Text>
        </Pressable>
      </View>

      <CardItem
        image={modelo1}
        name={"Camisa Regular Fit"}
        description={"Tamanho M"}
        price={"120,00"}
        numItens={"2"}
      />

      <CardItem
        image={modelo1}
        name={"Camisa Regular Fit"}
        description={"Tamanho M"}
        price={"120,00"}
        numItens={"2"}
      />

      <CardItem
        image={modelo1}
        name={"Camisa Regular Fit"}
        description={"Tamanho M"}
        price={"120,00"}
        numItens={"2"}
      />

      <View style={styles.row}>
        <TextInput
          placeholder="Código Promocional"
          keyboardType="text"
          onChange={() => {}}
          defaultValue=""
        />
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.textButton}>Aplicar</Text>
        </Pressable>
      </View>

      <View style={styles.resumo}>
        <View style={[styles.row, styles.rowResume]}>
          <Text style={styles.textLeft}>SubTotal</Text>
          <Text style={styles.textRight}>R$ 2.600</Text>
        </View>

        <View style={[styles.row, styles.rowResume]}>
          <Text style={styles.textLeft}>Volcher</Text>
          <Text style={styles.textRight}>-R$ 100</Text>
        </View>

        <View style={[styles.row, styles.rowResume]}>
          <Text style={styles.textLeft}>Entrega</Text>
          <Text style={styles.textRight}>R$ 20</Text>
        </View>
      </View>

      <View style={[styles.row, styles.rowResume]}>
        <Text style={styles.textRightTotal}>Total</Text>
        <Text style={styles.textRightTotal}>R$ 2.520</Text>
      </View>

      <View>
        <Pressable style={[styles.button, {marginTop: 18}]} onPress={() => {}}>
          <Text style={styles.textButton}>Finalizar Compra</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default CarrinhoCompras;

const styles = StyleSheet.create({
  container: {
    margin: 25,
    backgroundColor: "#fff",
  },
  row: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    color: "red",
  },
  input: {
    borderRadius: 5,
    borderColor: "#CACACA",
    borderWidth: 1,
    padding: 15,
    flex: 1,
    marginStart: 5,
  },
  button: {
    backgroundColor: "#FFA700",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFA700",
    alignSelf: "stretch",
    padding: 15,
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  resumo:{
    borderBottomWidth: 1,
    borderBottomColor: "#CACACA",
  },
  textLeft: {
    color: "#768397",
  },
  textRight: {
    color: "#000",
  },
  buttonf: {
    backgroundColor: "#FFA700",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFA700",
    marginVertical: 20,
  },
  textButtonf: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  textRightTotal: {
    color: "#000",
    fontWeight: "bold",
  },
  rowResume:{
    marginVertical: 5,
  }
});
