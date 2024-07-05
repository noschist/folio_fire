import { router, Tabs } from "expo-router";
import React, { useEffect } from "react";
import { Loader } from "../../components";
import { useAuthContext } from "../../utils/AuthProvider";

const TabsLayout = () => {
    const { user, loading } = useAuthContext();

    useEffect(() => {
        if (!loading) {
            if (user) {
                if (!user.emailVerified) {
                    // <Redirect href={"/verify-email"} />;
                    router.replace("/verify-email");
                }
            } else {
                // <Redirect href={"/"} />;
                router.replace("/");
            }
        }
    }, [user, loading]);

    return loading ? (
        <Loader />
    ) : (
        <Tabs>
            <Tabs.Screen name="home" />
        </Tabs>
    );
};

export default TabsLayout;
