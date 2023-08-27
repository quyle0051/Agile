import { StyleSheet, Text, View, Pressable, Image, ImageBackground, TouchableOpacity, DatePickerIOSBase, Dimensions, TextInput, ToastAndroid } from 'react-native'

import React, { useContext, useEffect, useState } from 'react'
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { Modal } from 'react-native'
import AxiosIntance from './images/ultil/AxiosIntance'
import { AppContext } from './AppContext'
// DateTimePickerAndroid.open(params: AndroidNativeProps)
//     DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])


const DatBan = (props) => {
    
    const [isShowTime, setisShowTime] = useState(false)
    const [talbePosition, settalePosition]  = useState("");
    const {infoUser, setInfoUser} = useContext(AppContext);
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [ value, setValue ] = useState(0);
    const [ date,setDate]= useState("14/06/2023");
    const [idUser, setidUser] = useState("");
    const [errorDate, setErrorDate] = useState("");
    const [errorDate1, setErrorDate1] = useState("");
    const [isDialog, setIsDialog] = useState(false);
    const toggleModal = () => {
        setIsDialog(!isDialog);
        // set imagelink to empty string

    };
    const getDate=(date1)=>{
      if(date1)
      {
        setValue((parseInt(date1.getTime())));
        console.log("infoUser._id"+infoUser._id);
        if(value>=(new Date(Date.now()).getTime() - (1440*60000)))
        {
            const moment = require('moment')
            const time = moment(value) // moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
            setDate(time.format("DD/MM/YYYY"));
            
            
        } 
        else{
           
            ToastAndroid.show("Ngày không hợp lệ! Chỉnh lại ngày hiện tại", ToastAndroid.SHORT);
            setDate("");
            const moment = require('moment')
            const time = moment(new Date(Date.now()).getTime()) // moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
            setDate(time.format("DD/MM/YYYY"));

        }

      }
      setisShowTime(false);
  
    }
    useEffect(() => {
        const getDateNow = () => {
            const moment = require('moment')
            const time = moment(new Date(Date.now()).getTime()) // moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
            setDate(time.format("DD/MM/YYYY"));

        }
        getDateNow();
        return () => {
            
        }
    }, [])
    
    const getPosition = (soban) => {
        settalePosition(soban);
        setFullName(infoUser.fullName);
        setPhoneNumber(infoUser.phoneNumber);
        setidUser(infoUser._id);
    }
    useEffect(()=>{
        const isOrdered = async() =>
{
    try {
        const response= await AxiosIntance().get("/reservation/find-by-dateAndtable?tablePosition="+talbePosition+"&&dateUse="+date)
    console.log(response);
    if(response.result)
    {
        setIsDialog(!isDialog);
    }
    
    } catch (error) {
        if (error.response && error.response.status === 400) {
            // Handle the 400 error specifically
            toggleModalVisibility();
          } else {
            // Handle other errors
            console.error('Error:', error.message);
          }
    }
}
        if(talbePosition)
        {
            isOrdered();
        }
        return ()=>{}
    },[talbePosition])

   
// 
// 
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModalVisibility = () => {
        setModalVisible(!isModalVisible);
        // set imagelink to empty string

    };

 
    const reservation = async () => {
        const request = await AxiosIntance().post("/reservation/add-new-reservation", {tablePosition: talbePosition,idUser:idUser, fullName: fullName, phoneNumber: phoneNumber, dateUse: date});
        if(request.result == true){
            console.log(request);
            ToastAndroid.show('Đặt bàn thành công!', ToastAndroid.SHORT);
            toggleModalVisibility();
            settalePosition("");
        }else{
            ToastAndroid.show('Đặt bàn không thành công!', ToastAndroid.SHORT);
        }
    }
    
    return (

        <View style={styles.container}>

<Modal animationType="slide"
                    transparent visible={isDialog}
                    presentationStyle="overFullScreen"
                    onDismiss={toggleModal}>
                    <View style={styles.viewWrapper}>
                        <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginTop:5}}>Đặt bàn {talbePosition}</Text>
                        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop:5}}>Đã có người đặt bàn {talbePosition}</Text>
                          
                            <View style={{ flexDirection: 'row', width: 300, justifyContent: 'flex-end', }}>
                                <View style={{ marginRight: 10, flexDirection: 'row', marginTop: 5 }}>
                                    <Pressable onPress={toggleModal} style={{ backgroundColor: '#D43131', height: 35, width: 80, borderRadius: 5, marginRight: 10 }}>
                                        <Text style={{ fontSize: 17, color: 'white', textAlign: 'center', paddingTop: 4, fontWeight: 'bold' }}>OK</Text>
                                    </Pressable>
                                   
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            <ImageBackground>
            <View style={{ height: 75 }}>
                <Pressable style={styles.date} onPress={()=>setisShowTime(true)}>
                
               {isShowTime && ( <RNDateTimePicker 
                // dateFormat="hour minute day month year" 
                display='spinner'
                is24Hour={true}
                mode="date"
                value={new Date()}
                onChange={(event,date)=>{getDate(date)}}
                timeZoneOffsetInMinutes={420}>
                </RNDateTimePicker>)}
            
                    <Text style={styles.text}>Ngày {date}</Text>
                    <Image style={styles.vectorImage} source={require('./images/Vector.png')} />
                </Pressable>
            </View>
            <ImageBackground style={{ height: 600, borderWidth: 1, opacity:1 }} source={require('./images/sodo.png')} resizeMode='cover'>
                <TouchableOpacity onPress={()=>{getPosition(1+"")}} style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: '#ECECEC', marginTop: 310, marginLeft: 173 }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 10, fontSize: 20 }}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{getPosition(2+"")}} style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: '#ECECEC', marginTop: -43, marginLeft: 263 }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 10, fontSize: 20 }}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{getPosition(3+"")}} style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: '#ECECEC', marginTop: 65, marginLeft: 263 }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 10, fontSize: 20 }}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{getPosition(4+"")}} style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: '#ECECEC', marginTop: -47, marginLeft: 173 }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 10, fontSize: 20 }}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{getPosition(5+"")}} style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: '#ECECEC', marginTop: -47, marginLeft: 83 }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 10, fontSize: 20 }}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{getPosition(6+"")}} style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: '#ECECEC', marginTop: 65, marginLeft: 83 }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 10, fontSize: 20 }}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{getPosition(8+"")}} style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: '#ECECEC', marginTop: -43, marginLeft: 263 }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 10, fontSize: 20 }}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{toggleModalVisibility(); getPosition(7+"")}} style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: '#ECECEC', marginTop: -47, marginLeft: 173 }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 10, fontSize: 20 }}>7</Text>
                </TouchableOpacity>
            </ImageBackground>
            </ImageBackground>

            
            <View style={styles.screen}>
                <Modal animationType="slide"
                    transparent visible={isModalVisible}
                    presentationStyle="overFullScreen"
                    onDismiss={toggleModalVisibility}>
                    <View style={styles.viewWrapper}>
                        <View style={styles.modalView}>
                            <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginTop:5}}>Đặt bàn {talbePosition}</Text>
                            
                            <TextInput placeholder="Họ tên" style={[styles.textInput, {marginTop:10}]} editable={false}>Clien name: {fullName}</TextInput>
                            <TextInput placeholder="Số điện thoại" style={styles.textInput} editable={false}>Phone number: {phoneNumber}</TextInput>
                            <TextInput placeholder="Lời nhắc" style={styles.textInput} ></TextInput>
                            
                            {/** This button is responsible to close the modal */}
                            <View style={{ flexDirection: 'row', width: 300, justifyContent: 'flex-end', }}>
                                <View style={{ marginRight: 10, flexDirection: 'row', marginTop: 5 }}>
                                    <Pressable onPress={reservation} style={{ backgroundColor: '#D43131', height: 35, width: 80, borderRadius: 5, marginRight: 10 }}>
                                        <Text style={{ fontSize: 17, color: 'white', textAlign: 'center', paddingTop: 4, fontWeight: 'bold' }}>ADD</Text>
                                    </Pressable>
                                    <Pressable onPress={toggleModalVisibility} style={{ backgroundColor: '#D43131', height: 35, width: 80, borderRadius: 5}}>
                                        <Text style={{ fontSize: 17, color: 'white', textAlign: 'center', paddingTop: 4, fontWeight: 'bold' }}>CANCEL</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default DatBan
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    date: {
        flexDirection: 'row',
        borderRadius: 15,
        height: 45,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 13,
        borderWidth: 1,
        backgroundColor: '#D43131'
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 95,
    },
    vectorImage: {
        marginLeft: 60,
        marginTop: 16.5,

    },
    mapImage: {
        height: 520,
        width: 380,
        alignSelf: 'center',
        marginTop: 30,
    },
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    viewWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",

    },
    modalView: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "35%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) },
        { translateY: -90 }],
        height: 180,
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 13,
        height: 350,
    },
    imageDialog: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,

    },
    textInput: {
        width: "80%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 20,
    }
})