import AnimatedLottieView from "lottie-react-native"
import { correct } from "../../../assets/animations"

export default ()=>{
    return(
        <AnimatedLottieView 
            source={correct}
            autoPlay
            loop={false}
            resizeMode="cover"
            style={{
                width:50,
                height:50
            }}
        />
    )
}