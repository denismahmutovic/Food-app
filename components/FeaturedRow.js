import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import client from "../sanity";
// import sanityClient from "../sanity";
// client

export default function FeaturedRow({ id, title, description }) {
  // let QUERY = encodeURIComponent('*[_type == "featured"]');

  // Compose the URL for your project's endpoint and add the query
  // let URL = `https://q1u6yqp1.api.sanity.io/v2021-10-21/data/query/production?query=${QUERY}`;

  // const [restaurants, SetRestauranys] = useState([]);
  // const BASE_URL =
  //   //   // "https://q1u6yqp1.api.sanity.io/v2021-10-21/data/query/production?query=%7B%0A%20%20%22_createdAt%22%3A%20%222023-02-10T16%3A04%3A10Z%22%2C%0A%20%20%22_id%22%3A%20%22drafts.01c74493-5481-457b-bb58-412521b371a2%22%2C%0A%20%20%22_rev%22%3A%20%22c2b77620-a375-45d7-962f-e74fdbd00edb%22%2C%0A%20%20%22_type%22%3A%20%22restaurant%22%2C%0A%20%20%22_updatedAt%22%3A%20%222023-02-10T16%3A32%3A20Z%22%2C%0A%20%20%22address%22%3A%20%228%20marrt%22%2C%0A%20%20%22dishes%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22_key%22%3A%20%22ab360a331a7d%22%2C%0A%20%20%20%20%20%20%22_ref%22%3A%20%227561ce31-f8b2-4c83-944a-7784d704eeb2%22%2C%0A%20%20%20%20%20%20%22_strengthenOnPublish%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22template%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22dish%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22dish%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22_type%22%3A%20%22reference%22%2C%0A%20%20%20%20%20%20%22_weak%22%3A%20true%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22image%22%3A%20%7B%0A%20%20%20%20%22_type%22%3A%20%22image%22%2C%0A%20%20%20%20%22asset%22%3A%20%7B%0A%20%20%20%20%20%20%22_ref%22%3A%20%22image-aefd25160be5f81e0114e3d44a859e6d89a08b6d-1226x2048-jpg%22%2C%0A%20%20%20%20%20%20%22_type%22%3A%20%22reference%22%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%22name%22%3A%20%22reee%22%2C%0A%20%20%22rating%22%3A%203%2C%0A%20%20%22short_description%22%3A%20%22dasdsa%22%2C%0A%20%20%22type%22%3A%20%7B%0A%20%20%20%20%22_ref%22%3A%20%221f2a8d69-e347-4a5a-ae5d-f272ff5ae938%22%2C%0A%20%20%20%20%22_type%22%3A%20%22reference%22%0A%20%20%7D%0A%7D%0A";
  //   "https://q1u6yqp1.api.sanity.io/v2021-10-21/data/query/production?query=%7B%0A%20%20%22_createdAt%22%3A%20%222023-02-10T16%3A04%3A10Z%22%2C%0A%20%20%22_id%22%3A%20%22drafts.01c74493-5481-457b-bb58-412521b371a2%22%2C%0A%20%20%22_rev%22%3A%20%22c2b77620-a375-45d7-962f-e74fdbd00edb%22%2C%0A%20%20%22_type%22%3A%20%22restaurant%22%2C%0A%20%20%22_updatedAt%22%3A%20%222023-02-10T16%3A32%3A20Z%22%2C%0A%20%20%22address%22%3A%20%228%20marrt%22%2C%0A%20%20%22dishes%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22_key%22%3A%20%22ab360a331a7d%22%2C%0A%20%20%20%20%20%20%22_ref%22%3A%20%227561ce31-f8b2-4c83-944a-7784d704eeb2%22%2C%0A%20%20%20%20%20%20%22_strengthenOnPublish%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22template%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22dish%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22dish%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22_type%22%3A%20%22reference%22%2C%0A%20%20%20%20%20%20%22_weak%22%3A%20true%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22image%22%3A%20%7B%0A%20%20%20%20%22_type%22%3A%20%22image%22%2C%0A%20%20%20%20%22asset%22%3A%20%7B%0A%20%20%20%20%20%20%22_ref%22%3A%20%22image-aefd25160be5f81e0114e3d44a859e6d89a08b6d-1226x2048-jpg%22%2C%0A%20%20%20%20%20%20%22_type%22%3A%20%22reference%22%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%22name%22%3A%20%22reee%22%2C%0A%20%20%22rating%22%3A%203%2C%0A%20%20%22short_description%22%3A%20%22dasdsa%22%2C%0A%20%20%22type%22%3A%20%7B%0A%20%20%20%20%22_ref%22%3A%20%221f2a8d69-e347-4a5a-ae5d-f272ff5ae938%22%2C%0A%20%20%20%20%22_type%22%3A%20%22reference%22%0A%20%20%7D%0A%7D%0A";
  // useEffect(() => {
  //   client
  //     .fetch(
  //       // BASE_URL
  //       // { id }
  //       `*[_type== "featured" && _id == $id] {
  //         ...,
  //         restaurants[]->{
  //           ...,
  //           dishes[]->,
  //           type-> {
  //             name
  //           }
  //         },
  //       }[0]`,
  //       { id }
  //       // URL
  //     )
  //     .then((data) => {
  //       console.log(data, "aaaaa");
  //       // return data?.json();
  //     })
  //     .then((el) => console.log(el))
  //     .catch((e) => console.log(e));
  // }, []);
  // console.log("proba", restaurants);

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
        {/* {restaurants?.map((restaurants) => (
          <RestaurantCard
            title={restaurants.result}
            imgUrl={restaurants.image}
            dishes={restaurants.dishes}
          />
        ))} */}

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
