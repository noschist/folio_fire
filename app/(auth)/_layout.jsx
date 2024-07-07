import { router, Stack } from "expo-router";
import { StatusBar } from "react-native";
import { useAuthContext } from "../../utils/AuthProvider";
import { useEffect } from "react";

const AuthLayout = () => {
    const { user, loading } = useAuthContext();

    useEffect(() => {
        if (!loading) {
            if (user) {
                if (user.emailVerified) {
                    router.dismissAll();
                    router.replace("/home");
                }
            }
        }
    }, [user, loading]);
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="sign-in"
                    options={{
                        headerShown: false,
                        animation: "slide_from_right",
                    }}
                />
                <Stack.Screen
                    name="sign-up"
                    options={{
                        headerShown: false,
                        animation: "slide_from_right",
                    }}
                />
                <Stack.Screen
                    name="forgot-pass"
                    options={{
                        headerShown: false,
                        animation: "slide_from_bottom",
                    }}
                />
                <Stack.Screen
                    name="verify-email"
                    options={{
                        headerShown: false,
                        animation: "slide_from_right",
                    }}
                />
            </Stack>
            <StatusBar barStyle={"light-content"} />
        </>
    );
};

export default AuthLayout;
