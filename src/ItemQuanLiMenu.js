import { StyleSheet, Text, View, Image, Modal, TextInput, Dimensions, Button, Pressable, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import AxiosIntance from './images/ultil/AxiosIntance';
import { getListProduct } from './QuanLiMenu';

const ItemQuanLiMenu = (props) => {
    const { dulieu, getList } = props;
    const [data, setData] = useState("")
    const [nameProduct, setNameProduct] = useState("");
    const [price, setPrice] = useState("");
    const [idType, setidType] = useState("");
    const [detail, setDetail] = useState("");
    const [bestSelling, setBestSelling] = useState("");
    const [latest, setLatest] = useState("");
    const [imgProduct, setimgProduct] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);
    const [idTypeOld, setidTypeOld] = useState("");
    // This is to manage TextInput State
    const [inputValue, setInputValue] = useState("");
    useEffect(() => {
        const updateById = async () => {
            setNameProduct(dulieu.nameProduct);
            setPrice(dulieu.priceProduct);
            setidType(dulieu.idTypeProduct);
            setDetail(dulieu.detailProduct);
            setimgProduct(dulieu.imageLink)
        }
        updateById();
        return () => {
        }
    }, [])
    const toggleModalVisibility = () => {
        setModalVisible(!isModalVisible);
    };
    const updateById = async () => {
        
        const response = await AxiosIntance().post("/product/update-by-id?id=" + dulieu._id, { name: nameProduct, price: price, idType: idType, detail: detail });
        if (response.result == true) {
            ToastAndroid.show("Update thanh cong", ToastAndroid.SHORT);
            setModalVisible(true)
        } else {
            ToastAndroid.show("get response failed!", ToastAndroid.SHORT);
        }
    }
    const deleteById = async () => {
        
        const response = await AxiosIntance().post("/product/delete/" + dulieu._id);
        if (response.result == true) {
            ToastAndroid.show("Delete successfully", ToastAndroid.SHORT);
            console.log(getList);
        } else {
            ToastAndroid.show("Delete failed!", ToastAndroid.SHORT);
        }
    }
    // Create toggleModalVisibility function that will
    // Open and close modal upon button clicks.
    return (
        <View style={styles.container}>
            
            <Image style={{width:160, height:120, borderRadius:10}} source={{ uri: imgProduct }} />
            <View style={{ flexDirection: 'column', flex: 1.5 }}>
                <Text style={styles.textInfo}>{dulieu.nameProduct}</Text>
                <Text style={styles.textInfo}>Giá: {dulieu.priceProduct}</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-end', marginBottom: 5 }}>
                <Pressable onPress={deleteById}>
                    <Text style={styles.textFunction}>Xóa</Text>
                </Pressable>
                <Pressable onPress={toggleModalVisibility}>
                    <Text style={styles.textFunction}>Sửa</Text>
                </Pressable>
                <View style={styles.screen}>
                    <Modal animationType="slide"
                        transparent visible={isModalVisible}
                        presentationStyle="overFullScreen"
                        onDismiss={toggleModalVisibility}
                    >
                        <View style={styles.viewWrapper}>
                            <View style={styles.modalView}>
                                <TextInput placeholder="Name" style={styles.textInput} onChangeText={setNameProduct}>{nameProduct}</TextInput>

                                <TextInput placeholder="Price" style={styles.textInput} onChangeText={setPrice}>{price}</TextInput>

                                <TextInput placeholder="idType" style={styles.textInput} onChangeText={setidType}>{idType}</TextInput>

                                <TextInput placeholder="Details" style={styles.textInput} onChangeText={setDetail}>{detail}</TextInput>
                                {/** This button is responsible to close the modal */}
                                <View style={{ flexDirection: 'row', width: 300, justifyContent: 'flex-end', }}>
                                    <View style={{ marginRight: 10, flexDirection: 'row' }}>
                                        <Pressable onPress={updateById} style={{ backgroundColor: '#D43131', height: 35, width: 80, borderRadius: 5, marginRight: 10 }}>
                                            <Text style={{ fontSize: 17, color: 'white', textAlign: 'center', paddingTop: 4, fontWeight: 'bold' }}>EDIT</Text>
                                        </Pressable>
                                        <Pressable onPress={toggleModalVisibility} style={{ backgroundColor: '#D43131', height: 35, width: 80, borderRadius: 5, marginRight: 10 }}>
                                            <Text style={{ fontSize: 17, color: 'white', textAlign: 'center', paddingTop: 4, fontWeight: 'bold' }}>CANCEL</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>



        </View>


    )
}

export default ItemQuanLiMenu

const { width } = Dimensions.get("window");
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
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
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
        top: "50%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) },
        { translateY: -90 }],
        height: 180,
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 7,
        height: 350,
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