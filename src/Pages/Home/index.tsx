import React from "react";
import { Text, View, Image } from "react-native";
import { estilo } from "./style";

export function Home() {
  return (
    <View style={estilo.container}>
      <Image
        source={require("../../Assets/icons8-carteira-de-cartão-64.png")}
      />
      <Text style={estilo.title}>Olá, Wellington!</Text>
      <Text>Saldo: R$ 900,00</Text>
    </View>
  );
}
