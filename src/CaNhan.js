import { Pressable, StyleSheet, Text, View, Image, SafeAreaView, Button, Modal, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { text } from 'stream/consumers'
import { AppContext } from './AppContext'

const CaNhan = (props) => {
    const { roleUser, setRoleUser } = useContext(AppContext);
    const { navigation, route } = props;
    const { params } = route;
    const { setisLogin } = useContext(AppContext);
    const { infoUser, setInfoUser } = useContext(AppContext);
    const [isShowPassword, setisShowPassword] = useState(true);
    const [isShowNewPass, setisShowNewPass] = useState(true);
    const [isShowConfirm, setisShowComfirm] = useState(true);
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirm, setConfirm] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);

    // This is to manage TextInput State
    const [inputValue, setInputValue] = useState("");

    // Create toggleModalVisibility function that will
    // Open and close modal upon button clicks.
    const toggleModalVisibility = () => {
        setModalVisible(!isModalVisible);
    };

    const ClickBill = () => {
        navigation.navigate('DonHang');
        console.log(infoUser, 'xxx');
    }
    const logOut = () => {
        setisLogin(false);
    }

    const clickBillKhach = () => {
        navigation.navigate('BillKhachHang');
    }

    return (
        <View style={styles.container}>
            <View style={styles.titlle}>
                <Image style={styles.image} source={require('./images/tindeptrai.jpg')} />
                <View style={styles.viewText}>
                    <Text style={styles.text}>{infoUser.fullName}</Text>
                    <Text style={styles.text}>{infoUser.email}</Text>
                </View>
            </View>

            <View>
                <Pressable style={styles.button} onPress={ClickBill}>
                    <Text style={styles.buttonText}>Hoá đơn</Text>
                </Pressable >
                <Pressable style={styles.button} onPress={clickBillKhach}>
                    <Text style={styles.buttonText}>Thông tin lịch đặt bàn</Text>
                </Pressable>
                {/* <Pressable style={styles.button} onPress={toggleModalVisibility}>
                    <Text style={styles.buttonText}>Đổi mật khẩu</Text>
                </Pressable> */}
                <Pressable style={styles.button} onPress={logOut}>
                    <Text style={styles.buttonText}>Đăng Xuất</Text>
                </Pressable>
            </View>

            <SafeAreaView style={styles.screen}>
                {/** This is our modal component containing textinput and a button */}
                <Modal animationType="slide"
                    transparent visible={isModalVisible}
                    presentationStyle="overFullScreen"
                    onDismiss={toggleModalVisibility}>
                    <View style={styles.viewWrapper}>
                        <View style={styles.modalView}>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Đổi mật khẩu</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput placeholder="Mật khẩu cũ" secureTextEntry={isShowPassword}
                                     style={styles.textInput}
                                    onChangeText={setOldPass} />
                                <TouchableOpacity onPress={() => { setisShowPassword(!isShowPassword) }}>
                                    <Image style={{ marginLeft: -30, width: 20, height: 20, marginTop: 15 }} source={isShowPassword == false ? require('./images/icon_view.png') : require('./images/icon_hidden.png')} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput placeholder="Mật khẩu mới" secureTextEntry={isShowNewPass}
                                     style={styles.textInput}
                                    onChangeText={setNewPass} />
                                <TouchableOpacity onPress={() => { setisShowNewPass(!isShowNewPass) }}>
                                    <Image style={{ marginLeft: -30, width: 20, height: 20, marginTop: 15 }} source={isShowNewPass == false ? require('./images/icon_view.png') : require('./images/icon_hidden.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput placeholder="Xác nhận mật khẩu" secureTextEntry={isShowConfirm}
                                     style={styles.textInput}
                                    onChangeText={setConfirm} />
                                <TouchableOpacity onPress={() => { setisShowComfirm(!isShowConfirm) }}>
                                    <Image style={{ marginLeft: -30, width: 20, height: 20, marginTop: 15 }} source={isShowConfirm == false ? require('./images/icon_view.png') : require('./images/icon_hidden.png')} />
                                </TouchableOpacity>
                            </View>
                            {/** This button is responsible to close the modal */}
                            <View style={{ flexDirection: 'row', }}>
                                <Button title="Hủy" onPress={toggleModalVisibility} />
                                <Button title="OK" onPress={toggleModalVisibility} />
                            </View>

                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </View>
    )
}

export default CaNhan


const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height:700
    },
    titlle: {
        flexDirection: 'row',
        backgroundColor: '#D43131',
        height: 140,
    },
    image: {
        marginTop: 20,
        marginLeft: 30,
        width: 100,
        height: 100,
        borderRadius: 50
    },
    viewText: {
        marginTop: 30,
        marginLeft: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginTop: 10
    },
    button: {
        borderRadius: 15,
        height: 45,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
        borderWidth: 1
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        marginTop: 5,
        paddingLeft: 20
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
        height: 250,
    },
    textInput: {
        width: "80%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
    },
})