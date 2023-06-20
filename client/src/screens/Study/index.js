import { Text, ScrollView, View } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BottomSheet } from "react-native-btr";
import { GiftedChat } from "react-native-gifted-chat";
import { useState } from "react";
export default ({ data }) => {
  const [enabled, setEnabled] = useState(false);
  const toggle = () => {
    setEnabled(!enabled);
  };
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: "Olá, vou responder suas dúvidas com base na Bíblia!",
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
      const response = await fetch("https://bibleai-kmwk.onrender.com/chat", {
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
        </View>
      </BottomSheet>
    </ScrollView>
  );
};
