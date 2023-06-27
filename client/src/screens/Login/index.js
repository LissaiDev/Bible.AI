import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ name, setName, control, setControl }) => {
  const [loading, setLoading] = useState(false);
  const handlePress = async () => {
    setLoading(true);
    try {
      await AsyncStorage.setItem("name", JSON.stringify(name));
      setLoading(false);
      setName({ firstName: "", lastName: "" });
      setControl(!control);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Estudos</Text>
          <Text style={styles.nameCompletion}>.Cristãos</Text>
        </View>
        <Text style={styles.greeting}>Olá, seja muito bem-vindo!</Text>
        <TextInput
          style={styles.input}
          placeholder="Primeiro nome"
          placeholderTextColor={"#7b7a83"}
          value={name.firstName}
          onChangeText={(value) => setName({ ...name, firstName: value })}
        />
        <TextInput
          style={styles.input}
          placeholder="Último nome"
          placeholderTextColor={"#7b7a83"}
          value={name.lastName}
          onChangeText={(value) => setName({ ...name, lastName: value })}
          onSubmitEditing={handlePress}
        />
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <Text style={styles.btnText}>
            {loading ? <ActivityIndicator /> : "Entrar"}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};
