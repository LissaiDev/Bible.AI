import AnimatedLottieView from "lottie-react-native";
import { waving } from "../../../assets/animations/";
import { View, Text } from "react-native";
export default ({ name }) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            color: "#fff",
            fontFamily: "Ubuntu",
          }}
        >
          Olá, {name}
        </Text>
        <AnimatedLottieView
          source={waving}
          autoPlay={true}
          loop={false}
          resizeMode="cover"
          style={{
            width: 50,
            height: 50,
          }}
        />
      </View>
    </>
  );
};
