import { Text, ScrollView, View, ActivityIndicator } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BottomSheet } from "react-native-btr";
import { GiftedChat } from "react-native-gifted-chat";
import { useState } from "react";
export default ({ data }) => {
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggle = () => {
    setEnabled(!enabled);
  };
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: "Olá, estou aqui para ajudar a responder suas dúvidas com base na Bíblia. Por favor, sinta-se à vontade para fazer suas perguntas e fornecer o contexto necessário, responderei citando partes da Bíblia para estudos e aprofundamento.",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "assistant",
      },
    },
  ]);
  const handleSend = async (newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8080/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: GiftedChat.append(messages, newMessages),
        }),
      });
      const json = await response.json();
      const toAppend = [
        {
          _id: json?.response?.id,
          text: json?.response?.content,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "assistant",
          },
        },
      ];
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, toAppend)
      );
      setLoading(false);
    } catch (e) {
      const toAppend = [
        {
          _id: new Date().toISOString(),
          text: "Ocorreu um erro, por favor tente novamente mais tarde",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "assistant",
          },
        },
      ];
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, toAppend)
      );
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.subtitle}>Categoria:</Text>
      <Text style={styles.content}>{data.category}</Text>
      <Text style={styles.subtitle}>Significado:</Text>
      <Text style={styles.content}>{data.nameMeaning}</Text>
      <Text style={styles.subtitle}>Introdução</Text>
      <Text style={styles.content}>{data.description}</Text>
      <Text style={styles.subtitle}>Desenvolvimento</Text>
      <Text style={styles.content}>{data.content}</Text>
      <Text style={styles.subtitle}>Conclusão</Text>
      <Text style={styles.content}>{data.conclusion}</Text>
      <Text style={styles.subtitle}>Recomendações</Text>
      <Text style={styles.content}>{data.recommendation}</Text>
      <TouchableOpacity style={styles.btn} onPress={toggle}>
        <Text style={styles.btnText}>Tirar dúvidas</Text>
      </TouchableOpacity>
      <BottomSheet
        visible={enabled}
        onDismiss={toggle}
        onBackdropPress={toggle}
        onBackButtonPress={toggle}
      >
        <View style={styles.bottomSheet}>
          <GiftedChat
            messages={messages}
            onSend={handleSend}
            user={{ _id: 1 }}
          />
          {loading ? (
            <View
              style={{
                position: "relative",
                flexDirection: "row",
                justifyContent: "flex-start",
                bottom: 90,
                paddingStart: 20,
              }}
            >
              <ActivityIndicator size="small" color="#b4b4b4" />
            </View>
          ) : null}
        </View>
      </BottomSheet>
    </ScrollView>
  );
};
