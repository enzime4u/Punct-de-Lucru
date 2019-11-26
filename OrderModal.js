import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Modal,
  TouchableHighlight
} from "react-native";

export default function OrderModal({
  currentItem,
  items,
  // we pass it as  a prop
  incrementCurrentItem,
  addItemToCart,
  closeModal
}) {
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
                onPress={() =>
                  incrementCurrentItem({ id: currentItem.id, step: -1 })
                }
              />
              <Text style={styles.number}>{currentItem.quantity}</Text>
              <Button
                title="+"
                style={styles.button}
                onPress={() =>
                  incrementCurrentItem({ id: currentItem.id, step: 1 })
                }
              />
            </View>
            <Button
              title="Adauga"
              style={styles.buttonNew}
              onPress={() => {
                addItemToCart(currentItem);
                closeModal();
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
