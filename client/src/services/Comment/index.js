import AsyncStorage from "@react-native-async-storage/async-storage";

export default async (message, setStatus) => {
  setStatus("SENDING");
  try {
    const name = await AsyncStorage.getItem("name");
    const response = await fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name:name, message: message }),
    });
    if(response.ok){
      const data = await response.json();
      console.log(data);
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
