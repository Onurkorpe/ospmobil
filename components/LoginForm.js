import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Kullanıcı Adı" />
      <TextInput style={styles.input} placeholder="Parola" secureTextEntry />
      <Button title="Giriş" onPress={handleLogin} color="#333" />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: "80%",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 4,
  },
});

export default LoginForm;
