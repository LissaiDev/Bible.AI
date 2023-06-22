import { BottomSheet } from "react-native-btr";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";
import styles from "../../screens/Home/styles";
import Comment from "../../services/Comment";
import Sucess from "../Sucess";
export default ({ visible, toggle, text, setText, status, setStatus }) => {
  return (
    <BottomSheet
      visible={visible}
      onClose={toggle}
      onBackButtonPress={toggle}
      onBackdropPress={toggle}
    >
      <ScrollView style={styles.informationContainer}>
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
            fontSize: 17,
            fontFamily: "Ubuntu",
            marginBottom: 15,
          }}
        >
          Apresento o aplicativo de estudos bíblicos, desenvolvido para ajudar
          cristãos em seus estudos da Bíblia. O aplicativo contém uma ampla
          variedade de estudos bíblicos sobre diversos temas e personagens,
          permitindo que os usuários aprofundem seu conhecimento sobre a Palavra
          de Deus. Além disso, o aplicativo conta com uma funcionalidade
          inovadora que permite aos usuários tirar dúvidas em tempo real usando
          inteligência artificial. Com isso, espero oferecer uma experiência de
          estudo bíblico mais enriquecedora e interativa para todos os usuários.
        </Text>
        <TextInput
          style={styles.talkToMe}
          placeholder="Fale comigo! Deixe sua opinião e sugestões."
          placeholderTextColor="#a1a1a1"
          numberOfLines={5}
          multiline
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <TouchableOpacity
          style={styles.btnTalkToMe}
          onPress={() => {
            text ? Comment(text, setStatus) : null;
          }}
        >
          <Text style={styles.btnText}>
            {status ? (
              status === "SENDING" ? (
                <ActivityIndicator size={"small"} color="#fff" />
              ) : status === "OK" ? (
                <Sucess />
              ) : (
                "ERRO"
              )
            ) : (
              "ENVIAR"
            )}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </BottomSheet>
  );
};
