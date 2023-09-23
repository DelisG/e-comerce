import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import AntDesigner from "react-native-vector-icons/AntDesign";
import EviIcon from "react-native-vector-icons/EvilIcons";

function CardItem({ image, name, description, price, numItens }) {
  return (
    <View style={styles.card}>
        <View>
          <Image style={styles.image} source={image} />
        </View>

        <View>
          <View style={styles.row}>
            <View>
              <Text style={styles.name}>{name}</Text>
            </View>
            <View>
              <Pressable style={styles.name} onPress={() => {}}>
                <EviIcon name="trash" size={"20"} color={"#000"} />
              </Pressable>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.description}>{description}</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <Text style={styles.price}>{price}</Text>
            </View>

            <View style={styles.row}>
              <Pressable style={styles.button} onPress={() => {}}>
                <AntDesigner name="minus" size={"20"} color={"#000"} />
              </Pressable>

              <Text style={styles.numItens}>{numItens}</Text>

              <Pressable style={styles.button} onPress={() => {}}>
                <AntDesigner name="plus" size={"20"} color={"#000"} />
              </Pressable>
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
  image: {
    width: 150,
    height: 150,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
  },
  icon: {
    marginStart: 10,
  },
  description: {},
  price: {
    fontSize: 8,
    fontWeight: "bold",
  },
  button: {
    borderWidth: 1,
    borderColor: "CACACA",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#FFF",
  },
  numItens: {
    paddingHorizontal: 5,
    fontWeight: "bold",
  },
});
