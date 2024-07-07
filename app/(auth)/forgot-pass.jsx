import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
    Dimensions,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomAlert, CustomButton, FormField } from "../../components";
import { sendRestPassEmail } from "../../utils/authUser";

const ForgotPass = () => {
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

    const isValidEmail = (email) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    };

    const handleForgotPass = async () => {
        if (form.email === "") {
            setErrMsg({
                title: "Empty Email!",
                subtitle: "Please fill in the email",
            });
            setIsError({ email: true });
            showAlert();
        } else if (!isValidEmail(form.email)) {
            setErrMsg({
                title: "Invalid Email!",
                subtitle: "Please enter a valid email address",
            });
            setIsError({ email: true });
            showAlert();
        } else {
            try {
                await sendRestPassEmail(form.email);
            } catch (error) {
                if (error.code === "auth/invalid-email") {
                    setErrMsg({
                        title: "Invalid Email!",
                        subtitle: "Please enter a valid email address",
                    });
                    setIsError({ email: true });
                } else if (error.code === "auth/user-not-found") {
                    setErrMsg({
                        title: "Invalid Email!",
                        subtitle:
                            "This email address is not associated with any account",
                    });
                    setIsError({ email: true });
                }
                showAlert();
            }
        }
    };

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
                            <Link href={"/sign-in"} asChild>
                                <MaterialIcons
                                    className="self-start"
                                    name="arrow-back-ios-new"
                                    size={18}
                                    color="white"
                                />
                            </Link>
                            <View className="flex w-full mt-20 items-center">
                                <View
                                    style={style.avatart}
                                    className="bg-[#9a49248e] p-2"
                                >
                                    <View
                                        style={style.avatart}
                                        className="bg-[#9a4924] p-5"
                                    >
                                        <MaterialIcons
                                            name="lock"
                                            size={24}
                                            color="white"
                                        />
                                    </View>
                                </View>
                                <View className="flex justify-center items-center gap-2">
                                    <Text className="text-3xl font-semibold text-white mt-10 font-psemibold">
                                        Forgot Password
                                    </Text>
                                    <Text className="text-gray-400 text-lg text-center max-w-[80%]">
                                        Enter the email associated with your
                                        account and we will send an email to
                                        reset your password
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
                                    <CustomButton
                                        title="SEND EMAIL"
                                        handlePress={handleForgotPass}
                                        containerStyles="w-full mt-7 bg-[#9a4924]"
                                        isLoading={false}
                                    />
                                </View>
                                {alertVisible && (
                                    <CustomAlert
                                        title={errMsg.title}
                                        subtitle={errMsg.subtitle}
                                        onClose={hideAlert}
                                    />
                                )}
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default ForgotPass;

const style = StyleSheet.create({
    avatart: {
        borderRadius: 3000,
    },
});
