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
                    }}
                />
                <Stack.Screen
                    name="sign-up"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
            <StatusBar barStyle={"light-content"} />
        </>
    );
};

export default AuthLayout;
