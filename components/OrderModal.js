import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Modal,
  TouchableHighlight
} from "react-native";

import { useStore } from "../Provider";

export default function OrderModal({ product, onClose }) {
  const [state, dispatch] = useStore();
  const cartEntry = state.cart
    .filter(entry => entry.product.id == product.id)
    .pop();
  const [quantity, setQuantity] = useState(cartEntry ? cartEntry.quantity : 0);

  return (
    <View>
      <TouchableHighlight>
        <Modal>
          <View style={styles.container}>
            <Text style={styles.title}>Adauga in Comanda</Text>
            <View style={styles.buttons}>
              <Button
                title="-"
                style={styles.button}
                onPress={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
              />
              <Text style={styles.number}>{quantity}</Text>
              <Button
                title="+"
                style={styles.button}
                onPress={() => setQuantity(quantity + 1)}
              />
            </View>
            <Button
              title={cartEntry ? "Update" : "Add"}
              style={styles.buttonNew}
              onPress={() => {
                dispatch({ type: "cart.update", data: { product, quantity } });
                onClose();
              }}
            />
          </View>
        </Modal>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    alignSelf: "center",
    marginTop: "20%",
    padding: 30
  },
  title: {
    fontSize: 28,
    marginTop: 10,
    alignSelf: "center"
  },
  number: {
    fontSize: 24
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  buttonNew: {
    width: 75,
    height: 30,
    backgroundColor: "#f78ae0",
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
    borderRadius: 3,
    color: "#fff"
  }
});
