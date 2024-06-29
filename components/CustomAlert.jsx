import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomAlert = ({ title, subtitle }) => {
    return (
        <View className="absolute bottom-4 w-full bg-[#141627]">
            <View className="relative w-full">
                <Text>{title}</Text>
                <Text>{subtitle}</Text>
            </View>
        </View>
    );
};

export default CustomAlert;

const styles = StyleSheet.create({});
