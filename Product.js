import React, { useReducer } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity
} from "react-native";

export default function Product({ id, denumire, poza, um, gramaj, showModal }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log(id) || showModal(id)}>
        <Text style={styles.denumire}>{denumire}</Text>
        <Image
          style={{ width: 150, height: 150, alignSelf: "center" }}
          source={poza}
        />
        <View style={styles.footer}>
          <Text style={styles.gramaj}>{gramaj}</Text>
          <Text style={styles.um}>{um}</Text>
        </View>
      </TouchableOpacity>
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
    justifyContent: "space-around",
    marginTop: 10
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
