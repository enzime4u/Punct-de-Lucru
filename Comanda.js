import React from "react";
import { StyleSheet, Text, View, Button, Input } from "react-native";

export default function Comanda({ cant }) {
  return (
    <View>
      <Text>Comanda</Text>
      <Button>+</Button>
      <Input>{cant}</Input>
      <Button>-</Button>
    </View>
  );
}
