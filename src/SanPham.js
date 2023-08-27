import { View, Text, FlatList, StyleSheet, Pressable, TouchableOpacity, Image, TextInput, ToastAndroid, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import AxiosIntance from './images/ultil/AxiosIntance';
import ItemSanPham from './ItemSanPham';
const SanPham = (props) => {
    const { navigation } = props;
    const { dulieu } = props
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [searchText, setsearchText] = useState("");
    
    useEffect(() => {
        const getListProduct = async () => {
            const response = await AxiosIntance().get("/product/get-all");
            setData(response.product)
            console.log(response);
        }
        getListProduct();
        return () => {
        }
    }, [])
    
    
    const search = async () => {
        setisLoading(true);
        const response = await AxiosIntance().get("/product/search-by-name?name=" + searchText)
        if (response.result == true) {
            //lấy dữ liệu thành công
            setData(response.product)
            setisLoading(false);
        } else {
            ToastAndroid.show("Không tìm thấy nội dung tìm kiếm", ToastAndroid.SHORT)
        }
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./images/bgthucdon.jpg')}>
            <View style={styles.titlle}>
                <Text style={styles.textTillte}>Danh sách thực phẩm</Text>
            </View>
            <View style={styles.viewFind}>
                <Pressable onPress={search}>
                    <Image style={{ marginTop: 3, opacity:0.1 }} source={require('./images/find.png')} />
                </Pressable>
                <TextInput style={{
                    marginLeft: 20,
                    width: 300,
                    
                }} placeholder='Tìm kiếm'
                    onChangeText={setsearchText}></TextInput>
            </View>
            <View style={{ height: 630 }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <ItemSanPham dulieu={item} />}
                    keyExtractor={item => item._id}
                />
            </View>
            </ImageBackground>
        </View>
    )
}

export default SanPham
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 3000,
    },
    titlle: {
       
        backgroundColor: '#D43131',
        height: 50,
        
    },
    textTillte: {
        color: 'white',
        fontSize: 20,
        marginTop: 10,
        
        textAlign:'center'
    },
    viewFind: {
        flexDirection: 'row',
        borderRadius: 20,
        height: 45,
        margin: 10,
        borderWidth: 2,
        paddingLeft: 8,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        backgroundColor:'white'
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