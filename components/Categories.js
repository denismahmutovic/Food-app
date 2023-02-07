import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

export default function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      <Text>Helloo</Text>
      <CategoriesCard imgUrl="https://links.papareact.com/wru" title="test" />
      <CategoriesCard imgUrl="https://links.papareact.com/wru" title="test" />
      <CategoriesCard imgUrl="https://links.papareact.com/wru" title="test" />
    </ScrollView>
  );
}
