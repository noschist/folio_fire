import { router, Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { useAuthContext } from "../../utils/AuthProvider";

const AuthLayout = () => {
    const { user, loading } = useAuthContext();

    useEffect(() => {
        if (!loading && user) {
            // <Redirect href={"/home"} />;
            router.replace("/home");
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
