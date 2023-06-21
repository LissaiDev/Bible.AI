import { SplashScreen, Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
SplashScreen.preventAutoHideAsync();

const Layout = ()=>{
    const [fontsLoaded] = useFonts({
        Regular: require("../assets/fonts/lato/Lato-Regular.ttf"),
        LightItalic: require("../assets/fonts/lato/Lato-LightItalic.ttf"),
        Light: require("../assets/fonts/lato/Lato-Light.ttf"),
        Italic: require("../assets/fonts/lato/Lato-Italic.ttf"),
        Bold: require("../assets/fonts/lato/Lato-Bold.ttf"),
        Ubuntu: require("../assets/fonts/ubuntu-cdnfonts/Ubuntu-R.ttf"),
    })

    const onLayoutRootView = useCallback(async ()=>{
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    },[fontsLoaded])

    if(!fontsLoaded) return null
    return <Stack screenOptions={{headerShown: false}} onLayout = {onLayoutRootView}/>;
}
export default Layout;