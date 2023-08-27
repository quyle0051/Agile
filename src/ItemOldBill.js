import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemOldBill = (props) => {
    const {dulieu1} = props;
    const stt = dulieu1.stt;
    console.log(stt);
    return (
        <View style={styles.container}>
           <Text style={styles.text}>Số bàn: {dulieu1.tablePosition}</Text>
            <Text style={styles.text}>Tên khách hàng: {dulieu1.fullName}</Text>
            <Text style={styles.text}>Ngày nhận bàn: {dulieu1.dateUse}</Text>
            <Text style={styles.text}>Ngày thanh toán: {dulieu1.datePayed}</Text>
            <Text style={styles.text}>Số tiền cần thanh toán: {dulieu1.totalPrice}</Text>
        </View>
    )
}

export default ItemOldBill

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