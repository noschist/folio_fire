import { View, Dimensions, Image } from "react-native";
import { images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const Loader = () => {
    const screenHeight = Dimensions.get("screen").height;

    return (
        <SafeAreaView>
            <View
                className="absolute flex justify-center items-center w-full h-full bg-primary z-10"
                style={{
                    height: screenHeight,
                }}
            >
                <Image
                    source={images.logo}
                    className="max-w-40 max-h-40"
                    resizeMode="contain"
                />
            </View>
        </SafeAreaView>
    );
};

export default Loader;
