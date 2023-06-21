import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Gif from "react-native-gif"
export default ({ emoji, title, count, route }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={{
        justifyContent: "space-between",
        borderColor: "white",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
      }}
      onPress={() => {
        router.push(`/Search/${route}`);
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            marginRight: 15,
            padding: 7,
            borderRadius: 10,
            backgroundColor: "#282828",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Gif source={emoji} style={{ width: 70, height: 70 }}/>
        </View>
        <Text style={{ color: "white", fontSize: 16, fontFamily: "Ubuntu" }}>
          {title}
        </Text>
      </View>
      <Text style={{ color: "white", fontSize: 16, fontFamily: "Light" }}>
        {count}
      </Text>
    </TouchableOpacity>
  );
};
