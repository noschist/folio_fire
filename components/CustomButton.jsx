import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({
    title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading,
}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.5}
            className={`rounded-lg min-h-[55px] flex flex-row justify-center items-center ${containerStyles} ${
                isLoading ? "opacity-50" : ""
            }`}
            disabled={isLoading}
        >
            <Text className={`text-white font-pregular text-xl ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
