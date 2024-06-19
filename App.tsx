import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/Pages/Home";
import { Login } from "./src/Pages/Login";
import { Routes } from "./src/Routes";
import { Profile } from "./src/Pages/Profile";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
