import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton, Loader } from "../components";
import { images } from "../constants";
import { useAuthContext } from "../utils/AuthProvider";

const Welcome = () => {
    const { user, loading } = useAuthContext();

    useEffect(() => {
        if (!loading) {
            if (user) {
                if (user.emailVerified) {
                    router.replace("/home");
                } else {
                    router.replace("/verify-email");
                }
            }
        }
    }, [user, loading]);

    return loading ? (
        <Loader />
    ) : (
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
