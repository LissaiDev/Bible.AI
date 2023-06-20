import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#1a1822",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator color={"#fff"} size={"large"} />
    </SafeAreaView>
  );
};
