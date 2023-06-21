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
        height: "50%",
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 10,
        paddingTop: 30,
        backgroundColor: "#fff"
    }
})