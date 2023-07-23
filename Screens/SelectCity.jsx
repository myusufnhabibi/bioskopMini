import react, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useColors } from "../Utils/Color";
import { SafeAreaView } from "react-native-safe-area-context";
import { kota } from "../Utils/Data";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SelectCity = () => {
    const [pilih, setPilih] = useState();
    const [klik, setKlik] = useState(true);
    const nav = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: useColors.white, paddingTop: 35, paddingHorizontal: 15 }}>
            <Text style={{ fontSize: 25, color: useColors.black, fontWeight: 'bold' }}>Select City</Text>

            <FlatList data={kota} numColumns={3} style={{ marginTop: 30 }} renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => {
                    setPilih(index)
                    setKlik(false)
                }} style={{ borderColor: pilih == index ? useColors.primary : useColors.grey, borderWidth: pilih == index ? 2 : 1, marginLeft: 20, marginBottom: 30, paddingHorizontal: 18, paddingVertical: 9, borderRadius: 20 }}>
                    <Text style={{ color: pilih == index ? useColors.primary : useColors.grey }}>{item}</Text>
                </TouchableOpacity>
            )}
            />

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity disabled={klik} onPress={() => {
                    nav.replace('Home')
                    AsyncStorage.setItem('login', 'on')
                }} style={{ backgroundColor: klik ? useColors.grey : useColors.primary, height: 55, marginHorizontal: 40, marginVertical: 20, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: useColors.white, fontWeight: 'bold' }}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SelectCity