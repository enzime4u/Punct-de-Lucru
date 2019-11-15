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
      <Image style={{ width: 100, height: 100 }} source={{ uri: poza }} />
      <View>
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
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3
  },
  denumire: {
    fontSize: 18,
    textAlign: "center"
  },
  gramaj: {
    fontSize: 8,
    textAlign: "left"
  },
  um: {
    fontSize: 8,
    textAlign: "right"
  }
});
