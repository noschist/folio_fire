import { Modal, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, {
    withTiming,
    useSharedValue,
    Easing,
    ReduceMotion,
    runOnJS,
} from "react-native-reanimated";

const CustomAlert = ({ title, subtitle, onClose }) => {
    const width = useSharedValue("100%");
    React.useEffect(() => {
        width.value = withTiming(
            "0%",
            {
                duration: 5000,
                easing: Easing.out(Easing.ease),
                reduceMotion: ReduceMotion.System,
            },
            (finished) => {
                "worklet";
                if (finished) {
                    runOnJS(onClose)();
                }
            }
        );
    });

    return (
        <Modal
            statusBarTranslucent={true}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View className="absolute bottom-4 w-[85%] self-center overflow-hidden bg-[#23273b] rounded-lg z-10">
                <View className="relative p-6">
                    <Text className="text-white text-lg">{title}</Text>
                    <Text className="text-gray-400 text-base">{subtitle}</Text>
                </View>
                <Animated.View
                    style={{ width }}
                    className="absolute bottom-0 bg-secondary-200 h-1"
                />
                <TouchableOpacity
                    className="absolute right-2 top-2"
                    onPress={onClose}
                >
                    <MaterialIcons
                        name="close"
                        size={18}
                        color="rgb(156 163 175)"
                    />
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default CustomAlert;

//Entry anim
//AUto close after 3 sec
//Progress bar should deplete by 3sec
//Close button also closes
