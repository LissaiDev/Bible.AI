import AsyncStorage from "@react-native-async-storage/async-storage";
let data;
export default async (id, setData) => {
  try {
    data = await AsyncStorage.getItem("posts");
    if (data) {
      data = JSON.parse(data);
      data = data.filter((item) => {
        return id === item._id;
      });
      if (data.length > 0) {
        setData(data[0]);
        return true;
      }
    }
    data = await fetch(`https://bibleai-kmwk.onrender.com/studies/${id}`);
    data = await data.json();
    setData(data);
    return true;
  } catch (e) {
    console.log(e);
    return false
  }
};
