import {
    Text,
    View,
    ScrollView,
    Dimensions,
    Image,
    ImageBackground,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import GoogleButton from "../../components/GoogleButton";
import { Link } from "expo-router";
import CustomAlert from "../../components/CustomAlert";

const SignIn = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [isError, setIsError] = useState({
        email: false,
        password: false,
    });

    const loginNormal = async () => {
        if (form.email === "" && form.password === "") {
            Alert.alert("Error", `${form.email} Please fill in all fields`);
            setIsError({ ...isError, email: true, password: true });
        } else if (form.email === "" && form.password !== "") {
            Alert.alert("Error", "Please fill in the email");
            setIsError({ ...isError, email: true, password: false });
        } else if (form.email !== "" && form.password === "") {
            Alert.alert("Error", "Please fill in the password");
            setIsError({ ...isError, email: false, password: true });
        } else {
            setIsError({ ...isError, email: false, password: false });
        }
    };

    const loginGoogle = async () => {};

    return (
        <View className="w-full h-full">
            <ImageBackground
                source={require("../../assets/images/bgo3.png")}
                resizeMode="cover"
            >
                <SafeAreaView>
                    <ScrollView>
                        <View
                            className="flex h-screen items-center p-8 relative"
                            style={{
                                minHeight:
                                    Dimensions.get("window").height - 100,
                            }}
                        >
                            <Image
                                source={images.logo}
                                className="max-w-20 max-h-20 mt-7"
                                resizeMode="contain"
                            />

                            <View className="flex justify-center items-center gap-2">
                                <Text className="text-3xl font-semibold text-white mt-10 font-psemibold">
                                    Welcome
                                </Text>
                                <Text className="text-gray-400 text-lg">
                                    Enter your account here
                                </Text>
                            </View>
                            <View className="w-full">
                                <FormField
                                    title={"Email"}
                                    placeHolder={"Email"}
                                    inputType={"email-address"}
                                    contentType={"emailAddress"}
                                    value={form.email}
                                    handleChangeText={(e) =>
                                        setForm({ ...form, email: e })
                                    }
                                    isError={isError.email}
                                    iconText={"alternate-email"}
                                />
                                <FormField
                                    title={"Password"}
                                    placeHolder={"Password"}
                                    inputType={"default"}
                                    contentType={"default"}
                                    value={form.password}
                                    handleChangeText={(e) =>
                                        setForm({ ...form, password: e })
                                    }
                                    isError={isError.password}
                                    iconText={"password"}
                                />
                                <CustomButton
                                    title="SIGN IN"
                                    handlePress={loginNormal}
                                    containerStyles="w-full mt-7 bg-[#9a4924]"
                                    isLoading={false}
                                />
                            </View>
                            <View className="flex-row w-full items-center justify-between gap-2 my-6">
                                <View className="bg-gray-400 w-full flex-shrink h-[1px]" />
                                <Text className="text-gray-400">Or</Text>
                                <View className="bg-gray-400 w-full flex-shrink h-[1px]" />
                            </View>
                            <GoogleButton
                                containerStyles="w-full"
                                handlePress={loginGoogle}
                            />
                            <Text className="text-white absolute bottom-8 text-lg">
                                Don&apos;t have an account?{" "}
                                <Link
                                    className="text-secondary-200"
                                    href={"/sign-up"}
                                >
                                    Sign Up
                                </Link>
                            </Text>
                            <CustomAlert
                                title={"Error loggin in!"}
                                subtitle="lorem ipsum error msg bro testing"
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default SignIn;
