import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Fav = () => {
  return (
    <View style={styles.container}>
      <Text>Fav</Text>
    </View>
  );
};

export default Fav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBE4D6",
    justifyContent: "center",
    alignItems: "center",
  },
});
