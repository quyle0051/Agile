import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ItemOrdered from './ItemOrdered';
import AxiosIntance from './images/ultil/AxiosIntance';
import { AppContext } from './AppContext';

const Ordered = (props) => {
    const {navigation} = props;
    const { route } = props;
    const { params } = route;
    const [dataReservation, setDataReservation] = useState([]);
    const [Refresh, setRefresh] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);
    
    const handleItemSignal =()=>
    {
        setRefresh("");
    }
    const toggleModalVisibility = () => {
        setModalVisible(!isModalVisible);
        // set imagelink to empty string
    };
    const back = () => {
        
        navigation.navigate('Phiếu đặt bàn');
    }
    useEffect(() => {
        const getReservationByID = async () => {
            const response = await AxiosIntance().get("/reservation/get-by-idReservation?idReservation="+params.idReservation);
            
            if(response.result==true)
                setDataReservation(response.data);
                console.log(dataReservation);

        }
        const interval = setInterval(() => {
            getReservationByID();

        }, 2000);


        return () => clearInterval(interval)
    },[])
    return (
        <View>
            <View style={{height:50, backgroundColor:'red', flexDirection:'row'}}>
                <TouchableOpacity style={{marginTop:15, marginLeft:15}}>
                <Image source={require('./images/backArrow.png')}/>
                </TouchableOpacity>
                
                <Text style={{textAlign:'center', fontSize:30, fontWeight:'bold', marginLeft:40, paddingTop:5}}>
                    Thực Đơn Của Bạn
                </Text>
                
            </View>
            <FlatList
                        style={{marginTop:30}}
                      
                        data={dataReservation}
                        renderItem={({ item }) => <ItemOrdered  dulieu1={item} idRes={params.idReservation} navigation={navigation}/>}
                        keyExtractor={item => item._id}
                    />
            <View style={styles.screen}>
                    <Modal animationType="slide"
                        transparent visible={isModalVisible}
                        presentationStyle="overFullScreen"
                        onDismiss={toggleModalVisibility}
                        onTouchEnd={toggleModalVisibility}>
                        <View style={styles.viewWrapper}>
                            <View style={styles.modalView}>
                                <View style={{width: 300 }}>
                                    <View >
                                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'black', marginTop:40 }}>Bạn chưa lưu thay đổi</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'black'}}>Vẫn thoát?</Text>
                                    </View>
                                    
                                    <View style={{flexDirection:'row', marginTop:40, marginLeft:50}}>
                                    <Pressable onPress={toggleModalVisibility} style={{ backgroundColor: '#D43131', height: 35, width: 80, borderRadius: 5 }}>
                                        <Text style={{fontSize:15, fontWeight:'bold', color:'white', paddingTop:8, textAlign:'center'}}>
                                            CANCEL
                                        </Text>
                                    </Pressable>
                                    <Pressable style={{ backgroundColor: '#D43131', height: 35, width: 80, borderRadius: 5, marginLeft:40 }}>
                                        <Text style={{fontSize:15, fontWeight:'bold', color:'white', paddingTop:8, textAlign:'center'}}>
                                            OK
                                        </Text>
                                    </Pressable>
                                    </View>
                                    
    
                                </View>

                                {/* Butttoonnnn */}
                            </View>
                        </View>
                    </Modal>
                </View>
        </View>
    )
}

export default Ordered
const styles = StyleSheet.create({
    modalView: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "40%",
        elevation: 5,
        // transform: [{ translateX: -(width * 0.4) },{ translateY: -90 }],
        height: 180,
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 7,
        height: 200,
    }, viewWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",

    }, screen: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
})