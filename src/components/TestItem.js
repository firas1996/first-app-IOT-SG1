import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TestItem = ({ title }) => {
  // const {title}=props
  return (
    <View style={styles.item}>
      <Text style={styles.itemTXT}>{title}</Text>
    </View>
  );
};

export default TestItem;

const styles = StyleSheet.create({
  item: {
    width: "90%",
    backgroundColor: "#261FB3",
    marginVertical: 6,
    padding: 10,
    borderRadius: 15,
    alignSelf: "center",
  },
  itemTXT: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
