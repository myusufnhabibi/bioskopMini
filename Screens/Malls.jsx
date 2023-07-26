import react from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { useColors } from "../Utils/Color";
import { Seats } from "../Utils/Data";

export default function Malls() {
  const nav = useNavigation();
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 15,
        flex: 1,
        gap: 10,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          height: responsiveHeight(6),
          borderBottomWidth: 2,
          borderColor: "#E3E3E3",
        }}
      >
        <Ionicons
          onPress={() => {
            nav.goBack();
          }}
          name="chevron-back-outline"
          size={26}
          color={useColors.primary}
        />
        <Text style={{ color: "black", fontWeight: 600, fontSize: 17 }}>
          Anspo
        </Text>
      </View>
      <Text style={{ fontSize: 17, color: "grey", fontWeight: 400 }}>
        Matahari Mall | 23 Juli 2023 | 12:30
      </Text>
      <View style={{ alignItems: "center" }}>
        <FlatList
            // style={{width: '100%'}}
          numColumns={6}
          data={Seats}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#E3E3E3",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                margin: '1%'
                // margin: '3%'
              }}
            >
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}
