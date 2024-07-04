import { View, Text } from "react-native";
import React from "react";
import { Redirect, SplashScreen } from "expo-router";
import { useAuth } from "../../../utils/AuthProvider";

const TabsLayout = () => {
    const { user, loading } = useAuth();
    if (!loading && !user.emailVerified) {
        return <Redirect href={"/verify-email"} />;
    }
    if (!loading && !user) {
        return <Redirect href={"/"} />;
    }
    if (loading) {
        return null;
    }
    return (
        <View>
            <Text>TabsLayout</Text>
        </View>
    );
};

export default TabsLayout;
