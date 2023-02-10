import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function RestaurantScreen() {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
