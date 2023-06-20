import { View, Text, Image, TextInput } from "react-native";
import { search } from "../../../assets/icons";
import { useState } from "react";
import { useRouter } from "expo-router";
export default () => {
  const [searching, setSearch] = useState("")
  const router = useRouter();
  return (
    <View
      style={{
        backgroundColor: "#282828",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 10
      }}
    >
      <Image
        source={search}
        resizeMode="cover"
        style={{ width: 23, height: 23 }}
      />
      <TextInput
        caretHidden
        placeholder="Search"
        style={{
          flexGrow: 1,
          color: "#7a7a7a",
          fontFamily: "Regular",
          fontSize: 15,
          marginLeft: 10,
        }}
        placeholderTextColor={"#7a7a7a"}
        onChangeText={(value)=> setSearch(value)}
        value={searching}
        onSubmitEditing={()=> searching && router.push(`/Search/${searching}`)}
      />
    </View>
  );
};
