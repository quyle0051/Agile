import { Pressable, StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TextInput, Dimensions, Button, Image, ToastAndroid, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import ItemQuanLiMenu from './ItemQuanLiMenu'
import ItemFood2 from './ItemFood2'
import ItemFood from './ItemFood'
import { StatusBar } from "expo-status-bar";
import AxiosIntance from './images/ultil/AxiosIntance'
import { Dropdown } from 'react-native-element-dropdown'

// Get image from firebase
import { launchImageLibrary } from 'react-native-image-picker';
import { storage } from './FirebaseConfig/FirebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Animated, { useSharedValue, withTiming, Easing } from 'react-native-reanimated'

const QuanLiMenu = (props) => {
    const isStatusProduct = [
        { label: 'Bán chạy', value: true },
        { label: 'Không bán chạy', value: false },
    ];
    const isStatusProduct1 = [
        { label: 'Mới nhất', value: true },
        { label: 'Sản phẩm cũ', value: false },
    ];
    const { dulieu } = props;
    const [isModalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState("")
    const [nameProduct, setNameProduct] = useState("");
    const [price, setPrice] = useState("");
    const [idType, setidType] = useState("");
    const [detail, setDetail] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [bestSelling, setBestSelling] = useState("");
    const [latest, setLatest] = useState("");
    const [imgProduct, setimgProduct] = useState("data:image/jpeg;base64,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");
    const [idProduct, setidProduct] = useState("");
    const [valueProduct, setValueProduct] = useState(null);
    const [valueProduct1, setValueProduct1] = useState(null);
    // This is to manage TextInput State
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setisLoading] = useState(true);
    const [isDropdownOpen, setisDropdownOpen] = useState(false)
    // Animated
    const translateY = useSharedValue(0);
    const opacity = useSharedValue(1);

const handleDropdownOpen=()=> {
  translateY.value = withTiming(-40, {
    duration: 500,
    easing: Easing.inOut(Easing.ease),
  });
  opacity.value = withTiming(0, {
    duration: 500,
    easing: Easing.inOut(Easing.ease),
  });
}

const handleDropdownClose=()=> {
    console.log("CLOSEEEEE");
  translateY.value = withTiming(0, {
    duration: 500,
    easing: Easing.inOut(Easing.ease),
  });
  opacity.value = withTiming(1, {
    duration: 500,
    easing: Easing.inOut(Easing.ease),
  });
}
    const renderItem = item => {
        return (
            <View style={{ borderRadius: 5, padding: 10}}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === valueProduct && (
                    <View


                    />
                )}
            </View>
        );
    };
    const renderItem1 = item => {
        return (
            <View style={{ borderRadius: 5, padding: 10 }}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === valueProduct && (
                    <View


                    />
                )}
            </View>
        );
    };
    //get image from library

    const getImageFromLibrary = async () => {
        const result = await launchImageLibrary();
        setimgProduct(result.assets[0].uri);
        console.log(result.assets[0].uri + "Libraryyyyyyyyyyyyyyyyyyyyy");
    }


    // Upload image to firebase

    const Upload = async () => {
        const response = await fetch(imgProduct);
        const blob = await response.blob();
        const filename = Date.now() + ".jpg";
        const storageRef = ref(storage, filename);
        const snapshot = await uploadBytes(storageRef, blob);
        const url = await getDownloadURL(snapshot.ref);
        setImageLink(url);
    }
    useEffect(() => {
        const getListProduct = async () => {
            const response = await AxiosIntance().get('/product/get-all');
            if (response.result == true) {
                setData(response.product);
                setidProduct(response.product._id);
                
            }
        }
        if (imageLink) {
            addProduct();
        }

        const interval = setInterval(() => {
            getListProduct();

        }, 2000);


        return () => clearInterval(interval)

    }, [imageLink])

    const addProduct = async () => {
        
        try {
            if (imageLink) {
                const response1 = await AxiosIntance().post("/product/add-new", { name: nameProduct, price: price, idType: idType, detail: detail, bestSelling: valueProduct, latest: valueProduct1, imageLink: imageLink })
                if (response1.result)
                    ToastAndroid.show("Thêm thành công", ToastAndroid.SHORT);
                setImageLink("");
            }

        } catch (e) {
            console.log(e);
        }
    }

    const donework = () => {
        Upload();
        toggleModalVisibility();
    }
    // Create toggleModalVisibility function that will
    // Open and close modal upon button clicks.
    const toggleModalVisibility = () => {
        setModalVisible(!isModalVisible);
        // set imagelink to empty string
        setimgProduct("data:image/jpeg;base64,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");
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./images/bgthucdon.jpg')}>
                <View style={styles.titlle}>
                    <Text style={styles.textTillte}>Quản lí menu</Text>
                </View>
                <View style={{ height: 630 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <ItemQuanLiMenu dulieu={item} />}
                        keyExtractor={item => item._id}
                    />
                    <TouchableOpacity style={styles.touchableOpacity} onPress={toggleModalVisibility}>
                        <Text> +</Text>
                    </TouchableOpacity>
                </View>
                {/* trang xem dialog: https://www.geeksforgeeks.org/how-to-create-custom-dialog-box-with-text-input-react-native/ */}
                <View style={styles.screen}>
                    <Modal animationType="slide"
                        transparent visible={isModalVisible}
                        presentationStyle="overFullScreen"
                        onDismiss={toggleModalVisibility}>
                        <View style={styles.viewWrapper}>
                            <View style={styles.modalView}>

                                <TouchableOpacity style={{
                                    height: 100,
                                    width: 100,
                                    alignItems: 'center',
                                    backgroundColor: 'red',
                                    borderRadius: 50,
                                    marginBottom: 10,
                                    marginTop: 10
                                }}
                                    onPress={getImageFromLibrary}
                                >
                                    <Image
                                        style={{
                                            height: 100,
                                            width: 100,
                                            alignItems: 'center',
                                            borderRadius: 50
                                        }}
                                        source={{ uri: imgProduct }}
                                    ></Image>
                                </TouchableOpacity>
                                <TextInput placeholder="Tên sản phẩm" style={styles.textInput} onChangeText={setNameProduct}></TextInput>
                                <TextInput placeholder="Giá sản phẩm" style={styles.textInput} onChangeText={setPrice}></TextInput>
                                <TextInput placeholder="Loại sản phẩm" style={styles.textInput} onChangeText={setidType}></TextInput>
                                <TextInput placeholder="Thông tin chi tiết" style={styles.textInput} onChangeText={setDetail}></TextInput>
                                    <Animated.View style={{ transform: [{ translateY }]}}>
                                        <Dropdown style={{ width: 255, height: 40, borderRadius: 7, borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.2)', padding:10 }}
                                            // placeholder='Sản phẩm bán chạy'
                                            // data={isStatusProduct}
                                            // value={valueProduct}
                                            // valueField="value"
                                            // labelField="label"
                                            // onChange={item => {
                                            //     setValueProduct(item.value);
                                            //     console.log(valueProduct + "Bans chay");
                                            //     setIsDropdownOpen(false);
                                            //     handledropdown();

                                            // }}
                                            // renderItem={renderItem}

                                            placeholder='Sản phẩm bán chạy'
                                            data={isStatusProduct}
                                            value={valueProduct}
                                            valueField="value"
                                            labelField="label"
                                            open={isDropdownOpen}
                                            onOpen={() => {
                                                setisDropdownOpen(true);
                                                handleDropdownOpen();
                                            }}
                                            onClose={() => {
                                                setisDropdownOpen(false);
                                                handleDropdownClose();
                                            }}
                                            onChange={item => {
                                                setValueProduct(item.value);
                                                console.log(valueProduct + "Bans chay");
                                            }}
                                            renderItem={renderItem}
                                        />
                                    </Animated.View>
                                <TouchableOpacity onPress={() => { setIsDropdownOpen(true); handledropdown(); }}>
                                    <Animated.View style={{ transform: [{ translateY }] }}>
                                        <Dropdown style={{ width: 255, height: 40, borderRadius: 7, borderWidth: 1, marginTop: 20, borderColor: 'rgba(0, 0, 0, 0.2)', padding:10 }}
                                            placeholder='Sản phẩm mới nhất'
                                            data={isStatusProduct1}
                                            value={valueProduct1}
                                            valueField="value"
                                            labelField="label"
                                            onChange={item => {
                                                setValueProduct1(item.value);
                                                console.log(valueProduct1 + "Moi nhat");
                                               
                                            }}
                                            renderItem={renderItem1}

                                        />
                                    </Animated.View>

                                </TouchableOpacity>
                                {/** This button is responsible to close the modal */}
                                <View style={{ flexDirection: 'row', width: 300, justifyContent: 'flex-end', }}>
                                    <View style={{ marginRight: 10, flexDirection: 'row', marginTop: 5 }}>
                                        <Pressable onPress={donework} style={{ backgroundColor: '#D43131', height: 35, width: 80, borderRadius: 5, marginRight: 10 }}>
                                            <Text style={{ fontSize: 17, color: 'white', textAlign: 'center', paddingTop: 4, fontWeight: 'bold' }}>ADD</Text>
                                        </Pressable>
                                        <Pressable onPress={toggleModalVisibility} style={{ backgroundColor: '#D43131', height: 35, width: 80, borderRadius: 5 }}>
                                            <Text style={{ fontSize: 17, color: 'white', textAlign: 'center', paddingTop: 4, fontWeight: 'bold' }}>CANCEL</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ImageBackground>
        </View>
    )
}

export default QuanLiMenu

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 3000,
    },
    titlle: {

        backgroundColor: 'red',
        height: 50,
    },
    textTillte: {
        color: 'white',
        fontSize: 20,
        marginTop: 3,
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    button: {
        borderRadius: 180,
        height: 50,
        width: 50,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
        borderWidth: 1,
        backgroundColor: '#D43131',
        alignSelf: 'flex-end',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        marginTop: 10,
        alignSelf: 'center'
    },
    touchableOpacity: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 50,
        right: 10,
        height: 70,
        backgroundColor: '#D43131',
        borderRadius: 100,
    },
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    viewWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",

    },
    modalView: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "20%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) },
        { translateY: -90 }],
        height: 180,
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 7,
        height: 550,
    },
    imageDialog: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,

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

