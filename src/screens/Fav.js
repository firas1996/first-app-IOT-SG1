import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import TestItem from "../components/TestItem";
import FavStore from "../store/FavContext";

const Fav = () => {
  const { favItems } = useContext(FavStore);
  return (
    <View style={styles.container}>
      <View style={styles.v2}>
        <FlatList
          style={{ width: "100%" }}
          data={favItems}
          renderItem={({ item }) => (
            <TestItem title={item.title} id={item.id} isFav={item.isFav} />
          )}
        />
      </View>
    </View>
  );
};

export default Fav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBE4D6",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
