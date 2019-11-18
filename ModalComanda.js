import React from "react";
import { StyleSheet, Button, Text, View, Modal, Input } from "react-native";

import Comanda from "./Comanda";
import StocDepozit from "./StocDepozit";

export default function ModalComanda() {
  return (
    <Modal>
      <View style={styles.container}>
        <Text style={styles.title}>Comanda</Text>
        <View style={styles.buttons}>
          <Button title="+">+</Button>
          <Text>23</Text>
          <Button title="minus" />
        </View>
        <Button title="Adauga" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 250,
    height: 200,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "20%"
  },
  title: {
    fontSize: 28,
    textAlign: "center"
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
