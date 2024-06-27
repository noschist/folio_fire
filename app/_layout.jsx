import "../global.css";
import { useEffect } from "react";
import { useFonts } from "expo-font";
// import "react-native-url-polyfill/auto";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Bold": require("../assets/Fonts/Pop/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/Fonts/Pop/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/Fonts/Pop/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/Fonts/Pop/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/Fonts/Pop/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/Fonts/Pop/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/Fonts/Pop/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/Fonts/Pop/Poppins-Thin.ttf"),
        "Poppins-BoldItalic": require("../assets/Fonts/Pop/Poppins-BoldItalic.ttf"),
        "Poppins-ExtraBoldItalic": require("../assets/Fonts/Pop/Poppins-ExtraBoldItalic.ttf"),
        "Poppins-ExtraLightItalic": require("../assets/Fonts/Pop/Poppins-ExtraLightItalic.ttf"),
        "Poppins-LightItalic": require("../assets/Fonts/Pop/Poppins-LightItalic.ttf"),
        "Poppins-MediumItalic": require("../assets/Fonts/Pop/Poppins-MediumItalic.ttf"),
        "Poppins-Italic": require("../assets/Fonts/Pop/Poppins-Italic.ttf"),
        "Poppins-SemiBoldItalic": require("../assets/Fonts/Pop/Poppins-SemiBoldItalic.ttf"),
        "Poppins-ThinItalic": require("../assets/Fonts/Pop/Poppins-ThinItalic.ttf"),

        "Montserrat-Regular": require("../assets/Fonts/Mont/Montserrat-Regular.ttf"),
    });

    useEffect(() => {
        if (error) throw error;

        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    if (!fontsLoaded) {
        return null;
    }

    if (!fontsLoaded && !error) {
        return null;
    }

    return (
        <>
            <Stack>
                <Stack.Screen
                    name="index"
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
            </Stack>
            <StatusBar barStyle={"light-content"} />
        </>
    );
};

export default RootLayout;
