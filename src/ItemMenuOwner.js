import { View, Text } from 'react-native'
import React from 'react'

const ItemMenuOwner = (props) => {
    const {navigation} = props;
    const {dulieu3} = props;
    // console.log(dulieu3, 'cccccccccccccc');
  return (
    <View style={{marginTop:10}}>
      <Text>Món: {dulieu3.nameProduct}</Text>
      <Text>Số lượng: {dulieu3.quantityDishes}</Text>
    </View>
  )
}

export default ItemMenuOwner