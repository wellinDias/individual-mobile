import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/Pages/Home";
import { Login } from "./src/Pages/Login";
import { Routes } from "./src/Routes";
import { Profile } from "./src/Pages/Profile";

//Comentário sobre HEADER
//Professor, usei o comando para a header sumir, mas não sumiu da Home e nem do Profile

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
