import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useStore } from "../Provider";

export default function OrderList() {
  const [state, dispatch] = useStore();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista Comanda</Text>
      <FlatList
        style={styles.content}
        data={state.cart}
        renderItem={({ item }) => (
          // item is Object
          <View style={styles.orderProductsView}>
            <Text style={styles.productName}>{item.product.denumire}</Text>
            <Text style={styles.productQty}>{item.quantity}</Text>
          </View>
        )}
        extraData={state}
        keyExtractor={item => item.product.id}
      />

      <Button
        style={styles.orderButton}
        title="Trimite Comanda"
        onPress={() => {
          dispatch({ type: "orders.update", data: state.cart });
        }}
      />
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

// Orders:
// [
//   {
//     id: 213123,
//     order: []
//   },
// ]
