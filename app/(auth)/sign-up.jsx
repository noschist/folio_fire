import { Link } from "expo-router";
import React, { useState } from "react";
import {
    Dimensions,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAlert from "../../components/CustomAlert";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import GoogleButton from "../../components/GoogleButton";
import { images } from "../../constants";

const SignUp = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [isError, setIsError] = useState({
        name: false,
        email: false,
        password: false,
    });

    const [errMsg, setErrMsg] = useState({
        title: "",
        subtitle: "",
    });

    const [alertVisible, setAlertVisible] = useState(false);

    const showAlert = () => {
        setAlertVisible(true);
    };

    const hideAlert = () => {
        setAlertVisible(false);
    };

    const isValidEmail = (email) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    };

    const loginNormal = () => {
        if (form.email === "" && form.password === "") {
            setErrMsg({
                title: "Empty Fields!",
                subtitle: "Please fill in both fields",
            });
            setIsError({ email: true, password: true });
            showAlert();
        } else if (form.email === "") {
            setErrMsg({
                title: "Empty Email!",
                subtitle: "Please fill in the email",
            });
            setIsError({ email: true, password: false });
            showAlert();
        } else if (form.password === "") {
            setErrMsg({
                title: "Empty Password!",
                subtitle: "Please fill in the password",
            });
            setIsError({ email: false, password: true });
            showAlert();
        } else if (!isValidEmail(form.email)) {
            setErrMsg({
                title: "Invalid Email!",
                subtitle: "Please enter a valid email address",
            });
            setIsError({ email: true, password: false });
            showAlert();
        } else if (form.password.length < 12) {
            setErrMsg({
                title: "Invalid Password!",
                subtitle: "Password length should be minimum 12",
            });
            setIsError({ email: true, password: false });
            showAlert();
        } else {
            setErrMsg({
                title: "",
                subtitle: "",
            });
            setIsError({ email: false, password: false });
            hideAlert();
            isValid = true;
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
                                <Link
                                    className="text-gray-300 text-right mt-2 mr-1"
                                    href="/forgot-pass"
                                >
                                    Forgot password?
                                </Link>
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
                            {alertVisible && (
                                <CustomAlert
                                    title={errMsg.title}
                                    subtitle={errMsg.subtitle}
                                    onClose={hideAlert}
                                />
                            )}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default SignUp;
