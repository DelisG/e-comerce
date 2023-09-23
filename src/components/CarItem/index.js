import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import AntDesigner from "react-native-vector-icons/AntDesign";

import modelo1 from "../../assets/images/modelo_1.png";

function CardItem() {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View>
          <Image style={styles.imagem} source={modelo1} />
        </View>

        <View>
          <View style={styles.row}>
            <View>
              <Text>Camisa de Algodão Regular Fit</Text>
              <Text>Camisa de Algodão Regular Fit</Text>
            </View>
            <View>
              <Pressable onPress={() => {}}>
                <AntDesigner name="checksquare" />
              </Pressable>
            </View>
          </View>

          <View>
            <Text> Tamnho: M</Text>
          </View>

          <View style={styles.row}>
            <View>
              <Text>RS 100</Text>
            </View>
            <View>
              <Text>contador</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default CardItem;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  imagem: {
    width: 150,
    height: 150,
  },
  row: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 50,
    height: 50,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    color: "red",
  },
});
