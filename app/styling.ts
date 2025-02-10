import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button : {
        height: 50, width: 200, marginTop: 40, backgroundColor: '#c5dbda', alignItems: 'center', justifyContent: 'center', borderRadius: 20
    },
    buttonText : {
        fontSize: 20,
        fontWeight: 'bold'
    },
    page : {
        flex: 1, backgroundColor: '#c7ffcd'
    },
    input : {
        marginTop: 40,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'white',
        height: 50,
        width: 100
    }
})

export default styles;