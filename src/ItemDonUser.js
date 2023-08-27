import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemDonUser = (props) => {
    const { dulieu1 } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Khách hành: {dulieu1.name}</Text>
            <Text style={styles.text}>Ngày đặt: {dulieu1.pirce}</Text>

        </View>
    )
}

export default ItemDonUser

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