import { Image, Pressable, StyleSheet, Text } from "react-native";

function CardCategorias({ image, label }) {
  return (
    <Pressable style={styles.card} onPress={() => {}}>
      <Image source={image} style={styles.image} />
      <Text>{label}</Text>
    </Pressable>
  );
}
export default CardCategorias;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#FFA959",
    padding: 15,
    marginEnd: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 15,
  },
});
