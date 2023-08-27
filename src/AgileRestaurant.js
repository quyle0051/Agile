import { View, Text, Image, TextInput, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { AppContext } from './AppContext'
const AgileRestaurant = (props) => {
    const { navigation } = props;
    const dangKy = () => {
        navigation.navigate('SignUp');
    }
    const dangNhap = () => {
        navigation.navigate('AgileLogin');
    }
    return (
        <View style={{ backgroundColor: 'white' }}>
            
            <ImageBackground source={require('./images/logoR.png')} resizeMode='cover' style={{ height: 350, marginTop: 30 }}>
                <Text style={{ textAlign: 'center', color: '#f55252', marginTop: 280, fontSize: 35, fontWeight: 'bold', fontFamily: 'Klarna Text' }}>Restaurant</Text>
            </ImageBackground>

            <View style={{ marginTop: 50 }}>
                <Pressable onPress={dangNhap} style={{ backgroundColor: '#D43131', borderRadius: 23, height: 45, marginLeft: 20, marginRight: 20 }}>

                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingTop: 8 }}>Sign in</Text>
                </Pressable>
                <Pressable onPress={dangKy} style={{ borderWidth: 1, borderColor: '#D43131', borderRadius: 23, height: 45, marginLeft: 20, marginRight: 20, marginTop: 30 }}>

                    <Text style={{ color: '#D43131', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingTop: 8 }}>Sign up</Text>
                </Pressable>
            </View>
            <View style={{ height: 50, backgroundColor: '#D43131', marginTop: 120, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>

            </View>

        </View>
    )
}

export default AgileRestaurant