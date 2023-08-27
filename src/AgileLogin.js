import { View, Text, Image, TextInput, Button, TouchableOpacity, ToastAndroid, Pressable } from 'react-native'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from './AppContext'
import { isEmail, isPassword, isPassword2, isPhone, isUseName, isName } from './validate';
import AxiosIntance from './images/ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';



const AgileLogin = (props) => {

    const { navigation } = props;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setisShowPassword] = useState(true);
    const { isLogin, setisLogin } = useContext(AppContext);
    const { infoUser, setInfoUser } = useContext(AppContext);
    const [errorPassword, seterrorPassword] = useState('');
    const [errorUserName, seterrorUserName] = useState('');
    const dangKy = () => {
        navigation.navigate('SignUp')
    }
    useEffect(() => {
        GoogleSignin.configure({ webClientId: '919006326813-3f7th8ro30svbmirg7qt7789le5q4u04.apps.googleusercontent.com' });
    }, [])

    //login gg
    const signInGG = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('Id: ', userInfo.user.id);
            console.log('Email: ', userInfo.user.email);
            console.log('Name: ', userInfo.user.name);
            console.log('FamilyName: ', userInfo.user.familyName);
            console.log('GivenName: ', userInfo.user.givenName);

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log(error, "x");
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log(error, "z");
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log(error, "a");
                // play services not available or outdated
            } else {
                console.log(error, "b");
                // some other error happened
            }
        }
    };


    const islogin = async () => {
        
        try {
            const response = await AxiosIntance().post("/user/login", { userName: username, password: password });
            
            if (response.user) {
                await AsyncStorage.setItem("token", response.token);
                
                console.log(response.user);
                setisLogin(true);
                setInfoUser(response.user);
                ToastAndroid.show("Login Succesfully!", ToastAndroid.SHORT);
            } else if(!response.user){
                ToastAndroid.show(response.message, ToastAndroid.SHORT);
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <View>
            <Text style={{ color: 'red', fontSize: 30, marginLeft: 140, fontWeight: 'bold', paddingTop: 50 }}>Sign in</Text>
            <View style={{ marginTop: 70 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <TextInput onChangeText={setUsername}
                        
                        placeholder='Enter your username'
                     style={{
                        marginLeft: 40,
                        height: 48,
                        width: 300,
                        borderBottomWidth: 1,
                        marginTop: 4,
                        borderColor: 'D43131',
                        fontSize:20
                    }}></TextInput>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>

                    <TextInput onChangeText={setPassword} 
                    placeholder='Enter your password'
                    style={{
                        marginLeft: 40,
                        height: 48,
                        width: 300,
                        borderBottomWidth: 1,
                        marginTop: 4,
                        borderColor: 'D43131',
                        outline: 'none',
                        fontSize:20

                    }}
                        secureTextEntry={isShowPassword}></TextInput>
                    <TouchableOpacity onPress={() => { setisShowPassword(!isShowPassword) }}>
                        <Image style={{ marginLeft: -20, width: 20, height: 20 }} source={isShowPassword == false ? require('./images/icon_view.png') : require('./images/icon_hidden.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 50 }}>


                <View style={{ marginTop: 50 }}>
                    <Pressable onPress={islogin} style={{ backgroundColor: '#D43131', borderRadius: 12, height: 45, marginLeft: 20, marginRight: 20, width: 345 }}>

                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingTop: 10 }}>Sign in</Text>
                    </Pressable>


                </View>
            </View>
            {/* <View style={{ marginTop: 20 }}>
                <Text style={{ color: 'red', textAlign: 'center' }}>or Login with</Text>
            </View> */}
            {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 20 }}>
                <TouchableOpacity onPress={() => { signInGG(); }} >
                    <Image style={{ margin: 10 }} source={require('./images/ggAgile.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{ margin: 10 }} source={require('./images/fbAgile.png')} />
                </TouchableOpacity>

            </View> */}
            <View style={{ marginTop: 50 }}>
                <Text onPress={dangKy} style={{ color: 'red', textAlign: 'center' }}>you don't have Account?</Text>
            </View>
        </View>
    )
}

export default AgileLogin