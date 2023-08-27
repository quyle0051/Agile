import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList, ScrollView, ToastAndroid, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemFood from './ItemFood'
import ItemFood2 from './ItemFood2'
import AxiosIntance from './images/ultil/AxiosIntance'
import { SliderBox } from 'react-native-image-slider-box'
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';

const ThucDon = (props) => {
    const { navigation } = props;
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [searchText, setsearchText] = useState("");
    const timMenu = () => {
        navigation.navigate("SanPham");
    }
    

    useEffect(() => {
        const getProducts2 = async () => {
            const response1 = await AxiosIntance().get('/product/get-latest-products');
            
            console.log(response1.product);
            console.log(response1.product[0].imageLink);
            if (response1) {
                setData2(response1.product);
                setisLoading(false);
                

            } else {
                ToastAndroid.show("Get latest Failed!", ToastAndroid.SHORT);
            }
        }
        const getProducts1 = async () => {
            const response = await AxiosIntance().get('/product/get-bestSelling-products');
            if (response) {
                setData(response.product);
                setisLoading(false);


            } else {
                ToastAndroid.show("Get bestSelling Failed!", ToastAndroid.SHORT);
            }
        }
        getProducts2();
        getProducts1();

        return () => {

        }
    }, [])
    let timeOut = null;
    const countDownSearch = (searchText) => {
        if (timeOut) {
            clearTimeout(timeOut);
        }
        timeOut = setTimeout(() => {
            search(searchText);
        }, 3000);
    }
    const search = async (searchText) => {
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
            
            <View>
                <View style={styles.titlle}>
                    <Text style={styles.textTillte}>Menu</Text>
                </View>

                <View style={styles.viewFind}>
                    <Pressable onPress={timMenu}>
                        <Image style={{marginTop:3}} source={require('./images/find.png')} />
                    </Pressable>
                    <TextInput style={styles.textInput} placeholder='Tìm kiếm'
                    onChangeText={(text) => { countDownSearch(text) }}></TextInput>
                </View>
                
                <Image style={styles.imgaeFood} source={require('./images/food1.png')} />
                <View style={{ borderBottomWidth: 3, marginTop: 10 }}></View>

            </View>

            <ScrollView style={{ marginTop: 10 }}>
                <View>
                    <Text style={styles.textSelect}>BÁN CHẠY NHẤT</Text>

                    <FlatList
                        horizontal
                        data={data}
                        renderItem={({ item }) => <ItemFood dulieu={item} navigation={navigation}/>}
                        keyExtractor={item => item._id}
                    />
                </View>

                <View>
                    <Text style={styles.textSelect}>MỚI NHẤT</Text>

                    <FlatList
                    
                        horizontal
                        data={data2}
                        renderItem={({ item }) => <ItemFood2 dulieu1={item} navigation={navigation}/>}
                        keyExtractor={item => item._id}
                    />
            
                </View>
                

            </ScrollView>
        
        </View>

    )
}

export default ThucDon

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white'
        
        
    },
    titlle: {
        
        backgroundColor: '#D43131',
        height: 50,
    },
    textTillte: {
        color: 'white',
        fontSize: 30,
        marginTop: 3,
    
        fontWeight:'bold',
        textAlign:'center'
    },
    viewFind: {
        flexDirection: 'row',
        borderRadius: 15,
        height: 45,
        margin: 10,
        borderWidth: 2,
        paddingLeft: 8
    },
    textInput: {
        marginLeft: 20,
        width: 300
    },
    imgaeFood: {
        height: 200,
        width: 370,
        alignSelf: 'center'
    },
    textSelect: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft:10
    },

})


