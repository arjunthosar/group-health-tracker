import { View, Text, Button } from "react-native";
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./login";

const StackMod = createNativeStackNavigator();

const stack = () => {
    return (
        <StackMod.Navigator>
            <StackMod.Screen name="Intro" component={Intro} />
            <StackMod.Screen name="Login" component={Login} />
        </StackMod.Navigator>
    );
}

const Intro = ({ navigation }: { navigation: NavigationProp<any> }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Group Health Tracker</Text>
            <Button title="Login" onPress={() => {navigation.navigate('Login')}} />
        </View>
    );
}

export default stack;