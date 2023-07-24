import react, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from './../Components/Header'
import { SafeAreaView } from "react-native-safe-area-context";
import { useColors } from "../Utils/Color";
import ComingSoon from "./../Components/ComingSoon";
import NowPlaying from "./../Components/NowPlaying";

export default function Home() {
    const [isAktif, setAktif] = useState(0)

    return (
        <SafeAreaView style={{ flex: 1, gap: 20 }}>
            <Header />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity onPress={() => {
                    setAktif(0)
                }}>
                    <Text style={{ color: isAktif == 0 ? useColors.primary : useColors.grey, fontSize: 17, fontWeight: isAktif == 0 ? 'bold' : '500' }}>
                        Now Playing
                    </Text>
                    {
                        isAktif == 0 && <View style={{
                            width: 32,
                            height: 3,
                            backgroundColor: useColors.primary,
                            alignSelf: 'center',
                            marginTop: 10
                        }}>

                        </View>
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setAktif(1)
                }}>
                    <Text style={{ color: isAktif == 1 ? useColors.primary : useColors.grey, fontSize: 17, fontWeight: isAktif == 1 ? 'bold' : '500' }}>
                        Coming Soon
                    </Text>
                    {
                        isAktif == 1 && <View style={{
                            width: 32,
                            height: 3,
                            backgroundColor: useColors.primary,
                            alignSelf: 'center',
                            marginTop: 10
                        }}>

                        </View>
                    }
                </TouchableOpacity>
            </View>
            {
                isAktif == 0 ? <NowPlaying /> : <ComingSoon />
            }
        </SafeAreaView>
    )
}