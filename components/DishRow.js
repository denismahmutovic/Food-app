import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function DishRow({
  id,
  name,
  description,
  price,
  image,
  imgUrl,
}) {
  return (
    <TouchableOpacity className="bg-white border p-4 border-gray-200">
      <View>
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-400">{description}</Text>
        <Text className="text-gray-400 mt02">{price}</Text>
      </View>
      <View>
        <Image
          style={{
            borderdWidth: 1,
            borderColor: "#F3F3F4",
          }}
          source={imgUrl}
          className="h-20 w-20 bg-gray-300 p-4"
        />
      </View>
    </TouchableOpacity>
  );
}
