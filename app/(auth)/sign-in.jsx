import { Link, router } from "expo-router";
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
import {
    CustomAlert,
    CustomButton,
    FormField,
    GoogleButton,
} from "../../components";
import { images } from "../../constants";
import { validateForm } from "../../utils/formValidations";
import { signinWithPass } from "../../utils/authUser";

const SignIn = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [errMsg, setErrMsg] = useState({ title: "", subtitle: "" });
    const [isError, setIsError] = useState({ email: false, password: false });
    const [alertVisible, setAlertVisible] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const showAlert = () => {
        setAlertVisible(true);
    };

    const hideAlert = () => {
        setAlertVisible(false);
    };

    const handleNormalLogin = async () => {
        const isValidForm = validateForm(
            form,
            setErrMsg,
            setIsError,
            showAlert,
            hideAlert
        );
        if (isValidForm) {
            setSubmitting(true);
            try {
                const userCred = await signinWithPass(
                    form.email,
                    form.password
                );
                if (userCred) {
                    // router.dismissAll();
                    if (userCred.user.emailVerified) {
                        router.replace("/home");
                    } else {
                        router.replace("/verify-email");
                    }
                }
            } catch (error) {
                //TODO: Implement error codes
            } finally {
                setSubmitting(false);
            }
        }
    };

    const handleGoogleLogin = async () => {};

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
                                    value={form.password}
                                    handleChangeText={(e) =>
                                        setForm({ ...form, password: e })
                                    }
                                    isError={isError.password}
                                    iconText={"password"}
                                    keyType="done"
                                />
                                <Link
                                    className="text-gray-300 text-right mt-2 mr-1"
                                    href="/forgot-pass"
                                >
                                    Forgot password?
                                </Link>
                                <CustomButton
                                    title="SIGN IN"
                                    handlePress={handleNormalLogin}
                                    containerStyles="w-full mt-7 bg-[#9a4924]"
                                    isLoading={submitting}
                                />
                            </View>
                            <View className="flex-row w-full items-center justify-between gap-2 my-6">
                                <View className="bg-gray-400 w-full flex-shrink h-[1px]" />
                                <Text className="text-gray-400">Or</Text>
                                <View className="bg-gray-400 w-full flex-shrink h-[1px]" />
                            </View>
                            <GoogleButton
                                containerStyles="w-full"
                                handlePress={handleGoogleLogin}
                                isLoading={submitting}
                            />
                            <Text className="text-white absolute bottom-8 text-lg">
                                Don&apos;t have an account?{" "}
                                <Link
                                    className="text-secondary-200"
                                    replace
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

export default SignIn;
