import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TestItem = () => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemTXT}>TestItem</Text>
    </View>
  );
};

export default TestItem;

const styles = StyleSheet.create({
  item: {
    width: "90%",
    backgroundColor: "brown",
    marginVertical: 6,
    padding: 10,
    borderRadius: 15,
  },
  itemTXT: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
