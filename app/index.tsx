import { Button, Text, View } from "react-native";
import { useEffect, useState } from "react";
import API_KEY from 'react-native-dotenv';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set, get } from "firebase/database"; //TODO: export app

console.log(process.env.EXPO_PUBLIC_API_KEY);

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: "group-health-tracker.firebaseapp.com",
  databaseURL: "https://group-health-tracker-default-rtdb.firebaseio.com",
  projectId: "group-health-tracker",
  storageBucket: "group-health-tracker.firebasestorage.app",
  messagingSenderId: "885900996493",
  appId: "1:885900996493:web:a39202857cf42ba79017c4",
  measurementId: "G-8Y73PQLNG2"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const numRef = ref(database, '/num');

// export default function Init() {
//   get(numRef).then((snapshot) => {
//     return (Index(snapshot.val()));
//   })
// }

export default function Index() {
  let initialX = null;
  useEffect(() => {
    get(numRef).then((snapshot) => {
      initialX = snapshot.val();
      console.log("1:" + initialX);
    })
  }, [initialX]);
  const [x, setX] = useState(initialX);

  useEffect(() => {
    set(numRef, x);
    onValue(numRef, (snapshot) => {
      const data = snapshot.val();
      setX(data);
      console.log("data read")
    });
  }, [x])

  if (x === null) {
    return <Text>Loading...</Text>;
  }

  console.log("2:" + x);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>{x}</Text>
      <Button
        title="Increment"
        onPress={() => {
          setX(x + 1);
        }}
      />
      <Button
        title = "Decrement"
        onPress={() => {
          setX(x - 1);
        }}
      />
    </View>
  );
}
