import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { useNavigation } from "@react-navigation/native"; // Yeni import
import LogoHeader from "../components/LogoHeader"; // Yeni import

const HomeScreen = () => {
  const navigation = useNavigation(); // Navigation hook'unu ekle
  const tableHead = [
    "İş Emri Numarası",
    "Müşteri Adı",
    "Malzeme No",
    "Malzeme Açıklaması",
    "Operasyon Adı",
    "Miktar 1 (KG)",
    "Miktar 2 (Adet)",
    "Parti Numarası",
  ];
  const tableData = [
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    // Daha fazla boş satır ekleyebilirsiniz
  ];

  return (
    <ScrollView style={styles.container}>
      <LogoHeader />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Üretim Operasyon Ekranı</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.input} placeholder="İş Emri Tipi" />
          <TextInput style={styles.input} placeholder="İş Emri No" />
          <TextInput style={styles.input} placeholder="Müşteri No" />
          <TextInput style={styles.input} placeholder="Malzeme No" />
          <TextInput style={styles.input} placeholder="Parti No" />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Ara</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.table}>
          <Table borderStyle={{ borderWidth: 1, borderColor: "#ccc" }}>
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.headText}
            />
            <Rows data={tableData} textStyle={styles.text} />
          </Table>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.actionButton, styles.teknikResim]}>
            <Text style={styles.actionButtonText}>Teknik Resim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.makineDurusu]}>
            <Text style={styles.actionButtonText}>Makine Duruşu Ekle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.kaliteHata]}>
            <Text style={styles.actionButtonText}>Kalite Hata Bildirimi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.uretimBaslat]}>
            <Text style={styles.actionButtonText}>Üretimi Başlat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.uretimBitir]}
            onPress={() => navigation.navigate("ProductionEnd")}
          >
            <Text style={styles.actionButtonText}>Üretimi Bitir</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.hatDurusBaslat]}
          >
            <Text style={styles.actionButtonText}>Hat Duruş Başlat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.hatDurusBitir]}>
            <Text style={styles.actionButtonText}>Hat Duruş Bitir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    width: "100%",
    height: "100%",
    marginTop: -40,
  },
  contentContainer: {
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 4,
    marginRight: 10,
    backgroundColor: "#fff",
  },
  searchButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  table: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 20,
    padding: 10,
    borderRadius: 4,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  head: {
    height: 50,
    backgroundColor: "#f1f8ff",
  },
  headText: {
    margin: 6,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    margin: 6,
    textAlign: "center",
    height: 35,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  actionButton: {
    padding: 8,
    borderRadius: 4,
    marginBottom: 10,
    width: "12%",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    height: 40,
    justifyContent: "center",
    textAlign: "center",
  },
  actionButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 12,
  },
  teknikResim: {
    backgroundColor: "#B0E0E6",
  },
  makineDurusu: {
    backgroundColor: "#FFD700",
  },
  kaliteHata: {
    backgroundColor: "#FF8C00",
  },
  uretimBaslat: {
    backgroundColor: "#32CD32",
  },
  uretimBitir: {
    backgroundColor: "#FF6347",
  },
  hatDurusBaslat: {
    backgroundColor: "#32CD32",
  },
  hatDurusBitir: {
    backgroundColor: "#FF6347",
  },
});

export default HomeScreen;
