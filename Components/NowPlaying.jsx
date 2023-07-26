import React from 'react'
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native'
import { nowShowing } from '../Utils/Data'
import { useColors } from '../Utils/Color'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Detail from '../Screens/Detail';

export default function NowPlaying() {
    const nav = useNavigation()
    return (
        <FlatList data={nowShowing} numColumns={2} renderItem={({ item, key }) => (
            <View style={{ flex: 1, margin: '1%' }}>
                <Image style={{ height: 400, borderRadius: 10 }} source={{ uri: item.img }} />
                <TouchableOpacity onPress={() => {
                    nav.navigate('Detail', {item})
                }} style={{ position: 'absolute', bottom: 25, left: 10, gap: 5 }}>
                    <Text style={{ fontSize: 16, color: useColors.white, fontWeight: 'bold' }}>{item.title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <AntDesign name="heart" size={24} color={useColors.primary} />
                        <Text style={{ color: useColors.white, fontWeight: '400', fontSize: 14 }}>{item.fav} %</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )}>

        </FlatList>
    )
}