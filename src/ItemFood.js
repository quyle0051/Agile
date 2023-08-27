import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppContext } from './AppContext';
import { useNavigation } from '@react-navigation/native';
const imageSource = '-'
const ItemFood = (props) => {
  
  const { dulieu, navigation} = props;

  const clickDetail = () => {
    navigation.navigate("Details", {id: dulieu._id});
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={clickDetail}>
        <Image style={{width: 140, height: 100, borderRadius:5, margin:10, marginLeft:16}} source={{uri: dulieu.imageLink}}/>
        <Text style={styles.textName}>{dulieu.nameProduct}</Text>
        <Text style={styles.textName}>Giá: {dulieu.priceProduct}</Text>
      </TouchableOpacity>

    </View>
  )
}
export default ItemFood

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderWidth: 1,
    margin: 10,
    width: 175,
    height: 217,
    borderRadius:16
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