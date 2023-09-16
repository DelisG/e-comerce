import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import SectionHeader from "../../components/SectionHeader";
import usuario from "../../assets/images/usuario_icone.png";
import celular from "../../assets/images/celular_1.png";
import oferta1 from "../../assets/images/oferta_1.png";
import oferta2 from "../../assets/images/oferta_2.png";
import cosmeticos from "../../assets/images/cosmeticos.png";

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.userName}>Bem vinda!</Text>
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
            <Text style={styles.textButton}> Saiba mais</Text>
          </Pressable>
        </View>
        <Image source={celular} style={styles.imageCelular} />
      </View>

      <SectionHeader title={"Ofertas Incriveis"}/>

      <View style={styles.ofertas}>
        <Pressable onPress={() => {}}>
          <Image source={oferta1} style={styles.imageOfertas} />
        </Pressable>

        <Pressable onPress={() => {}}>
          <Image source={oferta2} style={styles.imageOfertas} />
        </Pressable>
      </View>

      <View style={styles.cta}>
        <View>
          <Text style={styles.titleCta}>Ofertas R$ 100 OFF</Text>
          <Text style={styles.textCta}>
            Gaste no mínimo R$ 100 para obter entrega gratuita e voucher
            promocional para sua próxima compra.{" "}
          </Text>
          <Pressable onPress={() => {}} style={styles.botaoCta}>
            <Text style={styles.textButtonCta}> Comprar</Text>
          </Pressable>
        </View>
        <Image source={cosmeticos} style={styles.imageCta} />
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
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    marginTop: 10,
    maxWidth: 175,
  },
  button: {
    backgroundColor: "#FFA959",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#FFA959",
    width: 120,
    marginTop: 15,
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  imageCelular: {
    marginTop: 5,
    width: 120,
    height: 120,
  },  
  ofertas: {
    flexDirection: "row",
    marginVertical: 15,
  },
  imageOfertas: {
    width: 220,
    height: 220,
    marginStart: -10,
    borderRadius: 20,
  },
  cta: {
    backgroundColor: "#FFA959",
    marginVertical: 20,
    borderRadius: 10,
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  titleCta: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  textButtonCta: {
      textAlign: "center",
      fontWeight: "bold",
  },
  textCta: {
    marginTop: 10,
    fontSize: 12,
    maxWidth: 215,
  },
  botaoCta: {
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    width: 100,
    padding: 10,
  },
  imageCta: {
    marginTop: 15,
    width: 140,
    height: 140,
  },
});

export default Home;
