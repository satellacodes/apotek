import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { fetchItems, Item } from "../services/api";
import ItemList from "../components/ItemList";

interface HomeScreenProps {
  navigation: any; // Anda bisa mendefinisikan tipe navigasi yang lebih spesifik jika diperlukan
}

const home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      const data = await fetchItems();
      setItems(data);
    };
    loadItems();
  }, []);

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemList
            item={item}
            onPress={() => navigation.navigate("Detail", { id: item.id })}
          />
        )}
      />
      <Button
        title="Add New Item"
        onPress={() => navigation.navigate("Detail", { id: null })}
      />
    </View>
  );
};

export default home;

