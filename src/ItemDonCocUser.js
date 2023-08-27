import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ItemDonCocUser = (props) => {
    const {navigation} = props;
    const { dulieu1 } = props;
    const detailReservation = () => {
        
        navigation.navigate('Ordered', {idReservation: dulieu1._id});
    }
    return (
        <View>
            <TouchableOpacity onPress={detailReservation}>
            <View style={styles.container}>
                <Text style={styles.text}>Số bàn: {dulieu1.tablePosition}</Text>
                <Text style={styles.text}>Ngày sử dụng: {dulieu1.dateUse}</Text>
            </View>
            </TouchableOpacity>
            
        </View>

    )
}

export default ItemDonCocUser

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