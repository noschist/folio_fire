import { Stack } from "expo-router";
import { StatusBar } from "react-native";

const AuthLayout = () => {
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
