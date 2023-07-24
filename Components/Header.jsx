import react, { useContext } from "react";
import { Entypo, Feather } from '@expo/vector-icons';
import { View, Text } from "react-native";
import { useColors } from "../Utils/Color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Store } from "../Context/Wrapper";

export default function Header() {
    const { data, setdata } = useContext(Store)
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingTop: 10, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Entypo name="location-pin" size={30} color={useColors.primary} />
                <Text style={{ fontSize: 17, color: useColors.primary, fontWeight: '600', }}>{(data) ? data : 'Select City'}</Text>
            </View>

            <Feather onPress={() => {
                AsyncStorage.removeItem('login')
            }} name="search" size={28} color={useColors.primary} />
        </View>
    )
}