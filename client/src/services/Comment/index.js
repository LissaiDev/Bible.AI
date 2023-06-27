import AsyncStorage from "@react-native-async-storage/async-storage";

export default async (message, setStatus) => {
  setStatus("SENDING");
  try {
    const name = await AsyncStorage.getItem("name");
    const response = await fetch("https://bibleai-kmwk.onrender.com/comments", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name:name, message: message }),
    });
    if(response.ok){
      setStatus("OK");
      return true
    }else{
      setStatus("ERROR");
      return false
    }
  } catch (e) {
    console.log(e);
    setStatus("ERROR");
    return false;
  }
};
