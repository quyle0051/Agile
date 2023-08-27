import { StyleSheet, Text, View, Image, Pressable, TextInput, ToastAndroid } from 'react-native'
import React, {useState} from 'react'
import AxiosIntance from './images/ultil/AxiosIntance';
const SignUp2 = (props) => {
    const {navigation} = props;
    const {route} = props;
    const {params} = route;
    const [userFullName, setUserFullName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [color, setcolor] = useState("red");
    

    const isRegister = async () => {
        try {
            console.log(params.userName, params.password, params.email);
            const response = await AxiosIntance().post("/user/register", {userName: params.userName, password: params.password, email: params.email, phoneNumer: PhoneNumber, fullName: userFullName});
        console.log(response);
        if(response.result == true){
            ToastAndroid.show("Register Succesfully!", ToastAndroid.SHORT);
            navigation.navigate('AgileLogin');
        }else{
            ToastAndroid.show("Register Failed!", ToastAndroid.SHORT);
        }
        } catch (error) {
            console.log(error)
        }
        
    } 
  return (
    <View style={styles.container}>
            
    <Text style={styles.titlle}>Sign up</Text>
    <Image style={styles.image} source={require('./images/signup1.png')}/>
    <View style={{marginTop: 20}}>
        <TextInput onChangeText={setUserFullName} style={styles.textInput} placeholder='Full Name'></TextInput>
        <TextInput onChangeText={setPhoneNumber} style={styles.textInput} placeholder='Phone Number'></TextInput>
    </View>

    <Pressable  onPress={isRegister} style={styles.button}>
        <Text style={styles.text}>Next</Text>
    </Pressable>
</View>
  )
}

export default SignUp2

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        marginStart: 15,
        marginEnd: 15
    },
    titlle: {
        color: '#D43131',
        fontSize: 30,
        marginLeft: 140,
        fontWeight: 'bold',
        paddingTop: 50
    },
    textInput: {
        marginLeft: 20,
        height: 48,
        width: 320,
        borderWidth: 1,
        marginTop: 30,
        borderRadius: 15,
        paddingLeft: 50,
        backgroundColor: '#ECEAEA'
    },
    button:{
        backgroundColor:'#D43131',
        borderRadius:15,
        height: 45,
        marginLeft:20,
        marginRight:20,
        marginTop:30
    },
    text:{
        color:'white',
        fontSize:20,
        fontWeight: 'bold',
        textAlign:'center',
        paddingTop:10
    },
    image:{
        marginLeft: 10
    }
})