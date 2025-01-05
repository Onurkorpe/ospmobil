import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import LogoHeader from "../components/LogoHeader";

const ProductionConfirmationScreen = () => {
  const navigation = useNavigation();
  const [productionKg, setProductionKg] = React.useState("");
  const [productionCount, setProductionCount] = React.useState("");
  const [productionNumber, setProductionNumber] = React.useState("");
  const [castingNumber, setCastingNumber] = React.useState("");
  const [warehouse, setWarehouse] = React.useState("");
  const [stockLocation, setStockLocation] = React.useState("");

  const handleConfirm = () => {
    navigation.navigate("ProductionConsume");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <LogoHeader />
        </View>
      </View>

      <Text style={styles.title}>Üretim Bitiş Onayı</Text>

      <View style={styles.inputContainer}>
        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Üretim Miktarı (KG)</Text>
            <TextInput
              style={styles.input}
              value={productionKg}
              onChangeText={setProductionKg}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Üretim Miktarı (Adet)</Text>
            <TextInput
              style={styles.input}
              value={productionCount}
              onChangeText={setProductionCount}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Üretim Numarası</Text>
            <TextInput
              style={styles.input}
              value={productionNumber}
              onChangeText={setProductionNumber}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Döküm Numarası</Text>
            <TextInput
              style={styles.input}
              value={castingNumber}
              onChangeText={setCastingNumber}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Depo</Text>
            <TextInput
              style={styles.input}
              value={warehouse}
              onChangeText={setWarehouse}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Stok Yeri</Text>
            <TextInput
              style={styles.input}
              value={stockLocation}
              onChangeText={setStockLocation}
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.errorButton}>
          <Text style={styles.buttonText}>Kalite Hata Bildirimi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.noteButton}>
          <Text style={styles.buttonText}>Üretim Notu Ekle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Onayla</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  logoContainer: {
    marginTop: -80,
  },
  inputContainer: {
    flex: 1,
    gap: 20,
  },
  row: {
    flexDirection: "row",
    gap: 15,
  },
  inputGroup: {
    flex: 1,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: "auto",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  errorButton: {
    backgroundColor: "#FFA07A",
    padding: 15,
    borderRadius: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
  },
  noteButton: {
    backgroundColor: "#87CEEB",
    padding: 15,
    borderRadius: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
  },
  confirmButton: {
    backgroundColor: "#90EE90",
    padding: 15,
    borderRadius: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: -20,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: "#000",
  },
  logo: {
    width: 100,
    height: 40,
  },
});

export default ProductionConfirmationScreen;
