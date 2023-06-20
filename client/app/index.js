import { useEffect, useState } from "react";
import Activity from "../src/components/Activity";
import Home from "../src/screens/Home";
import Login from "../src/screens/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Page() {
  const [data, setData] = useState("starting");
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [control, setControl]= useState(false)
  const verify = async () => {
    try {
      const value = await AsyncStorage.getItem("name");
      if(value){
        setData(JSON.parse(value))
      }else{
        setData(value)
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    verify();
  },[control])
  return (
    <>
      {data === "starting" ? (
        <Activity />
      ) : data ? (
        <Home name={data.firstName}/>
      ) : (
        <Login name={name} setName={setName} control={control} setControl={setControl} />
      )}
    </>
  );
}
