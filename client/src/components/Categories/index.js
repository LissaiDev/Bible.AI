import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../screens/Home/styles";
import { useRouter } from "expo-router";
export default ({ count }) => {
  const router = useRouter();
  return (
    <View style={styles.infoContainer}>
      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => router.push("/Search/Personagem")}
      >
        <Text style={styles.info}>Personagens</Text>
        <Text style={styles.badge1}>{count.personagens}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => router.push("/Search/Milagre")}
      >
        <Text style={styles.info}>Milagres</Text>
        <Text style={{ ...styles.badge1, backgroundColor: "#817cef" }}>
          {count.milagres}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => router.push("/Search/Tema")}
      >
        <Text style={styles.info}>Temas</Text>
        <Text
          style={{
            ...styles.badge1,
            backgroundColor: "#eaebf3",
            color: "black",
          }}
        >
          {count.tema}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
