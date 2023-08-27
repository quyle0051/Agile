import { StyleSheet, Text, View, Image, FlatList, Pressable,ToastAndroid } from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import ItemBill from './ItemBill'
import ItemOldBill from './ItemOldBill';
import { AppContext } from './AppContext';
import AxiosIntance from './images/ultil/AxiosIntance';

const HoaDonCu = (props) => {
    const { navigation, route } = props;
    const { params } = route;
    const ClickBack = () => {
        console.log("12313");
        navigation.goBack();
    }
    const [data, setdata] = useState([])
    const {infoUser}=useContext(AppContext);
    // const ClickBack = () => {
    //     console.log("12313");
    //     navigation.goBack();
    // }
    useEffect(() => {
        const getBills = async() =>
        {
          const response = await AxiosIntance().get("/bill/get-bill-by-user-payed?idUser="+infoUser._id);
          if(response.result) {
              setdata(response.bill);
          }
        }
         const interval = setInterval(() => {
             
            getBills();

         }, 2000);

         return () => clearInterval(interval)
      
    }, []);
    return (
        <View style={styles.container}>
            
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <ItemOldBill dulieu1={item} />}
                    keyExtractor={item => item._id}
                />
            </View>
        </View>
    )
}

export default HoaDonCu

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    titlle: {
        flexDirection: 'row',
        backgroundColor: '#D43131',
        height: 50,
    },
    vectorImage: {
        marginTop: 15,
        marginLeft: 20,
    },
    textTillte: {
        color: 'white',
        fontSize: 20,
        marginTop: 5,
        marginLeft: 30
    },
})

var billList = [
    {
        "_id": "1",
        "name": "Nguyễn Văn A",
        "order_time": "28/05/2023",
        "date": "28/05/2023",
        "stt": "28/05/2023",
        "menu": "bít tết, rượu rum",
        "cost": 1000000,
    },
    {
        "_id": "2",
        "name": "Nguyễn Văn B",
        "order_time": "28/05/2023",
        "date": "28/05/2023",
        "stt": "28/05/2023",
        "menu": "bít tết, rượu rum",
        "cost": 1000000,
    },
    {
        "_id": "3",
        "name": "Nguyễn Văn A",
        "order_time": "27/05/2023",
        "date": "29/05/2023",
        "stt": "28/05/2023",
        "menu": "bít tết, rượu rum",
        "cost": 1000000,
    },

]