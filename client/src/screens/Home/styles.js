import { StyleSheet } from "react-native"
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#151515",
        paddingHorizontal: 20
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    info:{
        fontSize: 16,
        color: "#fff",
        fontFamily: "Light",
        marginRight: 10
    },
    badge1:{
        fontSize: 16,
        color: "#fff",
        fontFamily: "Regular",
        backgroundColor: "#f56f46",
        width:22,
        textAlign: "center",
        height: 22,
        textAlignVertical: "center",
        borderRadius: 11
    },
    infoContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 10
    },
    category:{
        fontSize: 18,
        color: "#fff",
        fontFamily: "Regular",
        marginTop: 20,
        marginBottom: 18
    },
    informationContainer: {
        height: "90%",
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 10,
        paddingTop: 30,
        backgroundColor: "#fff"
    },
    talkToMe:{
        fontSize: 17,
        color: "#000",
        fontFamily: "Regular",
        marginTop: 20,
        borderColor: "#a1a1a1",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        textAlignVertical:"top"
    },
    btnTalkToMe:{
        backgroundColor: "#151515",
        padding: 15,
        borderRadius: 15,
        marginTop: 15
    },
    btnText:{
        textAlign: "center",
        fontFamily: "Light",
        fontSize: 17,
        color: "#fff",
        letterSpacing: 3,
        padding: 5
      }
})