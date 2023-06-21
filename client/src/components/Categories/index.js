import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../screens/Home/styles";
import { smile, angel, fire, tought } from "../../../assets/icons";
import {pope, star, bible } from "../../../assets/animations";
import { useRouter } from "expo-router";
import Categorie from "../Categorie";
export default ({ count }) => {
  const router = useRouter();
  return (
    // <View style={styles.infoContainer}>
    //   <TouchableOpacity
    //     style={styles.infoContainer}
    //     onPress={() => router.push("/Search/Personagem")}
    //   >
    //     <Text style={styles.info}>Personagens</Text>
    //     <Text style={styles.badge1}>{count.personagens}</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity
    //     style={styles.infoContainer}
    //     onPress={() => router.push("/Search/Milagre")}
    //   >
    //     <Text style={styles.info}>Milagres</Text>
    //     <Text style={{ ...styles.badge1, backgroundColor: "#817cef" }}>
    //       {count.milagres}
    //     </Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity
    //     style={styles.infoContainer}
    //     onPress={() => router.push("/Search/Tema")}
    //   >
    //     <Text style={styles.info}>Temas</Text>
    //     <Text
    //       style={{
    //         ...styles.badge1,
    //         backgroundColor: "#eaebf3",
    //         color: "black",
    //       }}
    //     >
    //       {count.tema}
    //     </Text>
    //   </TouchableOpacity>
    // </View>
    <View style={{flex: 1}}>
      <Categorie emoji={pope} title="Personagens" count={count.personagens} route={"Personagem"}/>
      <Categorie emoji={star} title="Milagres" count={count.milagres} route={"Milagre"} />
      <Categorie emoji={bible} title="Temas" count={count.tema} route={"Tema"}/>
    </View>
  );
};
