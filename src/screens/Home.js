import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import TestItem from "../components/TestItem";
import FavStore from "../store/FavContext";

const Home = () => {
  const navigation = useNavigation();
  const { data, addItem } = useContext(FavStore);

  const [imp, setImp] = useState("");
  const inputHandler = (a) => {
    setImp(a);
  };
  console.log(data);
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate("Fav", { name: "abc" });
        }}
        title="Go To Fav"
      />
      <View style={styles.v1}>
        <TextInput
          style={styles.input}
          placeholder="useless placeholder"
          onChangeText={inputHandler}
          value={imp}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            addItem(imp);
            setImp("");
          }}
        >
          <Text style={styles.btnTXT}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.v2}>
        <FlatList
          style={{ width: "100%" }}
          data={data}
          renderItem={({ item }) => (
            <TestItem title={item.title} id={item.id} isFav={item.isFav} />
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBE4D6",
    alignItems: "center",
    justifyContent: "center",
  },
  v1: {
    width: "100%",
    flex: 1,
    marginTop: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  v2: { width: "100%", flex: 8, alignItems: "center" },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    borderColor: "#ccc",
    width: "70%",
  },
  btnTXT: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#0C0950",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
});
