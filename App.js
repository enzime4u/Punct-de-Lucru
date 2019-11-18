import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Produse from "./Produse";
import ListaComanda from "./ListaComanda";
import ModalComanda from "./ModalComanda";

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <Produse />
      <ListaComanda />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  }
});
