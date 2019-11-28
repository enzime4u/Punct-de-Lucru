import React, { useReducer } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity
} from "react-native";

export default function Product({ id, name, poza, um, gramaj, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.name}>{name}</Text>
        <Image
          style={{ width: 150, height: 150, alignSelf: "center" }}
          source={{ uri: poza }}
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
  name: {
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
