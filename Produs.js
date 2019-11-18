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
      <Image
        style={{ width: 150, height: 150, alignSelf: "center" }}
        source={{ uri: "http://www.reactnativeexpress.com/static/logo.png" }}
      />
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
    justifyContent: "center",
    padding: 5
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  denumire: {
    fontSize: 24,
    alignSelf: "center"
  },
  gramaj: {
    fontSize: 12
  },
  um: {
    fontSize: 12
  }
});
