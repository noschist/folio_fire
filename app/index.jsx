import { Image, ImageBackground, Text, View, ScrollView } from "react-native";
import React from "react";
import { images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { Redirect, router } from "expo-router";

const Welcome = () => {
    return (
        <View className="flex flex-1">
            <ImageBackground
                source={require("../assets/images/bgo3.png")}
                resizeMode="cover"
                className="flex flex-1"
            >
                <SafeAreaView className="h-full">
                    <ScrollView
                        contentContainerStyle={{
                            height: "100%",
                        }}
                    >
                        <View className="flex flex-1 items-center justify-between p-8">
                            <Image
                                source={images.logo}
                                className="max-w-24 max-h-24 mt-7"
                                resizeMode="contain"
                            />
                            <View className="w-full">
                                <Text className="text-6xl font-mregular leading-[1.3] text-white ">
                                    Securely {"\n"}
                                    Manage your{"\n"}
                                    Portfolio with{"\n"}
                                    <Text className="text-secondary-200">
                                        Folio
                                    </Text>
                                </Text>
                                <CustomButton
                                    title="Get Started"
                                    handlePress={() => router.push("/sign-in")}
                                    containerStyles="w-full mt-7"
                                    isLoading={false}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default Welcome;
