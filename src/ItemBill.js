import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AxiosIntance from './images/ultil/AxiosIntance';
import { ToastAndroid } from 'react-native';

const ItemBill = (props) => {
    const {dulieu1} = props;
    const ThanhToan = async()=>{
        const result = await AxiosIntance().post('/bill/thanhtoan?billId='+dulieu1._id);
        if(result.result)
        {
            ToastAndroid.show('Thanh toán hóa đơn thành công',ToastAndroid.SHORT);
        }else{
            ToastAndroid.show('Thanh toán hóa đơn thất bại',ToastAndroid.SHORT);

        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Số bàn: {dulieu1.tablePosition}</Text>
            <Text style={styles.text}>Tên khách hàng: {dulieu1.fullName}</Text>
            <Text style={styles.text}>Ngày nhận bàn: {dulieu1.dateUse}</Text>
            <Text style={styles.text}>Ngày thanh toán: {dulieu1.datePayed}</Text>
            <Text style={styles.text}>Số tiền cần thanh toán: {dulieu1.totalPrice}</Text>
            <Text style={{color: 'blue', marginLeft: 220, fontWeight:'bold',fontSize:20}} onPress={ThanhToan}>Thanh toán</Text>
        </View>
    )
}

export default ItemBill

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