import { View, Text } from "react-native";
import React from "react";
import { CustomButton } from "../../components";
import { signOut } from "../../utils/authUser";

const HomePage = () => {
    return (
        <View>
            <Text>HomePage</Text>
            <CustomButton
                title={"Logout"}
                handlePress={() => {
                    signOut();
                }}
            />
        </View>
    );
};

export default HomePage;
