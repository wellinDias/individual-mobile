import { Button, StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  title: {
    fontSize: 35,
    textAlign: "center",
    color: "#2F1155",
  },

  styleInput: {
    borderWidth: 1,
    borderColor: "#000",
    width: "90%",
    height: 50,
    paddingLeft: 20,
    borderRadius: 10,
    fontSize: 20,
  },
});
