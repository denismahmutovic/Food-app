import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import Categories from "../components/Categories";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import FeaturedRow from "../components/FeaturedRow";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className={"flex-row pb-3 items-center mx-4 space-x-2"}>
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className={`h-7 w-7 bg-gray-300 p-4 rounded-full`}
        />

        <View className="flex-1">
          <Text className={`font-bold text-gray-400 text-xs`}>
            Deliver Now!
          </Text>
          <Text className={`font-bold text-xl`}>
            Current Location
            <ChevronDownIcon size={20} color={"#00CCBB"} />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>
      <View>
        <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
          {/* <SearchIcon /> */}
          <TextInput placeholder="hello" color={"gray"} size="40" />
        </View>
      </View>
      <ScrollView className="bg-gray-100">
        <Categories />
        <FeaturedRow
          id="123"
          title="Featured"
          description={"paid placements from our partners"}
        />
        <FeaturedRow
          id="1234"
          title="Featured"
          description={"paid placements from our partners"}
        />
        <FeaturedRow
          id="12345"
          title="Featured"
          description={"paid placements from our partners"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
