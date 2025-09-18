import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      <Button title="Ir para Cadastro" onPress={() => navigation.navigate("Registro")} />
      <Button title="Redefinir Senha" onPress={() => navigation.navigate("Recuperar_senha")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 20 },
});
