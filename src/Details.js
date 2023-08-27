import { View, Text, StyleSheet, Image, FlatList, Button, Modal, Pressable, ToastAndroid, ImageBackground } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AxiosIntance from './images/ultil/AxiosIntance';
import { AppContext } from './AppContext';
import ItemMiniReservation from './ItemMiniReservation';
const Details = (props) => {
    const { navigation } = props;
    const { route } = props;
    const { params } = route;
    const [nameProduct, setNameProduct] = useState("");
    const [price, setPrice] = useState(0);
    const [details, setDetails] = useState("");
    const [image, imageLink] = useState("");
    const [idProduct, setidProduct] = useState("");
    const [dataReservation, setdataReservation] = useState({});
    const { infoUser } = useContext(AppContext);
    const [isModalVisible, setModalVisible] = useState(false);
    const [quantity, setquantity] = useState(1);
    const [dishes, setDishes] = useState({
        idDishes: '',
        nameDishes: '',
        quantityDishes: 0,
        priceDishes: 0,
        imageLinkDishes: '',
    });
    useEffect(() => {
        const getDetail = async () => {
            const response = await AxiosIntance().get("/product/get-by-id?id=" + params.id);
            if (response.result == true) {
                setidProduct(params.id)
                setNameProduct(response.product.nameProduct);
                setPrice(response.product.priceProduct);
                setDetails(response.product.detailProduct);
                imageLink(response.product.imageLink);

                // Them du lieu vao 

                setDishes((prevDishes) => ({
                    ...prevDishes,
                    idDishes: params.id,
                    nameDishes: response.product.nameProduct,
                    priceDishes: response.product.priceProduct,
                    imageLinkDishes: response.product.imageLink,
                    quantityDishes: quantity,
                }));

            } else {
                ToastAndroid.show("Get detail Failed!", ToastAndroid.SHORT);
            }
        };
        getDetail();


        return () => {
        }
    }, [nameProduct])
    const toggleModalVisibility = () => {
        setModalVisible(!isModalVisible);
        // set imagelink to empty string
    };
    useEffect(() => {
        const getListofReservation = async () => {
            const response = await AxiosIntance().get("/reservation/get-for-menu-newest?idUser=" + infoUser._id);
            if (response.result == true) {
                setdataReservation(response.data);
                //    Thểm dữ liệu vào object để chuyển object vào item

            } else {
                ToastAndroid.show("Get detail Failed!", ToastAndroid.SHORT);

            }
        };
        if (nameProduct) {
            setDishes((prevDishes) => ({
                ...prevDishes,
                idDishes: idProduct,
                nameDishes: nameProduct,
                priceDishes: price,
                imageLinkDishes: image,
                quantityDishes: quantity,
            }));
            console.log(dishes);
        }
        if (isModalVisible) {
            getListofReservation();


        }
        return () => {
        }
    }, [isModalVisible]);

    // const addNewDishes = async()=>{
    //     const response = await AxiosIntance().post("/reservation/get-for-menu-newest?idUser="+infoUser._id);

    // }

    return (
        <View>
            <ImageBackground style={{ height: 800, opacity: 1 }} source={require('./images/bgthucdon.jpg')}>
                <View style={{

                    backgroundColor: 'red',
                    height: 50
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        marginTop: 10,

                        textAlign: 'center'
                    }}>Chi tiết món ăn</Text>
                </View>
                <View style={{ marginTop: 50 }}>
                    <Image
                        style={{ width: 300, height: 200, borderRadius: 10, marginLeft: 47, marginTop: 20, opacity: 0.8 }}
                        source={{ uri: image }} />
                </View>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 40, marginTop: 20, fontWeight: 'bold' }}>{nameProduct}</Text>
                <Text style={{ color: 'white', marginLeft: 20, fontSize: 20, marginTop: 10, marginEnd: 20 }}>Giá: {price}</Text>
                <Text style={{ color: 'white', marginLeft: 20, fontSize: 20, marginTop: 10, }}>Thông tin món ăn: {details}</Text>
                <Pressable style={{ backgroundColor: 'red', borderRadius: 12, height: 45, marginLeft: 20, marginRight: 20, marginTop: 20 }} onPress={toggleModalVisibility}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingTop: 8 }}>Gọi món ngay</Text>
                </Pressable>
                <View style={styles.screen}>
                    <Modal animationType="slide"
                        transparent visible={isModalVisible}
                        presentationStyle="overFullScreen"
                        onDismiss={toggleModalVisibility}
                        onTouchEnd={toggleModalVisibility}>
                        <View style={styles.viewWrapper}>
                            <View style={styles.modalView}>
                                <View style={{ paddingTop: 20, paddingBottom: 10, height: 580, width: 300 }}>
                                    <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: 'black' }}>Các đơn đặt bàn</Text>
                                    <FlatList
                                        data={dataReservation}
                                        renderItem={({ item }) => <ItemMiniReservation dulieu={item} dishes={dishes} user={infoUser} />}
                                        keyExtractor={item => item._id}
                                    />
                                    <View style={{ marginRight: 10, marginTop: 5 }}>
                                        <Pressable onPress={toggleModalVisibility} style={{ backgroundColor: '#D43131', alignSelf: 'flex-end', height: 35, width: 80, borderRadius: 5, marginRight: 10 }}>
                                            <Text style={{ fontSize: 17, color: 'white', textAlign: 'center', paddingTop: 4, fontWeight: 'bold' }}>OK</Text>
                                        </Pressable>

                                    </View>
                                </View>

                                {/* Butttoonnnn */}
                            </View>
                        </View>
                    </Modal>
                </View>
            </ImageBackground>
        </View>

    )
}

export default Details
const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 300,
        marginLeft: 40,
        marginTop: 40,
    },
    modalView: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "11%",
        elevation: 5,
        // transform: [{ translateX: -(width * 0.4) },{ translateY: -90 }],
        height: 180,
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 7,
        height: 580,
    }, viewWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",

    }, screen: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },


});