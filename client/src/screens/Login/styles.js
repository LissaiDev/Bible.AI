import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#1a1822",
        padding: 20
    },
    name:{
        color: "#fff",
        fontSize: 50,
        fontFamily: "Ubuntu",
    },
    greeting:{
        color: "#fff",
        fontSize: 40,
        marginTop: 20,
        fontFamily: "Ubuntu"
    },
    input:{
        color: "#fff",
        fontSize: 20,
        marginTop: 20,
        backgroundColor: "#1d1c23",
        height: 50,
        borderColor: "#46444e",
        borderWidth: 2,
        borderRadius: 12,
        paddingHorizontal: 20,
        fontFamily: "Ubuntu"
    },
    nameContainer:{
        flexDirection:"row",
        marginTop: 20,
        alignItems: "baseline",
        
    },
    nameCompletion:{
        color: "#fff",
        fontSize: 30,
        fontFamily:"LightItalic"
    },
    btn:{
        backgroundColor: "#fff",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: "100%",
    },
    btnText:{
        color: "#1a1822",
        fontSize: 19,
        fontFamily: "Black",
    }
})