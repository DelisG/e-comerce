import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Loja from "../screens/Loja";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Ionicon from "react-native-vector-icons/Ionicons";

const BottonTab = createBottomTabNavigator();

const BottontabRoutes = () => {
  return (
    <BottonTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconNAme = "home";

          if (route.name === "Loja") {
            iconNAme = "handbag";

            return (
              <SimpleLineIcon name={"handbag"} size={size} color={color} />
            );
          } else if (route.name === "Notificacoes") {
            return (
              <Ionicon
                name={"notifications-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Perfil") {
            return <SimpleLineIcon name={"user"} size={size} color={color} />;
          }

          return <Ionicon name={"home"} size={size} color={color} />;
        },
        tabBarInactiveTintColor: "#000",
        tabBarActiveTintColor: "#FF7A00",
      })}
    >
      <BottonTab.Screen name="Home" component={Home} />
      <BottonTab.Screen name="Loja" component={Loja} />
      <BottonTab.Screen name="Produto" component={Produto} />
      <BottonTab.Screen name="Notificacoes" component={Home} />
      <BottonTab.Screen name="Perfil" component={Home} />
      <BottonTab.Screen name="CarrinhoCompras" component={CarrinhoCompras} />
    </BottonTab.Navigator>
  );
};

export default BottontabRoutes;
