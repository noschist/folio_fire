import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { images } from "../constants";

const GoogleButton = ({
    handlePress,
    isLoading,
    containerStyles,
    textStyles,
    isLoginBtn = true,
}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-[#ffffff] rounded-lg min-h-[55px] flex flex-row p-4 items-center ${containerStyles} ${
                isLoading ? "opacity-50" : ""
            }`}
            disabled={isLoading}
        >
            <Image
                source={images.google}
                resizeMode="contain"
                className="max-w-7 max-h-7"
            />
            <Text
                className={`text-[#af5329] text-center w-[87%] font-pmedium text-xl ${textStyles}`}
            >
                {`Sign ${isLoginBtn ? "In" : "Up"} With Google`}
            </Text>
        </TouchableOpacity>
    );
};

export default GoogleButton;
