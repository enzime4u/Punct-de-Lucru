import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Produs({
  id,
  denumire,
  poza,
  um,
  gramaj,
  stocDep,
  stocMeu
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.denumire}>{denumire}</Text>
      <Image style={{ width: 150, height: 150 }} source={{ uri: `${poza}` }} />
      <View style={styles.footer}>
        <Text style={styles.gramaj}>{gramaj}</Text>
        <Text style={styles.um}>{um}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "pink",
    width: "30%",
    marginTop: 10,
    justifyContent: "center"
  },
  footer: {
    justifyContent: "center"
  },
  denumire: {
    fontSize: 18
  },
  gramaj: {
    fontSize: 8
  },
  um: {
    fontSize: 8
  }
});
