import React, { useState, useRef } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function Recuperar_senha({ navigation }) {
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const senhaRef = useRef(null);

  const handleReset = () => {
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "Senhas não são iguais");
      senhaRef.current.focus();
      return;
    }
    Alert.alert("Sucesso", "Senha redefinida com sucesso");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redefinir Senha</Text>

      <TextInput
        ref={senhaRef}
        style={styles.input}
        placeholder="Nova Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <Button title="Salvar" onPress={handleReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 22, marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
