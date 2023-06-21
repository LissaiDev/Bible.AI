let data;
import AsyncStorage from "@react-native-async-storage/async-storage";
import countCategory from "../../utils/countCategory";
export const getStudies = async (setData, setCount) => {
  try {
    const response = await fetch("http://localhost:5000/studies");
    data = await response.json();
    await AsyncStorage.setItem("posts", JSON.stringify(data));
  } catch (e) {
    console.log(e.message);
  }finally{
    data = await AsyncStorage.getItem("posts");
    setCount(countCategory(JSON.parse(data)));
    setData(JSON.parse(data));
  }
};
