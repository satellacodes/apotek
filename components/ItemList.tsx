import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Item } from "../services/api";

interface ItemListProps {
  item: Item;
  onPress: () => void;
}

const ItemList: React.FC<ItemListProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default ItemList;
