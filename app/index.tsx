import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
    return (
        <View className="flex flex-1 justify-center items-center bg-black">
            <Text className="text-white">Hello World</Text>
            <StatusBar style="auto" />
        </View>
    );
}
