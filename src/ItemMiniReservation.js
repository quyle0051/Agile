import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AxiosIntance from './images/ultil/AxiosIntance';

const ItemMiniReservation = (props) => {
    const { dulieu,dishes,user } = props;
    const addMenuToReservation = async ()=>{
        try {
            console.log(dulieu._id+dishes.idDishes+dishes.nameDishes+dishes.quantityDishes,dishes.priceDishes +user._id);
        const response = await AxiosIntance().post("/reservation/add-new-dishes",{idReservation:dulieu._id, idDishes:dishes.idDishes, nameDishes:dishes.nameDishes, quantityDishes:dishes.quantityDishes, imageLinkDishes:dishes.imageLinkDishes, priceDishes:dishes.priceDishes,idUser:user._id})
        if(response.result==true)
        {
            ToastAndroid.show("Thêm vào menu thành công",ToastAndroid.SHORT);
        }else{
            ToastAndroid.show("Ối giồi ôi lỗi rồi, fix bug thôi =))",ToastAndroid.SHORT);
        }
        } catch (error) {
            throw(error);
        }
    }
    return (
        <TouchableOpacity style={styles.container} onPress={addMenuToReservation}>
            <Text style={styles.text}>Số bàn: {dulieu.tablePosition}</Text>
            <Text style={styles.text}>Ngày đặt: {dulieu.dateUse}</Text>
        </TouchableOpacity>
    )
}

export default ItemMiniReservation

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderWidth: 1,
        margin: 10,
        padding: 15,
    },
    text: {
        fontSize: 18,
        fontWeight: '400',
        color: 'black',
        marginTop: 15,
    }
})