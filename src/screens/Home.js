import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate("Fav", { name: "abc" });
        }}
        title="Go To Fav"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBE4D6",
    justifyContent: "center",
    alignItems: "center",
  },
});
