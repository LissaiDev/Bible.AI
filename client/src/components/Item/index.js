import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
export default ({ id, title }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#1e1e1e",
        padding: 10,
        borderRadius: 10,
        marginBottom: 17,
      }}
      onPress={() => router.push(`/Study/${id}`)}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "Bold",
          fontSize: 19,
          textAlign: "left",
          marginBottom: 10,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
