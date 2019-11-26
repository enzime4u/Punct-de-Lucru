import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";

export default function ListaComanda({ items, cart }) {
  console.log(cart);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista Comanda</Text>
      <FlatList
        style={styles.content}
        data={Object.keys(cart).map(id => items[id])}
        renderItem={({ item }) => (
          <View style={styles.orderProductsView}>
            <Text style={styles.productName}>{item.denumire}</Text>
            <Text style={styles.productQty}>{cart[item.id]}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      <Button style={styles.orderButton} title="Trimite Comanda"></Button>
    </View>
  );
}

// Send Order Button

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    borderStyle: "solid",
    marginTop: 20,
    padding: 4,
    backgroundColor: "#83cbfa"
  },
  header: {
    fontSize: 26,
    alignSelf: "center"
  },
  orderProductsView: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "center"
  },
  productName: {
    flexGrow: 2,
    fontSize: 14
  },
  productQty: {
    flexGrow: 1,
    fontSize: 16
  },
  orderButton: {
    width: 20,
    backgroundColor: "red",
    color: "#ffffff"
  }
});
