import react from "react";
import { Entypo, Feather } from '@expo/vector-icons';
import { View, Text } from "react-native-web";
import { useColors } from "../Utils/Color";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Header() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingTop: 10, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Entypo name="location-pin" size={30} color={useColors.primary} />
                <Text style={{ fontSize: 17, color: useColors.primary, fontWeight: '600', }}>Kudus</Text>
            </View>

            <Feather onPress={() => {
                AsyncStorage.removeItem('login')
            }} name="search" size={28} color={useColors.primary} />
        </View>


    )
}