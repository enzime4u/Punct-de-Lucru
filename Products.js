import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

import Product from "./Product";

import { data } from "./Items.js";

// we store the data in an Object where the key is the item id

export default function Products({ showModal }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.list}>
          {data.map(item => (
            <Product
              id={item.id}
              key={item.id}
              denumire={item.denumire}
              poza={item.poza}
              um={item.um}
              gramaj={item.gramaj}
              showModal={showModal}
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
