import { View, Image, TouchableOpacity } from "react-native";
export default ({image}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#282828",
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
      }}
    >
      <Image
        resizeMode="cover"
        style={{ width: 35, height: 35 }}
        source={image}
      />
    </TouchableOpacity>
  );
};
