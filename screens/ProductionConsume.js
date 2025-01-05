import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LogoHeader from "../components/LogoHeader";
import { Ionicons } from "@expo/vector-icons";

const ProductionConsume = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );
  const navigation = useNavigation();

  useEffect(() => {
    // Ekran boyutu değişikliklerini dinle
    const updateLayout = () => {
      setScreenWidth(Dimensions.get("window").width);
    };

    const subscription = Dimensions.addEventListener("change", updateLayout);

    // Component unmount olduğunda listener'ı temizle
    return () => subscription.remove();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    contents: {
      flex: 1,
      padding: 16,
      backgroundColor: "#fff",
      paddingTop: 20,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 60,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 20,
      color: "#000",
    },
    tableContainer: {
      flex: 1,
      marginBottom: 20,
    },
    tableContentContainer: {
      flexGrow: 1,
      width: "100%",
    },
    tableWrapper: {
      minWidth: "100%",
      flex: 1,
    },
    headerRow: {
      flexDirection: "row",
      backgroundColor: "#E6E6E6",
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "#ddd",
    },
    headerCell: {
      padding: screenWidth < 768 ? 8 : 12,
      borderWidth: 1,
      borderColor: "#000",
    },
    headerText: {
      fontWeight: "600",
      fontSize: screenWidth < 768 ? 12 : 14,
      color: "#000",
    },
    tableRow: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderColor: "#ddd",
    },
    cell: {
      padding: screenWidth < 768 ? 8 : 12,
      borderRightWidth: 1,
      borderColor: "#ddd",
    },
    cellText: {
      fontSize: screenWidth < 768 ? 12 : 14,
      color: "#333",
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 12,
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
    addButton: {
      backgroundColor: "#FFEB3B",
      padding: 12,
      borderRadius: 4,
      flex: 1,
    },
    errorButton: {
      backgroundColor: "#FF9800",
      padding: 12,
      borderRadius: 4,
      flex: 1,
    },
    confirmButton: {
      backgroundColor: "#7CFF6B",
      padding: 12,
      borderRadius: 4,
      flex: 1,
    },
    buttonText: {
      textAlign: "center",
      color: "#000",
      fontSize: 14,
      fontWeight: "500",
    },
    backButton: {
      position: "absolute",
      top: 40,
      left: 20,
      padding: 8,
      zIndex: 1,
    },
  });

  const tableHeaders = [
    "Ü.A Kalem Tipi",
    "Malzeme Kodu",
    "Malzeme Adı",
    "Depo",
    "Stok Yeri",
    "Mevcut Stok",
    "Miktar",
    "Miktar Br.",
    "Parti Numarası",
  ];

  const getColumnWidth = (index) => {
    const baseWidths = {
      0: 120, // Ü.A Kalem Tipi
      1: 140, // Malzeme Kodu
      2: 180, // Malzeme Adı
      3: 120, // Depo
      4: 120, // Stok Yeri
      5: 140, // Mevcut Stok
      6: 140, // Miktar
      7: 100, // Miktar Br.
      8: 120, // Parti Numarası
    };

    // Ekran genişliğine göre sütun genişliklerini ayarla
    const scaleFactor = screenWidth / 1200;

    return (baseWidths[index] || 100) * scaleFactor;
  };

  return (
    <View style={styles.container}>
      <LogoHeader />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.contents}>
        <Text style={styles.title}>Üretim Bitiş Onayı (Oto Emiş)</Text>

        <ScrollView
          horizontal
          style={styles.tableContainer}
          contentContainerStyle={styles.tableContentContainer}
        >
          <View style={styles.tableWrapper}>
            <View style={styles.headerRow}>
              {tableHeaders.map((header, index) => (
                <View
                  key={index}
                  style={[styles.headerCell, { width: getColumnWidth(index) }]}
                >
                  <Text style={styles.headerText}>{header}</Text>
                </View>
              ))}
            </View>

            {[1, 2, 3, 4, 5].map((row) => (
              <View key={row} style={styles.tableRow}>
                {tableHeaders.map((_, index) => (
                  <View
                    key={index}
                    style={[styles.cell, { width: getColumnWidth(index) }]}
                  >
                    <Text style={styles.cellText}></Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>Satır Ekle</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.errorButton}>
          <Text style={styles.buttonText}>Kalite Hata Bildirimi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.buttonText}>Onayla</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductionConsume;
