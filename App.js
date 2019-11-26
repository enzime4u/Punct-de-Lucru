import React, { useEffect, useState, useReducer } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

import { useCurrentItem, useCart } from "./hooks.js";

import { items } from "./Items.js";

import Products from "./Products";
import OrderList from "./OrderList";
import OrderModal from "./OrderModal";

export default function App() {
  // we call the HOOK here
  const { cart, addItemToCart } = useCart();

  // we call the HOOK here
  const { currentItem, incrementCurrentItem } = useCurrentItem();
  const showModal = React.useCallback(id =>
    incrementCurrentItem({ id, step: 0 })
  );
  const closeModal = React.useCallback(() =>
    incrementCurrentItem({ id: null, step: 0 })
  );

  if (currentItem.id !== null) {
    return (
      <OrderModal
        currentItem={currentItem}
        items={items}
        incrementCurrentItem={incrementCurrentItem}
        addItemToCart={addItemToCart}
        closeModal={closeModal}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Products showModal={showModal} />
      <OrderList cart={cart} items={items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  }
});
