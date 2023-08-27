import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ItemSanPham = (props) => {
    const {dulieu, navigation} = props;
  return (
    <View style={styles.container}>
            <Image style={{width:160, height:120, borderRadius:10}} source={{uri: dulieu.imageLink}}/>
            <View style={{ flexDirection: 'column', flex: 1.5, }}>            
                <Text style={styles.textInfo}>{dulieu.nameProduct}</Text>
                <Text style={styles.textInfo}>Giá: {dulieu.priceProduct}</Text>
            </View>
        </View>
  )
}

export default ItemSanPham
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        margin: 10,
        borderRadius:10,
        padding:10
    },
    images: {
        width: 147,
        height: 98,
        marginLeft: 14,
        marginTop: 15,
        flex: 1.5,
    },
    textInfo: {
        fontSize: 18,
        fontWeight: '400',
        color: 'black',
        marginTop: 15,
        marginLeft: 20,
    },
    textFunction: {
        color: '#D43131',
        fontSize: 16,
        marginRight: 10,
    },
    
    textInput: {
        width: "80%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 20,
    },
})