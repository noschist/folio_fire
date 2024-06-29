import { Image, ImageBackground, Text, View, ScrollView } from "react-native";
import React from "react";
import { images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { Redirect, router } from "expo-router";

const Welcome = () => {
    return (
        <View className="w-full h-full">
            <ImageBackground
                source={require("../assets/images/bgo3.png")}
                resizeMode="cover"
            >
                <SafeAreaView>
                    <ScrollView>
                        <View className="flex h-screen items-center justify-between p-8">
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
                                    containerStyles="w-full mt-7 bg-[#ca6232]"
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
