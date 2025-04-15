import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TestItem from "./src/components/TestItem";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [imp, setImp] = useState("");
  const inputHandler = (a) => {
    setImp(a);
  };
  const addItem = () => {
    if (imp.trim().length > 0) {
      setData([...data, { id: Math.random(), title: imp, isFav: false }]);
      setImp("");
    }
  };
  const editItem = (id) => {
    setData(
      data.map((item) => {
        return item.id === id ? { ...item, isFav: !item.isFav } : item;
      })
    );
  };
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <TextInput
          style={styles.input}
          placeholder="useless placeholder"
          onChangeText={inputHandler}
          value={imp}
        />
        <TouchableOpacity style={styles.btn} onPress={addItem}>
          <Text style={styles.btnTXT}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.v2}>
        <FlatList
          style={{ width: "100%" }}
          data={data}
          renderItem={({ item }) => (
            <TestItem
              title={item.title}
              id={item.id}
              isFav={item.isFav}
              editItem={editItem}
            />
          )}
        />
      </View>
    </View>
  );
}

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
