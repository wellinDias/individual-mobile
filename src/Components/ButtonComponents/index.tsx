import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { estilo } from "./style";

type PropsButton = {
  title: string;
  recebendoFuncao: () => void;
};

export function ButtonComponents({ recebendoFuncao, title }: PropsButton) {
  return (
    <>
      <TouchableOpacity style={estilo.button} onPress={recebendoFuncao}>
        <Text style={estilo.textButton}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}
