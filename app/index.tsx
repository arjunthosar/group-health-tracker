import { KeyboardAvoidingView, Text, Button, TouchableOpacity, View } from "react-native";
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./login";
import Signup from "./signup";
import styles from "./styling";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const StackMod = createNativeStackNavigator();

const stack = () => {               //TODO: Log In & Sign Up buttons, connect to cloud firestore
    return (
        <StackMod.Navigator screenOptions={{ headerShown: false }}>
            <StackMod.Screen name="Intro" component={Intro} />
            <StackMod.Screen name="Login" component={Login} />
            <StackMod.Screen name="Signup" component={Signup} />
        </StackMod.Navigator>
    );
}

const Intro = ({ navigation }: { navigation: NavigationProp<any> }) => { 
    return ( //change either alignItems or justifyContent to space-evenly
        <View style={styles.page}>
            <StatusBar style="auto" />
            <Text style={{fontSize: 30, marginTop: 200}}>Group Health Tracker</Text>
            <TouchableOpacity style={[styles.button, { marginTop: 200 }]} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

export default stack;