var foodList = [
    {
        "_id": "1",
        "name": "bít tết",
        "pirce": 200000,
        "images": "https://s3-alpha-sig.figma.com/img/20ac/39f2/788dce49a26c46f0783fbe810bcb066d?Expires=1685923200&Signature=OntGTMfA8Zg8P104HXshBctUhQG7mHxh8IUmdS~NEx06ATgrjcK53a1M0z8MMkF0RDXduelpJcghRSQuaCMaqAX5Lu7yVq11M-v5VzaQgT4~F0s06zdRUL9NVgiX9OaUHMNTan3e9kqCP~yBMBnD97nJwxpvL8F8NXwnGmQwgYlUg~iHUIIVTSOAGS~Y~Cs1lboSumwHhiwpJFEP14D44e01qtoV0HXVlqVwTOc5YAbGhrXkr7bseX1yT7vxCeGDhJAsYlsgB1bwws-yrpfQ7fr9iWiwl85ywUP4lNz3APGlphxkcgIWmgNxtnojTEMnJ6uyn2Ru4ERC82q1981fDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        "_id": "2",
        "name": "bít tết",
        "pirce": 200000,
        "images": "https://s3-alpha-sig.figma.com/img/20ac/39f2/788dce49a26c46f0783fbe810bcb066d?Expires=1685923200&Signature=OntGTMfA8Zg8P104HXshBctUhQG7mHxh8IUmdS~NEx06ATgrjcK53a1M0z8MMkF0RDXduelpJcghRSQuaCMaqAX5Lu7yVq11M-v5VzaQgT4~F0s06zdRUL9NVgiX9OaUHMNTan3e9kqCP~yBMBnD97nJwxpvL8F8NXwnGmQwgYlUg~iHUIIVTSOAGS~Y~Cs1lboSumwHhiwpJFEP14D44e01qtoV0HXVlqVwTOc5YAbGhrXkr7bseX1yT7vxCeGDhJAsYlsgB1bwws-yrpfQ7fr9iWiwl85ywUP4lNz3APGlphxkcgIWmgNxtnojTEMnJ6uyn2Ru4ERC82q1981fDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        "_id": "3",
        "name": "bít tết",
        "pirce": 200000,
        "images": "https://s3-alpha-sig.figma.com/img/20ac/39f2/788dce49a26c46f0783fbe810bcb066d?Expires=1685923200&Signature=OntGTMfA8Zg8P104HXshBctUhQG7mHxh8IUmdS~NEx06ATgrjcK53a1M0z8MMkF0RDXduelpJcghRSQuaCMaqAX5Lu7yVq11M-v5VzaQgT4~F0s06zdRUL9NVgiX9OaUHMNTan3e9kqCP~yBMBnD97nJwxpvL8F8NXwnGmQwgYlUg~iHUIIVTSOAGS~Y~Cs1lboSumwHhiwpJFEP14D44e01qtoV0HXVlqVwTOc5YAbGhrXkr7bseX1yT7vxCeGDhJAsYlsgB1bwws-yrpfQ7fr9iWiwl85ywUP4lNz3APGlphxkcgIWmgNxtnojTEMnJ6uyn2Ru4ERC82q1981fDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        "_id": "4",
        "name": "bít tết",
        "pirce": 200000,
        "images": "https://s3-alpha-sig.figma.com/img/20ac/39f2/788dce49a26c46f0783fbe810bcb066d?Expires=1685923200&Signature=OntGTMfA8Zg8P104HXshBctUhQG7mHxh8IUmdS~NEx06ATgrjcK53a1M0z8MMkF0RDXduelpJcghRSQuaCMaqAX5Lu7yVq11M-v5VzaQgT4~F0s06zdRUL9NVgiX9OaUHMNTan3e9kqCP~yBMBnD97nJwxpvL8F8NXwnGmQwgYlUg~iHUIIVTSOAGS~Y~Cs1lboSumwHhiwpJFEP14D44e01qtoV0HXVlqVwTOc5YAbGhrXkr7bseX1yT7vxCeGDhJAsYlsgB1bwws-yrpfQ7fr9iWiwl85ywUP4lNz3APGlphxkcgIWmgNxtnojTEMnJ6uyn2Ru4ERC82q1981fDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },

]