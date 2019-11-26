import React, { useEffect, useState, useReducer } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

import Products from "./components/Products";
import OrderList from "./components/OrderList";
import Provider, { useStore } from "./Provider";
import products from "./products.js";

function Main() {
  const [state, dispatch] = useStore();

  useEffect(() => {
    products().then(products => {
      dispatch({ type: "products.update", data: products });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Products />
      <OrderList />
    </View>
  );
}

export default function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  }
});
