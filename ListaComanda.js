import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ListaComanda() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Lista Comanda</Text>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    margin: 0,
    padding: 0,
    justifyContent: "space-around"
  },
  header: {
    alignContent: "stretch"
  }
});
