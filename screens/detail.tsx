import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import {
  fetchItemById,
  createItem,
  updateItem,
  deleteItem,
  Item,
} from "../services/api";

interface DetailScreenProps {
  route: any; // Anda bisa mendefinisikan tipe route yang lebih spesifik jika diperlukan
  navigation: any; // Anda bisa mendefinisikan tipe navigasi yang lebih spesifik jika diperlukan
}

const detail: React.FC<DetailScreenProps> = ({ route, navigation }) => {
  const { id } = route.params;
  const [item, setItem] = useState<Item>({ id: 0, title: "", body: "" });

  useEffect(() => {
    if (id) {
      const loadItem = async () => {
        const data = await fetchItemById(id);
        if (data) {
          setItem(data);
        }
      };
      loadItem();
    }
  }, [id]);

  const handleSave = async () => {
    if (id) {
      await updateItem(id, item);
    } else {
      await createItem({ title: item.title, body: item.body });
    }
    navigation.goBack();
  };

  const handleDelete = async () => {
    await deleteItem(id);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Detail Screen</Text>
      <TextInput
        placeholder="Title"
        value={item.title}
        onChangeText={(text) => setItem({ ...item, title: text })}
      />
      <TextInput
        placeholder="Body"
        value={item.body}
        onChangeText={(text) => setItem({ ...item, body: text })}
      />
      <Button title="Save" onPress={handleSave} />
      {id && <Button title="Delete" onPress={handleDelete} />}
    </View>
  );
};

export default detail;
