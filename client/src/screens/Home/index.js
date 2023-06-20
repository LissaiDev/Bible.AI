import { Text, View, FlatList, RefreshControl } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";
import HeaderIcon from "../../components/HeaderIcon";
import { dotsThree } from "../../../assets/icons/";
import Search from "../../components/Search";
import Item from "../../components/Item";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { getStudies } from "../../services/Studies";
import { useState } from "react";
import Greeting from "../../components/Greeting";
import Categories from "../../components/Categories";
export default ({ name }) => {
  const [refreshing, setRefreshing] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState({});
  useEffect(() => {
    setRefreshing(true);
    getStudies(setData, setCount);
    setRefreshing(false);
  }, [refreshing]);

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <HeaderIcon image={dotsThree} />
        </View>
        <Greeting name={name} />
        <Search/>
        <Categories count={count} />
        <Text style={styles.category}>Todos estudos</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(true)} />
          }
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Item
              id={item._id}
              title={item.title}
              description={item.description}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
};
