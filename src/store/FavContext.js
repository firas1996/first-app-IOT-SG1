import { createContext, useEffect, useState } from "react";

const FavStore = createContext({
  data: [],
  favItems: [],
  addItem: () => {},
  editItem: () => {},
});
export default FavStore;

export const FavProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const addItem = (imp) => {
    console.log("aaaa");
    console.log(imp);
    if (imp.trim().length > 0) {
      setData([...data, { id: Math.random(), title: imp, isFav: false }]);
      //   setImp("");
    }
  };
  const editItem = (id) => {
    setData(
      data.map((item) => {
        return item.id === id ? { ...item, isFav: !item.isFav } : item;
      })
    );
  };
  useEffect(() => {
    setFavItems(
      data.filter((item) => {
        return item.isFav;
      })
    );
  }, [data]);
  return (
    <FavStore.Provider
      value={{
        data: data,
        favItems: favItems,
        addItem: addItem,
        editItem: editItem,
      }}
    >
      {children}
    </FavStore.Provider>
  );
};
