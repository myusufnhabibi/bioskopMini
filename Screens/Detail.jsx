import react, { useContext, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { useColors } from "../Utils/Color";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { Theaters, dates } from "../Utils/Data";
import { useNavigation } from "@react-navigation/native";

export default function Detai({ route }) {
  const nav = useNavigation();
  const [pilih, setPilih] = useState();
  const { title } = route.params.item;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", gap: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: responsiveHeight(6),
          paddingHorizontal: 15,
          borderBottomWidth: 2,
          borderColor: "#E3E3E3",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons
            onPress={() => {
              nav.goBack();
            }}
            name="chevron-back-outline"
            size={26}
            color={useColors.primary}
          />
          <Text style={{ color: "black", fontWeight: 600, fontSize: 17 }}>
            {title}
          </Text>
        </View>

        <Feather name="search" size={26} color={useColors.primary} />
      </View>

      <View style={{ height: responsiveHeight(13), alignItems: "center" }}>
        <FlatList
          horizontal
          data={dates}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setPilih(item);
              }}
              style={{
                alignItems: "center",
                backgroundColor: pilih == item ? useColors.primary : null,
                justifyContent: "space-evenly",
                marginHorizontal: 10,
                paddingHorizontal: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 400,
                  color: pilih == item ? "white" : useColors.primary,
                }}
              >
                {item.day}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: pilih == item ? "white" : "black",
                }}
              >
                {item.dat}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 400,
                  color: pilih == item ? "white" : "black",
                }}
              >
                {item.mon}
              </Text>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={Theaters}
        style={{ paddingHorizontal: 20 }}
        renderItem={({ item, index }) => (
          <View
            style={{
              height: responsiveHeight(19),
              marginBottom: 10,
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderWidth: 2,
              borderColor: "#E3E3E3",
              borderRadius: 12,
              gap: 6,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <AntDesign name="heart" size={24} color={useColors.primary} />
              <Text style={{ fontSize: 17, fontWeight: 600 }}>{item.name}</Text>
            </View>
            <Text style={{ fontWeight: 400, fontSize: 12 }}>
              Non Cancellable
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {item.timings.map((value, index) => (
                <TouchableOpacity
                    onPress={() => {
                        nav.navigate('Malls')
                    }}
                  key={index}
                  style={{
                    paddingHorizontal: 10,
                    marginBottom: 4,
                    marginRight: 5,
                    paddingVertical: 5,
                    borderColor: "green",
                    borderWidth: 1,
                    borderRadius: 12,
                  }}
                >
                  <Text
                    style={{ fontSize: 13, fontWeight: 400, color: "green" }}
                  >
                    {value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}
