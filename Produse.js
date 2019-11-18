import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

import Produs from "./Produs";

import Picture from "./image.jpg";

const image = "image.jpg";

const data = [
  {
    id: "11a",
    denumire: "Produs1",
    poza: "./image.jpg",
    um: "grame",
    gramaj: 150,
    stocMeu: 3,
    stocDep: 10
  },
  {
    id: "11s",
    denumire: "Produs2",
    poza: image,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11b",
    denumire: "Produs3",
    poza: Picture,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11g",
    denumire: "Produs4",
    poza: null,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11e",
    denumire: "Produs5",
    poza: null,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11f",
    denumire: "Produs6",
    poza: null,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11f333",
    denumire: "Produs7",
    poza: null,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11f3233",
    denumire: "Produs8",
    poza: null,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11f32312313",
    denumire: "Produs9",
    poza: null,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  }
];

export default function Produse() {
  return (
    <View style={styles.container}>
      {data.map(item => (
        <Produs
          key={item.id}
          denumire={item.denumire}
          poza={item.poza}
          um={item.um}
          gramaj={item.gramaj}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
});
