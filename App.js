import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <TextInput
          style={styles.input}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTXT}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.v2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  v1: {
    width: "100%",
    flex: 1,
    marginTop: 48,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  v2: { width: "100%", flex: 8, backgroundColor: "blue" },
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
    backgroundColor: "green",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
});
