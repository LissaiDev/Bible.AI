import { useSearchParams } from "expo-router";
import Activity from "../../src/components/Activity";
import { useEffect, useState } from "react";
import filterData from "../../src/utils/filterData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text } from "react-native";
import Item from "../../src/components/Item";
export default () => {
  const { filter } = useSearchParams();
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState([]);
  const fetch = async (filter) => {
    try {
      const response = await AsyncStorage.getItem("posts");
      const data = await JSON.parse(response);
      const filteredData = filterData(filter, data);
      setData(filteredData);
      setFetching(false);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    fetch(filter);
  }, []);
  return (
    <>
      {fetching ? (
        <Activity />
      ) : (
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "#151515",
            paddingHorizontal: 10,
            paddingVertical: 40,
          }}
        >
          <ScrollView>
            {data.length > 0 ? (
              data.map((item) => {
                return (
                  <Item
                    key={item._id}
                    id={item._id}
                    title={item.title}
                  />
                );
              })
            ) : (
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: 20,
                  fontSize: 20,
                  fontFamily: "Ubuntu",
                }}
              >
                Nenhum resultado
              </Text>
            )}
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};
