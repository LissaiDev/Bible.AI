import { StyleSheet } from "react-native";
export default StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontFamily: "Bold",
  },
  subtitle: {
    fontSize: 17,
    fontFamily: "Bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 17,
    fontFamily: "Regular",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  btn: {
    backgroundColor: "#1a1822",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 19,
    fontFamily: "Black",
  },
  bottomSheet:{
     height: "80%", backgroundColor: "#fff",
     borderTopRightRadius: 20,
     borderTopLeftRadius: 20,
     position: "relative",
  }
});
