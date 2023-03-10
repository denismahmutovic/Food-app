import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "react-native-heroicons/solid";

import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import Basketlcon from "../components/Basketlcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";
import { useEffect } from "react";

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, []);
  return (
    <>
      <ScrollView>
        <Basketlcon />
        <View>
          <Image
            source={{
              uri: imgUrl,
            }}
            className={`w-full h-56 bg-gray p-4`}
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
          <View className="bg-white">
            <View className="px-4 pt-4">
              <Text className="text-3xl font-bold">{title}</Text>
              <View className="flex-row space-x2 my-1">
                <View className="flex-row items-center space-x-1">
                  <StarIcon color={"green"} opacity={0.5} size={22} />
                  <Text className="text-xs text-gray-500">
                    <Text className="text-green-500">{rating}</Text>.{genre}
                  </Text>
                </View>

                <View className="flex-row items-center space-x-1">
                  {/* <LocarionMarkeIcon color={"green"} opacity={0.5} size={22} /> */}

                  <Text className="text-gray-500">Nearby . {address}</Text>
                </View>
              </View>
              <Text className="text-gray-500 mt-2 pb-4">
                {short_description}
              </Text>
            </View>
            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
              <QuestionMarkCircleIcon color={"gray"} opacity={0.6} size={20} />
              <Text className="pl-2 flex-1 text-md font-bold">
                Have a fodd allergy?
              </Text>
              <ChevronRightIcon color={"#00CCBB"} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="pb-36">
          <Text className="px-4 pt-4 mb-3 font-bold text-xl">Menu</Text>
          <DishRow
            name="Rostilj"
            description="uskorodhjasdjasjsadashidhasihdiashddsdsddsasdaasdas"
            imgUrl={{
              uri: imgUrl,
            }}
            id={1}
          />
          <DishRow
            name="Rostilj"
            description="uskorodhjasdjasjsadashidhasihdiashddsdsddsasdaasdas"
            imgUrl={{
              uri: imgUrl,
            }}
            id="2"
          />
        </View>
      </ScrollView>
    </>
  );
}
