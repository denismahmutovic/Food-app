import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoriesCard({ imgUrl, title }) {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
