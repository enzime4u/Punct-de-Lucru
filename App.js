import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Produse from "./Produse";
import ListaComanda from "./ListaComanda";

export default function App() {
  return (
    <View style={styles.container}>
      <Produse />
      <ListaComanda />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row"
  }
});
