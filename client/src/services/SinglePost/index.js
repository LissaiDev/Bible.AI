import AsyncStorage from "@react-native-async-storage/async-storage";
let data;
export default async (id, setData, setLoading) => {
  try{
    data = await AsyncStorage.getItem("posts");
  if (data) {
    data = JSON.parse(data);
    data = data.filter((item) => {
      return id === item._id;
    });
    if (data.length > 0) {
      setData(data[0]);
      setLoading(false);
      return null;
    }
  }
  data = await fetch(`https://bibleai-kmwk.onrender.com/studies/${id}`);
  data = await data.json();
  setData(data);
  setLoading(false);
  }catch(e){
    console.log(e);
  }
};
