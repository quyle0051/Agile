import { View, Text, Image, Pressable, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Axios from 'react-native-axios/lib/core/Axios';
import AxiosIntance from './images/ultil/AxiosIntance';
import { AppContext } from './AppContext';
import { useIsFocused } from '@react-navigation/native';

const ItemOrdered = (props) => {
    const { navigation, dulieu1, idRes} = props;
    const [nameProduct, setNameProduct] = useState("");
    const [price, setPrice] = useState("");
    const [imageLink, setimageLink] = useState("");
    const [quantiy, setquantity] = useState(dulieu1.quantityDishes);
    const [newQuantity, setNewQuantity] = useState(0);
    const back = () => {
        navigation.navigate('Phiếu đặt bàn');
    }
    
    const addQuantity = (sign) => {
        if(sign == "+"){
            if(quantiy<=4){
                setquantity(quantiy+1);
            }else {
                ToastAndroid.show('Số lượng đạt tối đa', ToastAndroid.SHORT);
                
            }
            
        }else if(sign == "-"){
            if(quantiy > 1){
                setquantity(quantiy-1);
            }else{
                ToastAndroid.show('Số lượng đạt tối thiểu', ToastAndroid.SHORT);
                
            }
        }
    }
    
    const updateMenu = async () => {
        const request = await AxiosIntance().post("/reservation/edit-dishes", {quantityDishes: quantiy, idReservation: idRes, idDishes:dulieu1.idProduct});
        back();
    }
    const deleteMenu = async () => {
        const request = await AxiosIntance().post("/reservation/delete-dishes?idReservation="+idRes+"&&idDishes="+dulieu1.idProduct);
        

    }
    
    return (
        <View style={{flexDirection:'row', borderWidth:1, borderColor:'rgba(0,0,0,0.3)', padding:10, margin:10, borderRadius:15, width:370}}>
            <View>
                <Image style={{ width: 140, height: 110, borderRadius:20 }} source={{ uri: dulieu1.imageLink }} />
            </View>
            <View>
                <View style={{marginLeft:20}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>{dulieu1.nameProduct} </Text>
                    <Text style={{fontSize:17, fontWeight:'bold'}}>Giá: {dulieu1.priceProduct}</Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:17, fontWeight:'bold'}}>Số lượng: {quantiy}</Text>
                    <TouchableOpacity onPress={() => addQuantity("+")} style={{width:35, height:25, backgroundColor:'crimson', marginLeft:20, borderRadius:6}}>
                        <Text style={{textAlign: 'center', paddingTop:2.3, fontWeight:'bold', color:'white'}}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => addQuantity("-")} style={{width:35, height:25, backgroundColor:'crimson', marginLeft:10, borderRadius:6}}>
                        <Text style={{textAlign: 'center', marginTop:-3, fontWeight:'bold', color:'white'}}>_</Text>
                    </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={{flexDirection:'row', marginTop:10, marginLeft:50}}>
                    <TouchableOpacity onPress={updateMenu}>
                        <Image style={{width:25, height:25}} source={require('./images/icEdit.jpg')}/>
                        
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteMenu}>
                        <Image style={{width:25, height:25}} source={require('./images/icDelete.png')}/>
                        
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}

export default ItemOrdered