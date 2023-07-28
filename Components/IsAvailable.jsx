import react from "react";
import { TouchableOpacity, View, Text } from "react-native";

export const IsAvailable = ({ color, text }) => {
    return (
        <View style={{ gap: 10, alignItems: "center", flexDirection: "row" }}>
            <TouchableOpacity
                style={{
                    width: 20,
                    height: 20,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    backgroundColor: color,
                }}
            ></TouchableOpacity>
            <Text style={{ fontSize: 12, color: "grey", fontWeight: 400 }}>
                {text}
            </Text>
        </View>
    );
};
