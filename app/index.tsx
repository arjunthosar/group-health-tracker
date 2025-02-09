import { Button, Text, Touchable, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set, get } from "firebase/database";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { NavigationContainer } from "@react-navigation/native";

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
const page1Ref = ref(database, '/pages/page1num/');
const page2Ref = ref(database, '/pages/page2num/');
const page3Ref = ref(database, '/pages/page3num/');

const style = StyleSheet.create({
  icon: {
    width: 30,
    resizeMode: 'contain'
  },
});

// export default function Init() {
//   get(numRef).then((snapshot) => {
//     return (Index(snapshot.val()));
//   })
// }

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Water" component={Page1} options={{
        tabBarIcon: () => <Image source={require('../assets/images/water.png')} style={style.icon} />
       }} />
      <Tab.Screen name="Sleep" component={Page2} options={{
        tabBarIcon: () => <Image source={require('../assets/images/sleep.png')} style={style.icon} />
      }} />
      <Tab.Screen name="Screen Time" component={Page3} options={{
        tabBarIcon: () => <Image source={require('../assets/images/time.png')} style={style.icon} />
      }}/>
    </Tab.Navigator>
  );
}

function Page1() {
  const [x, setX] = useState(null); // Initialize x to null

  useEffect(() => {
    let isMounted = true; // Add a flag to prevent setting state after unmount

    const fetchData = async () => {
      try {
        const snapshot = await get(page1Ref);
        if (isMounted && snapshot.exists()) { // Check if component is still mounted and data exists
          setX(snapshot.val());
          console.log("(Page 1) Initial data fetched:", snapshot.val());
        } else if (isMounted) {
          console.log("(Page 1) No initial data available.");
        }
      } catch (error) {
        console.error("(Page 1) Error fetching initial data:", error);
      }
    };

    fetchData();

    // Set up real-time listener
    const unsubscribe = onValue(page1Ref, (snapshot) => {
      if (isMounted && snapshot.exists()) {
        setX(snapshot.val());
        console.log("(Page 1) Data updated:", snapshot.val());
      } else if (isMounted) {
        console.log("(Page 1) Data removed");
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
          console.error("(Page 1) Error setting data:", error);
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
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >

      <Text style={{ fontSize: 100 }}>{x}</Text>
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

function Page2() {
  const [x, setX] = useState(null);

  useEffect(() => {
    let isMounted = true; // Add a flag to prevent setting state after unmount

    const fetchData = async () => {
      try {
        const snapshot = await get(page2Ref);
        if (isMounted && snapshot.exists()) { // Check if component is still mounted and data exists
          setX(snapshot.val());
          console.log("(Page 2) Initial data fetched:", snapshot.val());
        } else if (isMounted) {
          console.log("(Page 2) No initial data available.");
        }
      } catch (error) {
        console.error("(Page 2) Error fetching initial data:", error);
      }
    };

    fetchData();

    // Set up real-time listener
    const unsubscribe = onValue(page2Ref, (snapshot) => {
      if (isMounted && snapshot.exists()) {
        setX(snapshot.val());
        console.log("(Page 2) Data updated:", snapshot.val());
      } else if (isMounted) {
        console.log("(Page 2) Data removed");
      }
    });

    return () => {
      isMounted = false; // Set flag to false on unmount
      unsubscribe(); // Unsubscribe from the listener
    };
  }, []);

  useEffect(() => {
    if (x !== null) { // Only update Firebase if x is not null
      set(page2Ref, x)
        .catch((error) => {
          console.error("(Page 2) Error setting data:", error);
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
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >

      <Text style={{ fontSize: 100 }}>{x}</Text>
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

function Page3() {
  const [x, setX] = useState(null);

  useEffect(() => {
    let isMounted = true; // Add a flag to prevent setting state after unmount

    const fetchData = async () => {
      try {
        const snapshot = await get(page3Ref);
        if (isMounted && snapshot.exists()) { // Check if component is still mounted and data exists
          setX(snapshot.val());
          console.log("(Page 3) Initial data fetched:", snapshot.val());
        } else if (isMounted) {
          console.log("(Page 3) No initial data available.");
        }
      } catch (error) {
        console.error("(Page 3) Error fetching initial data:", error);
      }
    };

    fetchData();

    // Set up real-time listener
    const unsubscribe = onValue(page3Ref, (snapshot) => {
      if (isMounted && snapshot.exists()) {
        setX(snapshot.val());
        console.log("(Page 3) Data updated:", snapshot.val());
      } else if (isMounted) {
        console.log("(Page 3) Data removed");
      }
    });

    return () => {
      isMounted = false; // Set flag to false on unmount
      unsubscribe(); // Unsubscribe from the listener
    };
  }, []);

  useEffect(() => {
    if (x !== null) { // Only update Firebase if x is not null
      set(page3Ref, x)
        .catch((error) => {
          console.error("(Page 3) Error setting data:", error);
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
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >

      <Text style={{ fontSize: 100 }}>{x}</Text>
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

export default function index() {
    return (
      <Tabs />
    );
}