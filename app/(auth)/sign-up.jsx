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
import { registerWithPass } from "../../utils/authUser";
import { validateForm } from "../../utils/formValidations";

const SignUp = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [errMsg, setErrMsg] = useState({ title: "", subtitle: "" });
    const [isError, setIsError] = useState({
        name: false,
        email: false,
        password: false,
    });
    const [alertVisible, setAlertVisible] = useState(false);

    const showAlert = () => {
        setAlertVisible(true);
    };

    const hideAlert = () => {
        setAlertVisible(false);
    };

    const handleNormalSignup = () => {
        const inValRes = validateForm(
            form,
            setErrMsg,
            setIsError,
            showAlert,
            hideAlert,
            true
        ); // Passing true to validate name
        if (!inValRes) {
            try {
                registerWithPass(form.name, form.email, form.password);
                router.replace("/verify-email");
            } catch (error) {
                if (error.code === "auth/email-already-in-use") {
                    setErrMsg({
                        title: "Email Already in Use",
                        subtitle:
                            "The email address you entered is already registered.",
                    });
                    setIsError({ email: true });
                } else if (error.code === "auth/invalid-email") {
                    setErrMsg({
                        title: "Invalid Email Address",
                        subtitle: "Please enter a valid email address.",
                    });
                    setIsError({ email: true });
                } else if (error.code === "auth/weak-password") {
                    setErrMsg({
                        title: "Weak Password",
                        subtitle:
                            "Password should be at least 6 characters long.",
                    });
                    setIsError({ password: true });
                } else {
                    // Handle other errors
                    console.error(error);
                    setErrMsg({
                        title: "Sign Up Failed",
                        subtitle:
                            "An unexpected error occurred. Please try again later.",
                    });
                    setIsError({ email: false, password: false });
                }
                showAlert();
            }
        }
    };

    const handleGoogleSignup = async () => {};

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
                                    Create your account here
                                </Text>
                            </View>
                            <View className="w-full">
                                <FormField
                                    title={"Name"}
                                    placeHolder={"Name"}
                                    contentType={"name"}
                                    value={form.name}
                                    handleChangeText={(e) =>
                                        setForm({ ...form, name: e })
                                    }
                                    isError={isError.name}
                                    iconText={"person"}
                                />
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
                                    contentType={"default"}
                                    value={form.password}
                                    handleChangeText={(e) =>
                                        setForm({ ...form, password: e })
                                    }
                                    isError={isError.password}
                                    iconText={"password"}
                                />
                                <CustomButton
                                    title="SIGN UP"
                                    handlePress={handleNormalSignup}
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
                                handlePress={handleGoogleSignup}
                                isLoginBtn={false}
                            />
                            <Text className="text-white absolute bottom-8 text-lg">
                                Already have an account?{" "}
                                <Link
                                    className="text-secondary-200"
                                    href={"/sign-in"}
                                    replace
                                >
                                    Log In
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
