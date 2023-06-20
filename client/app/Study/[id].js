import { useSearchParams } from "expo-router";
import Study from "../../src/screens/Study";
import { ActivityIndicator, View } from "react-native";
import { useEffect, useState } from "react";
import SinglePost from "../../src/services/SinglePost";
export default () => {
  const [loading, setLoading] = useState(true);
  const [data, setData]= useState([]);
  const { id } = useSearchParams();
  useEffect(() => {
      SinglePost(id, setData, setLoading);
  },[loading])
  return (
    <>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color={"#000"} size={"large"} />
        </View>
      ) : (
        <Study data={data}/>
      )}
    </>
  );
};
