import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";
import HeaderIcon from "../../components/HeaderIcon";
import { dotsThree } from "../../../assets/icons/";
import Search from "../../components/Search";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { getStudies } from "../../services/Studies";
import { useState } from "react";
import Greeting from "../../components/Greeting";
import Categories from "../../components/Categories";
import TalkToMe from "../../components/TalkToMe";
import Categorie from "../../components/Categorie";
import Activity from "../../components/Activity";
export default ({ name }) => {
  const [count, setCount] = useState({});
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const toggle = () => {
    setVisible(!visible);
    setText("");
    setStatus("");
  };
  const fetchData = async () => {
    await getStudies(setCount);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <HeaderIcon toggle={toggle} image={dotsThree} />
        </View>
        <Greeting name={name} />
        <Search />
        <Text style={styles.quoteText}>
          "Portanto, se alguém está em Cristo, é nova criação. As coisas antigas
          já passaram; eis que surgiram coisas novas!"
        </Text>
        <Text style={styles.quoteFont}>2 Coríntios 5:17</Text>
        <Text style={styles.category}>Categorias</Text>
        {loading ? <Activity /> : <Categories count={count} />}
        <TalkToMe
          visible={visible}
          toggle={toggle}
          text={text}
          setText={setText}
          status={status}
          setStatus={setStatus}
        />
      </SafeAreaView>
    </>
  );
};
