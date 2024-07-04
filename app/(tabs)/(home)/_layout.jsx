import { View, Text } from "react-native";
import React from "react";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "../../../utils/AuthProvider";

const HomeLayout = () => {
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
        <Stack>
            <Stack.Screen name="home" />
        </Stack>
    );
};

export default HomeLayout;
