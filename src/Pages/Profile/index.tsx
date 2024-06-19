import React from "react";
import { Text, View, Image } from "react-native";
import { estilo } from "./style";
import { ButtonComponents } from "../../Components/ButtonComponents";
import { useNavigation } from "@react-navigation/native";

export function Profile() {
  const navegando = useNavigation();

  const handleLogout = () => {
    navegando.navigate("StackLogin", { name: "Login" });
  };

  return (
    <View style={estilo.container}>
      <Image source={require("../../Assets/icons8-usuário.png")} />
      <Text style={estilo.title}>Perfil de Wellington.</Text>

      <ButtonComponents title="Logout" recebendoFuncao={handleLogout} />
    </View>
  );
}
