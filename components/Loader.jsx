import { View, Dimensions, Image } from "react-native";
import { images } from "../constants";

const Loader = () => {
    const screenHeight = Dimensions.get("screen").height;

    return (
        <View
            className="absolute flex justify-center items-center w-full h-full bg-primary z-10"
            style={{
                height: screenHeight,
            }}
        >
            <Image
                source={images.logo}
                className="max-w-28 max-h-28"
                resizeMode="contain"
            />
        </View>
    );
};

export default Loader;
