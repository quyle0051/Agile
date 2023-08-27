import { StyleSheet, Text, View, TextInput, Pressable, Image, Button, ToastAndroid, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AxiosIntance from './images/ultil/AxiosIntance';
import { AppContext } from './AppContext';

const SignUp = (props) => {
    const {navigation} = props;
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isShowPassword, setisShowPassword] = useState(true);

    

    const step2 = () => {
         navigation.navigate('SignUp2', {userName: userName, password: password, email: email});
    }
    
    return (
        <View style={styles.container}>
            
            <Text style={styles.titlle}>Sign up</Text>
            <Image style={styles.image} source={require('./images/signup1.png')}/>
            <View style={{marginTop: 20}}>
                <TextInput onChangeText={setUserName} style={styles.textInput} placeholder='Username'></TextInput>
                <View style={{flexDirection:'row'}}>
                <TextInput onChangeText={setPassword} secureTextEntry={isShowPassword} style={styles.textInput} placeholder='Password'></TextInput>
                <TouchableOpacity onPress={()=>{setisShowPassword(!isShowPassword)}}>
                    <Image  style={{marginLeft:-30,width:20,height:20, marginTop:43}} source={isShowPassword==false?require('./images/icon_view.png'):require('./images/icon_hidden.png')}/>
                    </TouchableOpacity>
                </View>
                
                
                <TextInput onChangeText={setEmail} style={styles.textInput} placeholder='Email'></TextInput>
            </View>

            <Pressable onPress={step2} style={styles.button}>
                <Text style={styles.text}>Next</Text>
            </Pressable>
        </View>
    )
}

export default SignUp

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
        backgroundColor: '#ECEAEA', 
        fontSize:20
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
