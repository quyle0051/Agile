import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppContext } from './AppContext';
import AxiosIntance from './images/ultil/AxiosIntance';
import ItemReservation from './ItemReservation';
AppContext
const BillOfKhachHang = (props) => {
    const {navigation} = props;
    const {route} = props;
    const {params} = route;
    const [data, setData] = useState([]);

    useEffect(()=> {
        const getReservationByIdUserAndDateUse =  async () => {
          const response = await AxiosIntance().get("/reservation/get-for-menu-newest?idUser="+ params.idUser);
          console.log(response);
          if(response.result == true){
            setData(response.data);
          }
        }
        getReservationByIdUserAndDateUse();
        const interval = setInterval(() => {
          getReservationByIdUserAndDateUse();
  
      }, 2000);
  
  
      return () => clearInterval(interval)
      
        
      }, [])


  return (
    <View>
      <View style={{height:50, backgroundColor:'red'}}>
        <Text style={{textAlign:'center', marginTop:10, fontSize:20, fontWeight:'bold', color:'black'}}>Đơn của khách hàng này</Text>
      </View>
      <FlatList
      data={data}
      renderItem={({ item }) => <ItemReservation dulieu={item} />}
      keyExtractor={item => item._id}
      />
    </View>
  )
}

export default BillOfKhachHang