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
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="test" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="test" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="test" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="test" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="test" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="test" />
    </ScrollView>
  );
}
