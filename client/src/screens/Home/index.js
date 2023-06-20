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
import { BottomSheet } from "react-native-btr";
export default ({ name }) => {
  const [refreshing, setRefreshing] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState({});
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };
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
          <HeaderIcon toggle={toggle} image={dotsThree} />
        </View>
        <Greeting name={name} />
        <Search />
        <Categories count={count} />
        <Text style={styles.category}>Todos estudos</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => setRefreshing(true)}
            />
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
        <BottomSheet
          visible={visible}
          onClose={toggle}
          onBackButtonPress={toggle}
          onBackdropPress={toggle}
        >
          <View style={styles.informationContainer}>
            <Text
              style={{
                fontFamily: "Bold",
                fontSize: 20,
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              Olá, seja muito bem vindo!
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontFamily: "Ubuntu",
                marginBottom: 30,
              }}
            >
              Apresento o aplicativo de estudos bíblicos, desenvolvido para
              ajudar cristãos em seus estudos da Bíblia. O aplicativo contém uma
              ampla variedade de estudos bíblicos sobre diversos temas e
              personagens, permitindo que os usuários aprofundem seu
              conhecimento sobre a Palavra de Deus. Além disso, o aplicativo
              conta com uma funcionalidade inovadora que permite aos usuários
              tirar dúvidas em tempo real usando inteligência artificial. Com
              isso, espero oferecer uma experiência de estudo bíblico mais
              enriquecedora e interativa para todos os usuários.
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontFamily: "Ubuntu",
                marginBottom: 10,
              }}
            >
              Conheça meu Linkedin:
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontFamily: "Ubuntu",
                marginBottom: 30,
              }}
            >
              René Armindo Lissai
            </Text>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </>
  );
};
