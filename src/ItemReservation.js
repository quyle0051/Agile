import { View, Text, TouchableOpacity, FlatList, Pressable, ToastAndroid } from 'react-native'
import React, {useEffect, useState} from 'react'
import ItemMiniReservation from './ItemMiniReservation';
import ItemMenuOwner from './ItemMenuOwner';
import AxiosIntance from './images/ultil/AxiosIntance';
import Axios from 'react-native-axios/lib/core/Axios';

const ItemReservation = (props) => {
    const {navigation} = props;
    const { dulieu } = props;
    const [dataMenu, setDataMenu] = useState([]);
    const [needPay, setNeedPay] = useState(0);
    const InHoadon =async ()=>{
        const response = await AxiosIntance().post('/bill/add-new-bill',{tablePosition:dulieu.tablePosition, fullName:dulieu.fullName, phoneNumber:dulieu.phoneNumber, dateUse:dulieu.dateUse,idUser:dulieu.idUser,totalPrice:needPay})
        console.log(dulieu._id);

        if(response.result)
        {
            const responseDelete= await AxiosIntance().post('/reservation/delete-reservation/'+dulieu._id);
            if(responseDelete)
            {
                ToastAndroid.show("In hoá đơn thành công",ToastAndroid.SHORT);
            }
        }
    }
    useEffect(() => {
        const getReservationByID = async () => {
            const response = await AxiosIntance().get("/reservation/get-by-idReservation?idReservation="+dulieu._id);
            setDataMenu(response.data.menuItemsSelected);
        }
        getReservationByID();

       if(dataMenu)
       {
        let allNeedPay = 0;
        for(let  i = 0; i < dataMenu.length; i++){
        
            allNeedPay += dataMenu[i].priceProduct;
        }
        setNeedPay(allNeedPay);
    }
    },[dataMenu])

    return (
        <View style={{padding:15, margin:15, borderRadius:15, borderWidth:1}}>
            
            <View >
                <Text style={{fontSize:18}}>Số bàn: {dulieu.tablePosition}</Text>
                <Text >Ngày sử dụng: {dulieu.dateUse}</Text>
            </View>
            <Text style={{fontSize:20, fontWeight:'400', color:'black'}}>Các món đã yêu cầu</Text>
            <FlatList
            
            data={dataMenu}
            renderItem={({ item }) => <ItemMenuOwner dulieu3={item} />}
            keyExtractor={item => item._id}
            />
            <View style={{flexDirection:'row'}}>
                <View style={{width:200}}>
                <Text style={{fontSize:18, marginTop:20}}>Tổng chi phí: {needPay} </Text>
                </View>
                
                <Pressable onPress={InHoadon} style={{width:120, height:40, borderRadius:5, backgroundColor:'#11adf5', marginTop:10, marginLeft:10}}>
                <Text style={{textAlign:'center', marginTop:5, fontSize:20}}>
                    In hoá đơn
                </Text>
            </Pressable>
            </View>
            
            
        </View>

    )
}

export default ItemReservation