import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";

function CardRecomendacoes({image, name, price}) {
  return (
    <Pressable style={styles.card} onPress={() => {}}>
      <Image source={image} style={styles.image} />
      <View style={styles.label}>
        <Text>{name}</Text>
        <View style={styles.row}>
          <Text style={styles.price}>R$ {price}</Text>
          <Pressable style={styles.button} onPress={() => {}}>
            <SimpleLineIcon name="handbag" size={15} color={"#000"}/>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}
export default CardRecomendacoes;

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
    backgroundColor: "#fff",
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
  image:{
    width: 150,
    height: 150,
  },
  label:{
    padding: 15,
  },
  row:{
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  button:{
    backgroundColor: "#D9D9D9",
    padding: 5,
    borderRadius: 15,
  },
  price:{
    marginTop: 5,
    fontSize:18,
    fontWeight: "bold,"
  }
});
