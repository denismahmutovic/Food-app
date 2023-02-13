import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import client from "../sanity";
// import sanityClient from "../sanity";
// client

export default function FeaturedRow({ id, title, description }) {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "restaurant" && _id == "35407a46-56ef-4ebf-8f1b-324a9dd8ac61"]  {
        ...
          }`
      )
      .then((element) =>
        console.log(element?.map((el) => console.log(el?.name)))
      )
      .catch((e) => console.log(e));
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants?.map((el) => (
          <RestaurantCard title={el.name} />
        ))}

        {
          <RestaurantCard
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="You! Sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St"
            short_description="This is a Test description"
            dishes={[]}
            long={20}
            lat={0}
          />
        }
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="You! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="You! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
}
