import React from "react";
import { Image, StyleSheet } from "react-native";

const LogoHeader = () => {
  return <Image source={require("../assets/logo.png")} style={styles.logo} />;
};

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    top: 40,
    right: 20,
    width: 150,
    height: 60,
    resizeMode: "contain",
    zIndex: 1,
  },
});

export default LogoHeader;
