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
        HairlineItalic: require("../assets/fonts/lato/Lato-HairlineItalic.ttf"),
        Hairline: require("../assets/fonts/lato/Lato-Hairline.ttf"),
        BoldItalic: require("../assets/fonts/lato/Lato-BoldItalic.ttf"),
        Bold: require("../assets/fonts/lato/Lato-Bold.ttf"),
        BlackItalic: require("../assets/fonts/lato/Lato-BlackItalic.ttf"),
        Black: require("../assets/fonts/lato/Lato-Black.ttf"),
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