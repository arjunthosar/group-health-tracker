import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

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

export default function index() {
    return (
      <Tabs />
    );
}