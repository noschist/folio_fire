import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FormField = ({
    title,
    placeHolder,
    inputType = "default",
    contentType = "default",
    isError,
    value,
    handleChangeText,
    iconText,
    keyType = "next",
}) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <View className="gap-2 mt-8">
            <Text className="text-white font-pmedium text-lg">{title}</Text>
            <View
                className={`w-full h-16 px-4 ${
                    !isError ? "bg-[#281d2e]" : "bg-[#441010]"
                } rounded-lg border-2 gap-2 border-[#1b0e17] flex flex-row items-center`}
            >
                <MaterialIcons
                    name={iconText}
                    size={18}
                    color="rgb(156 163 175)"
                />

                <TextInput
                    placeholder={placeHolder}
                    className="flex-1 placeholder:text-gray-400 caret-neutral-200 text-white font-pregular text-lg"
                    textContentType={contentType}
                    onChangeText={handleChangeText}
                    value={value}
                    keyboardType={inputType}
                    returnKeyType={keyType}
                    autoCapitalize={
                        title === "Email" || title === "Password"
                            ? "none"
                            : "words"
                    }
                    secureTextEntry={title === "Password" && !showPassword}
                />

                {title === "Password" && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <MaterialCommunityIcons
                            name={
                                !showPassword
                                    ? "eye-outline"
                                    : "eye-off-outline"
                            }
                            size={19}
                            color="rgb(156 163 175)"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;

const styles = StyleSheet.create({});
