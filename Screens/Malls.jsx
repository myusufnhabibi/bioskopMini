import react, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { useColors } from "../Utils/Color";
import { Seats } from "../Utils/Data";
import { IsAvailable } from "../Components/IsAvailable";
import { MallSeats } from "../Context/Wrapper";

export default function Malls({ route }) {
  const nav = useNavigation();
  const { title, mall, date, time, img } = route.params
  const { seatsArray, setSeatsArray } = useContext(MallSeats)
  console.log(img)
  let amount = 0

  if (seatsArray.length > 0) {
    amount = seatsArray.length * 100
  }
  console.log(seatsArray)
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
          height: responsiveHeight(7),
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
          {title}
        </Text>
      </View>
      <Text style={{ fontSize: 17, color: "grey", fontWeight: 400 }}>
        {mall} | {date.dat}th Date | {time}
      </Text>
      <View style={{ alignItems: "center" }}>
        <FlatList
          numColumns={6}
          data={Seats}
          renderItem={({ item, index }) =>
            seatsArray.includes(item) ? (
              <TouchableOpacity
                onPress={() => {
                  setSeatsArray(seatsArray.filter((remove) => remove != item))
                }}
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: "green",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  margin: "2%",
                }}
              ></TouchableOpacity>)
              :
              (<TouchableOpacity
                onPress={() => {
                  setSeatsArray([...seatsArray, item])
                }}
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: "#E3E3E3",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  margin: "2%",
                }}
              ></TouchableOpacity>
              )}
        ></FlatList>
      </View>
      <View
        style={{
          paddingHorizontal: 5,
          marginTop: 15,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <IsAvailable color={"red"} text={"UnAvaibility"} />
        <IsAvailable color={"#E3E3E3"} text={"Avaibility"} />
        <IsAvailable color={"green"} text={"Selected"} />
      </View>

      <View
        style={{
          flex: 0.9,
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            amount == 0 ? Alert.alert('Please Select Seat') : nav.navigate('MyTicket', {
              title,
              mall,
              date,
              time,
              gambar: img
            })
          }}
          activeOpacity={0.9}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 20,
            backgroundColor: useColors.primary,
            height: responsiveHeight(7),
            paddingHorizontal: 25
          }}

        >
          <Text style={{ fontSize: 17, color: 'white', fontWeight: 700 }}>Pay</Text>
          <Text style={{ fontSize: 17, fontWeight: 700, color: 'white' }}>Rp. {amount}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
}
