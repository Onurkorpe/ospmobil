import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import LogoHeader from "../components/LogoHeader";

const ProductionEndScreen = () => {
  const navigation = useNavigation();
  const [personCount, setPersonCount] = React.useState("");
  const [error, setError] = React.useState("");

  const handlePersonCountChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setPersonCount(numericValue);
    setError("");
  };

  const handleConfirmation = () => {
    if (!personCount) {
      setError("Lütfen çalışan kişi sayısını giriniz!");
      return;
    }
    navigation.navigate("ProductionConfirmation", { personCount });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={32} color="#333" />
      </TouchableOpacity>
      <LogoHeader />
      <Text style={styles.title}>Üretim Bitiş Onayı</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Üretimde Çalışan Kişi Sayısı</Text>
        <TextInput
          style={styles.input}
          placeholder="Kişi Sayısı"
          keyboardType="numeric"
          value={personCount}
          onChangeText={handlePersonCountChange}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleConfirmation}>
          <Text style={styles.buttonText}>Onay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  form: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
    borderRadius: 4,
  },
  button: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: 10,
    zIndex: 1,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
  },
});

export default ProductionEndScreen;
