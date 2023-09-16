import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import usuario from "../../assets/images/usuario_icone.png";

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.userName}>Bem vindo!</Text>
          <Text>Delis Guerra</Text>
        </View>
        <Image source={usuario} style={styles.userIcon} />
      </View>

      <View style={styles.card}>
        <View>
          <Text style={styles.title}>Troque e economize!</Text>
          <Text style={styles.text}>
            Desfrute de uma ótima economia na sua compra.
          </Text>
          <Pressable onPress={() => {}} style={styles.button}>
            <Text style={styles.textButton}> Saiva mais</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userIcon: {
    width: 50,
    height: 50,
  },
  userName: {
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 18,
  },
  card: {
    marginVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    shadowColor: "#000",
    shadowOffset:{
        width:0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {},
  text: {},
  button: {},
  textButton: {},
});

export default Home;
