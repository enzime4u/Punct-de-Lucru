import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ListaComanda() {
  return (
    <View style={styles.container}>
      <Text>Lista Comanda</Text>
      <Text>Lista Comanda</Text>
      <Text>Lista Comanda</Text>
      <Text>Lista Comanda</Text>
      <Text>Lista Comanda</Text>
    </View>
  );
}

const width = "25%";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#000",
    width: width
  }
});
