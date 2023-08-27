import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const ItemKhachHang = (props) => {
    const { dulieu } = props;
    const { navigation } = props;
    const billOfKhachHang = () => {
        navigation.navigate('BillOfKhachHang', {idUser: dulieu._id});
        console.log(dulieu._id);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={billOfKhachHang}>
                {/* <Image style={styles.images} source={{ uri: dulieu.images }} /> */}
                <View style={{ flexDirection: 'column', flex: 1.5, marginTop: -15 }}>
                    <Text style={styles.textInfo}>Khách hàng: {dulieu.fullName}</Text>
                    <Text style={styles.textInfo}>Email: {dulieu.email}</Text>
                    <Text style={styles.textInfo}>Phone: {dulieu.phoneNumber}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}
export default ItemKhachHang

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        margin: 10,
        alignItems: 'center'
    },
    images: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    textInfo: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        marginTop: 15,
        marginLeft: 20,
    },
})