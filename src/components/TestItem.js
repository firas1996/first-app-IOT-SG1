import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useContext } from "react";
import FavStore from "../store/FavContext";

const TestItem = ({ title, id, isFav }) => {
  const { editItem } = useContext(FavStore);
  const favHandler = () => {
    editItem(id);
  };
  return (
    <View style={styles.item}>
      <Text style={styles.itemTXT}>{title}</Text>
      <TouchableOpacity onPress={favHandler}>
        <AntDesign
          name={isFav ? "heart" : "hearto"}
          size={28}
          color={isFav ? "red" : "white"}
        />
      </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemTXT: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
