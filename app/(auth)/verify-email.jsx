import { MaterialIcons } from "@expo/vector-icons";
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
import { CustomAlert, CustomButton } from "../../components";
import { useAuthContext } from "../../utils/AuthProvider";
import { sendVerificEmail } from "../../utils/authUser";

const VerifyEmail = () => {
    const { user, loading } = useAuthContext();
    let userEmail = "";
    if (!loading) {
        userEmail = user.email;
    }
    const [alertVisible, setAlertVisible] = useState(false);
    const [errMsg, setErrMsg] = useState({ title: "", subtitle: "" });
    const [submitting, setSubmitting] = useState(false);

    const showAlert = () => {
        setAlertVisible(true);
    };

    const hideAlert = () => {
        setAlertVisible(false);
    };

    const handleEmail = async () => {
        setSubmitting(true);
        try {
            await sendVerificEmail();
            setErrMsg({
                title: "Success",
                subtitle: "Successfully sent verification mail!",
            });
            showAlert();
        } catch (error) {
            setErrMsg({
                title: "Unknown error!",
                subtitle: "An unknown error occured. Please try again later!",
            });
            showAlert();
        } finally {
            setSubmitting(false);
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
                                            name="email"
                                            size={24}
                                            color="white"
                                        />
                                    </View>
                                </View>
                                <View className="flex justify-center items-center gap-2">
                                    <Text className="text-3xl font-semibold text-white mt-10 font-psemibold">
                                        Verify Email
                                    </Text>
                                    <Text className="text-gray-400 text-lg text-center max-w-[80%]">
                                        We've just sent an email to you at{" "}
                                        <Text className="font-pbold">
                                            {userEmail}
                                        </Text>
                                        . Tap on the link to verify your
                                        account.{"\n"}Please check your spam in
                                        case you can&apos;t find it.
                                    </Text>
                                </View>
                                <View className="w-full self-end mt-10">
                                    <CustomButton
                                        title="RESEND EMAIL"
                                        handlePress={handleEmail}
                                        containerStyles="w-full mt-7 bg-[#9a4924]"
                                        isLoading={submitting}
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

export default VerifyEmail;

const style = StyleSheet.create({
    avatart: {
        borderRadius: 3000,
    },
});
