import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import styles from "./styling";
import { Platform } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Login() { //TODO: connect to cloud firestore
    return (
        <KeyboardAwareScrollView style={styles.page}>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 30, marginTop: 200}}>Login</Text>
                <TextInput placeholder="Username" style={[styles.input, { marginTop: 150 }]}/>
                <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} />
            </View>
        </KeyboardAwareScrollView>
    );
} 