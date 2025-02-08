import { Button, Text, View } from "react-native";
import { useEffect, useState } from "react";
import API_KEY from 'react-native-dotenv';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set, get } from "firebase/database"; //TODO: data being read a LOT, get function returning null in release apk
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 

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
const page1Ref = ref(database, '/num');

// export default function Init() {
//   get(numRef).then((snapshot) => {
//     return (Index(snapshot.val()));
//   })
// }

function Page1() {
  const [x, setX] = useState(null); // Initialize x to null

  useEffect(() => {
    let isMounted = true; // Add a flag to prevent setting state after unmount

    const fetchData = async () => {
      try {
        const snapshot = await get(page1Ref);
        if (isMounted && snapshot.exists()) { // Check if component is still mounted and data exists
          setX(snapshot.val());
          console.log("Initial data fetched:", snapshot.val());
        } else if (isMounted) {
          console.log("No initial data available.");
        }
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchData();

    // Set up real-time listener
    const unsubscribe = onValue(page1Ref, (snapshot) => {
      if (isMounted && snapshot.exists()) {
        setX(snapshot.val());
        console.log("Data updated:", snapshot.val());
      } else if (isMounted) {
        console.log("Data removed");
      }
    });

    return () => {
      isMounted = false; // Set flag to false on unmount
      unsubscribe(); // Unsubscribe from the listener
    };
  }, []);

  useEffect(() => {
    if (x !== null) { // Only update Firebase if x is not null
      set(page1Ref, x)
        .catch((error) => {
          console.error("Error setting data:", error);
        });
    }
  }, [x]);

  if (x === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >

      <Text style={{ fontSize: 20 }}>{x}</Text>
      <Button
        title="Increment"
        onPress={() => {
          setX(x + 1); //ignore error
        }}
      />
      <Button
        title = "Decrement"
        onPress={() => {
          setX(x - 1); //ignore error
        }}
      />
    </View>
  );
}

function Page2() {}

export default Page1;