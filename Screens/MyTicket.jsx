import react, { useContext, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { useColors } from "../Utils/Color";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { Theaters, dates } from "../Utils/Data";
import { useNavigation } from "@react-navigation/native";
import { MallSeats } from "../Context/Wrapper";

export default function Detai({ route }) {
    const { title, mall, date, time, gambar } = route.params
    const { seatsArray, setSeatsArray } = useContext(MallSeats)
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
                    My Ticket
                </Text>
            </View>

            <View style={{
                borderColor: '#E3E3E3',
                borderRadius: 12,
                borderWidth: 2,
                flexDirection: 'row',
                gap: 10
            }}>
                <Image style={{ width: 130, height: 150, borderRadius: 10 }} source={{ uri: gambar }}>
                </Image>
                <View style={{ gap: 2 }}>
                    <Text style={{ fontWeight: 600, marginVertical: 5, fontSize: 17, color: 'black' }}>{title}</Text>
                    <Text style={{ fontWeight: 500, fontSize: 15, color: 'grey' }}>{mall}l</Text>
                    <Text style={{ fontWeight: 500, fontSize: 14, color: 'grey' }}>{date.dat}h Date {time}</Text>
                    <Text style={{ fontWeight: 600, marginVertical: 5, fontSize: 17, color: 'black' }}>{seatsArray.join(" , ")}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <AntDesign name="barcode" size={34} color={'black'} />
                        <Text style={{ fontWeight: 600, fontSize: 17, color: 'black' }}>{seatsArray}AYAAN</Text>
                    </View>
                </View>

            </View>
            <View style={{ flex: 0.95, justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={() => {
                    nav.navigate('Home')
                    setSeatsArray([])
                }} activeOpacity={0.9} style={{ backgroundColor: useColors.primary, justifyContent: 'center', alignItems: 'center', borderRadius: 10, height: responsiveHeight(7) }}>
                    <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Continew to Home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}