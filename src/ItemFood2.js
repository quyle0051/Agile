import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ItemFood2 = (props) => {
    const { dulieu1, navigation } = props;
    const clickDetail = () => {
        navigation.navigate("Details", { id: dulieu1._id });
    }
    return (
        <View style={{height:700}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={clickDetail}>
                    <Image style={{ width: 140, height: 100, borderRadius: 5, margin: 10, marginLeft: 16 }} source={{ uri: dulieu1.imageLink }} />
                    <Text style={styles.textName}>{dulieu1.nameProduct}</Text>
                    <Text style={styles.textName}>Giá: {dulieu1.priceProduct}</Text>
                </TouchableOpacity>

            </View>
        </View>


    )
}

export default ItemFood2

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderWidth: 1,
        margin: 10,
        width: 175,
        borderRadius: 16,

    },
    images: {
        width: 147,
        height: 98,
        marginLeft: 14,
        marginTop: 15,
    },
    textName: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '400',
        color: 'black',
        marginTop: 15,
    },
})