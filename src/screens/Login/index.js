import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import { Checkbox } from "expo-checkbox";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <View style={styles.box}></View>
      <View style={styles.container}>
        <Text style={[styles.title, styles.text]}>Bem - Vindo(a)!</Text>

        <View style={styles.row}>
          <Text style={styles.text}>Não possui conta?</Text>
          <Text style={[styles.text, styles.link]}> Sing Up</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="email"
          onChange={() => {}}
        />
        <View style={[styles.row, styles.password]}>
          <TextInput
            secureTextEntry={!showPassword}
            placeholder="Senha"
            onChange={() => {}}
          />

          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color={"#FF7A00"}
            />
          </Pressable>
        </View>

        <Pressable style={styles.button} onchange={() => {}}>
          <Text style={styles.textButton}>Login</Text>
        </Pressable>

        <Checkbox
          style={styles.checkbox}
          value={true}
          onValueChange={() => {}}
          color={true ? "#FFA700" : ""}
        />
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#FF7A00",
    height: 200,
    width: Dimensions.get("screen").width,
  },
  container: {
    margin: 25,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  link: {
    color: "#FFA700",
  },
  input: {
    marginVertical: 10,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CACACA",
    borderEndColor: "#FFF",
    borderEndWidth: 0,
    padding: 10,
    backgroundColor: "#FFF",
  },
  password: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    height: 50,
    padding: 10,
    backgroundColor: "#FFF",
    borderColor: "#CACACA",
  },
  button: {
    backgroundColor: "#FFA700",
    borderRadius: 10,
    height: 50,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  textButton: {
    color: "#FFF",
    fontWeight: "bold",
    fontsize: 16,
    textAlign: "center",
    paddingTop: 2,
  },
});
