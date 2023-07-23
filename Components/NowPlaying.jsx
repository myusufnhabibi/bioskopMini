import React from 'react'
import { FlatList, View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { nowShowing } from '../Utils/Data'
import { useColors } from '../Utils/Color'
import { AntDesign } from '@expo/vector-icons';

export default function NowPlaying() {
    return (
        <FlatList data={nowShowing} numColumns={2} renderItem={({ item, key }) => (
            <View style={{ flex: 1, margin: '1%' }}>
                <Image style={{ height: 400, borderRadius: 10 }} source={{ uri: item.img }} />
                <View style={{ position: 'absolute', bottom: 25, left: 10, gap: 5 }}>
                    <Text style={{ fontSize: 16, color: useColors.white, fontWeight: 'bold' }}>{item.title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <AntDesign name="heart" size={24} color={useColors.primary} />
                        <Text style={{ color: useColors.white, fontWeight: '400', fontSize: 14 }}>{item.fav} %</Text>
                    </View>
                </View>
            </View>
        )}>

        </FlatList>
    )
}