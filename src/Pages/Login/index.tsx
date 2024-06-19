import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { estilo } from "./style";

import { TextInputComponent } from "../../Components/TextInput";
import { ButtonComponents } from "../../Components/ButtonComponents";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navegando = useNavigation();

  const handleEmail = (value: string) => {
    setEmail(value);
    console.log("Valor do email: " + value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
    console.log("Valor da senha: " + value);
  };

  const handleLogin = () => {
    if (email) {
      navegando.navigate("StackTabsPages", { name: "Login" });
    } else {
      Alert.alert("Email ou senha inválidos!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={estilo.container}>
        <Text style={estilo.title}>Welcome back to Mabank Wallet</Text>
        <Text>Your digital wallet</Text>
        <TextInputComponent
          recebendoFuncao={handleEmail}
          recebendoValue={email}
          recebendoPlaceHolder="Username"
        />
        <TextInputComponent
          recebendoFuncao={handlePassword}
          recebendoValue={password}
          recebendoPlaceHolder="Password"
          recebendoTipoDoInput={true}
        />

        <ButtonComponents title="Login" recebendoFuncao={handleLogin} />
        <TouchableOpacity>
          <Text>Don't have an account yet? Register</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
