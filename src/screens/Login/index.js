import { useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Checkbox from "expo-checkbox";

function Login() {
    const [showPassword, setShowPassword] = useState(false);


  return (
    <View>
      <View style={styles.box}></View>

      <Text>Bem-vindo!</Text>

      <Text>Não possui conta? </Text>
      <Text style={styles.orange}> Sing Up </Text>

      <TextInput
        placeholder="E-mail"
        keyboardType="text"
        onChange={() => {}}
        defaultValue=""
        style={styles.inputwhite}
      />

      <View style={styles.inputwhite}>
        <TextInput
          KayboardType="text"
          placeholder="Senha"
          onTouchCancel={() => {}}
          secureTextEntry={!showPassword}
        />
        <Pressable>
          <Ionicons name={showPassword?"eye-off":"eye"} style={styles.orange} onPress={() => setShowPassword {(!showPassword)}} />
        </Pressable>
      </View>

      <Pressable style={styles.button} onPress={() => {}}>
        <Text style={styles.textButton}>Login</Text>
      </Pressable>

      <View style={styles.row}>
        <View style={styles.row}>
            <Checkbox style={styles.checkbox} value={true} onValueChange={()=>{}} color={true?"#ffA700":""}
          <Ionicons name="checksquare" style={styles.orange} />
          <Text>Mantenha-me Conectado</Text>
        </View>
        <Text style={styles.orange}>Esqueci a senha</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.linha}></View>
        <Text style={styles.orange}>OR</Text>
        <View style={styles.linha}></View>
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
  bg: {
    backgroundColor: "green",
  },
  button: {
    backgroundColor: "#FFA700",
    padding: 10,
    borderRadius: 10,
    height: 50,
    marginVertical: 10,
    
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginVertical: 10,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CACACA",
    padding: 10,
    backgroundColor: "#fff",
  },
  inputwhite: {
    padding: 10,
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
    marginEnd: 20,
  },

  orange: {
    color: "#FFA959",
  },
  row: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linha: {
    borderBottomWidth: 1,
    borderBottomColor: "#CACACA",
    width: 25,
  },
});