var foodList = [
    {
        "_id": "1",
        "name": "bít tết1",
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
    {
        "_id": "5",
        "name": "bít tết",
        "pirce": 200000,
        "images": "https://s3-alpha-sig.figma.com/img/20ac/39f2/788dce49a26c46f0783fbe810bcb066d?Expires=1685923200&Signature=OntGTMfA8Zg8P104HXshBctUhQG7mHxh8IUmdS~NEx06ATgrjcK53a1M0z8MMkF0RDXduelpJcghRSQuaCMaqAX5Lu7yVq11M-v5VzaQgT4~F0s06zdRUL9NVgiX9OaUHMNTan3e9kqCP~yBMBnD97nJwxpvL8F8NXwnGmQwgYlUg~iHUIIVTSOAGS~Y~Cs1lboSumwHhiwpJFEP14D44e01qtoV0HXVlqVwTOc5YAbGhrXkr7bseX1yT7vxCeGDhJAsYlsgB1bwws-yrpfQ7fr9iWiwl85ywUP4lNz3APGlphxkcgIWmgNxtnojTEMnJ6uyn2Ru4ERC82q1981fDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        "_id": "6",
        "name": "bít tết",
        "pirce": 200000,
        "images": "https://s3-alpha-sig.figma.com/img/20ac/39f2/788dce49a26c46f0783fbe810bcb066d?Expires=1685923200&Signature=OntGTMfA8Zg8P104HXshBctUhQG7mHxh8IUmdS~NEx06ATgrjcK53a1M0z8MMkF0RDXduelpJcghRSQuaCMaqAX5Lu7yVq11M-v5VzaQgT4~F0s06zdRUL9NVgiX9OaUHMNTan3e9kqCP~yBMBnD97nJwxpvL8F8NXwnGmQwgYlUg~iHUIIVTSOAGS~Y~Cs1lboSumwHhiwpJFEP14D44e01qtoV0HXVlqVwTOc5YAbGhrXkr7bseX1yT7vxCeGDhJAsYlsgB1bwws-yrpfQ7fr9iWiwl85ywUP4lNz3APGlphxkcgIWmgNxtnojTEMnJ6uyn2Ru4ERC82q1981fDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        "_id": "7",
        "name": "bít tết",
        "pirce": 200000,
        "images": "https://s3-alpha-sig.figma.com/img/20ac/39f2/788dce49a26c46f0783fbe810bcb066d?Expires=1685923200&Signature=OntGTMfA8Zg8P104HXshBctUhQG7mHxh8IUmdS~NEx06ATgrjcK53a1M0z8MMkF0RDXduelpJcghRSQuaCMaqAX5Lu7yVq11M-v5VzaQgT4~F0s06zdRUL9NVgiX9OaUHMNTan3e9kqCP~yBMBnD97nJwxpvL8F8NXwnGmQwgYlUg~iHUIIVTSOAGS~Y~Cs1lboSumwHhiwpJFEP14D44e01qtoV0HXVlqVwTOc5YAbGhrXkr7bseX1yT7vxCeGDhJAsYlsgB1bwws-yrpfQ7fr9iWiwl85ywUP4lNz3APGlphxkcgIWmgNxtnojTEMnJ6uyn2Ru4ERC82q1981fDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },

]