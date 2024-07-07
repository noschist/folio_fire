import * as Font from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import "../global.css";
import AuthProvider from "../utils/AuthProvider";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RootLayout = () => {
    const [appIsReady, setAppIsReady] = useState(false);

    function cacheFonts(fonts) {
        return fonts.map((font) => Font.loadAsync(font));
    }

    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();
                const fontAssets = cacheFonts([
                    MaterialIcons.font,
                    MaterialCommunityIcons.font,
                    {
                        "Poppins-Bold": require("../assets/Fonts/Pop/Poppins-Bold.ttf"),
                    },
                    {
                        "Poppins-ExtraBold": require("../assets/Fonts/Pop/Poppins-ExtraBold.ttf"),
                    },
                    {
                        "Poppins-ExtraLight": require("../assets/Fonts/Pop/Poppins-ExtraLight.ttf"),
                    },
                    {
                        "Poppins-Light": require("../assets/Fonts/Pop/Poppins-Light.ttf"),
                    },
                    {
                        "Poppins-Medium": require("../assets/Fonts/Pop/Poppins-Medium.ttf"),
                    },
                    {
                        "Poppins-Regular": require("../assets/Fonts/Pop/Poppins-Regular.ttf"),
                    },
                    {
                        "Poppins-SemiBold": require("../assets/Fonts/Pop/Poppins-SemiBold.ttf"),
                    },
                    {
                        "Poppins-Thin": require("../assets/Fonts/Pop/Poppins-Thin.ttf"),
                    },
                    {
                        "Poppins-BoldItalic": require("../assets/Fonts/Pop/Poppins-BoldItalic.ttf"),
                    },
                    {
                        "Poppins-ExtraBoldItalic": require("../assets/Fonts/Pop/Poppins-ExtraBoldItalic.ttf"),
                    },
                    {
                        "Poppins-ExtraLightItalic": require("../assets/Fonts/Pop/Poppins-ExtraLightItalic.ttf"),
                    },
                    {
                        "Poppins-LightItalic": require("../assets/Fonts/Pop/Poppins-LightItalic.ttf"),
                    },
                    {
                        "Poppins-MediumItalic": require("../assets/Fonts/Pop/Poppins-MediumItalic.ttf"),
                    },
                    {
                        "Poppins-Italic": require("../assets/Fonts/Pop/Poppins-Italic.ttf"),
                    },
                    {
                        "Poppins-SemiBoldItalic": require("../assets/Fonts/Pop/Poppins-SemiBoldItalic.ttf"),
                    },
                    {
                        "Poppins-ThinItalic": require("../assets/Fonts/Pop/Poppins-ThinItalic.ttf"),
                    },
                    {
                        "Montserrat-Regular": require("../assets/Fonts/Mont/Montserrat-Regular.ttf"),
                    },
                ]);

                await Promise.all([...fontAssets]);
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    if (!appIsReady) {
        return null;
    }

    return (
        <>
            <AuthProvider>
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="(auth)"
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="index"
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack>
            </AuthProvider>
            <StatusBar barStyle={"light-content"} />
        </>
    );
};

export default RootLayout;
