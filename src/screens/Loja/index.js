import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { View } from "react-native-web";
import Ionicon from "react-native-vector-icons/Ionicons";

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
        <Pressable onPress={() => {}}></Pressable>
        <Ionicon name="cart-outline" size={30} color={"#000"} />
      </View>
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
  },
  input: {},
  seachbar: {
    padding:10,
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
  },
});

export default Loja;
