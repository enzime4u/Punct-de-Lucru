import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

import Product from "./Product";
import OrderModal from "./OrderModal";
import { useStore } from "../Provider";

export default function Products() {
  const [selected, setSelected] = useState(null);
  const [state] = useStore();

  if (selected) {
    return <OrderModal product={selected} onClose={() => setSelected(null)} />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.list}>
          {state.products.map(product => (
            <Product
              onPress={() => setSelected(product)}
              id={product.id}
              key={product.id}
              name={product.name}
              poza={product.picture}
              um={product.um}
              gramaj={product.gramaj}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 12,
    flex: 3
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
});
