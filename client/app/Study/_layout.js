import { Stack } from "expo-router"
export default ()=>{
    return <Stack screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: true,
        headerTitle: "Estudo",
        headerTitleAlign: "center",
        headerTitleStyle: {
            fontFamily: "Bold",
            fontSize: 19,
        },
        headerStyle: {
            backgroundColor: "#f2f2f2",
        }
    }} />
}