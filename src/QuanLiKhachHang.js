import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemKhachHang from './ItemKhachHang'
import AxiosIntance from './images/ultil/AxiosIntance'

const QuanLiKhachHang = (props) => {
    const {navigation} = props;
    const [data, setData] = useState([]);


    useEffect(() => {
        const getlistUser = async () => {
            const response = await AxiosIntance().get("/user/get-all-user");
            setData(response.user)
        }
        getlistUser();
        return () => {
            
        }
    }, [])
    

    return (
        <View style={styles.container}>
            <View style={styles.titlle}>
                <Text style={styles.textTillte}>Quản lí khách hàng</Text>
            </View>
            <View style={{height: 650,}}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <ItemKhachHang dulieu={item} navigation={navigation}/>}
                    keyExtractor={item => item._id}
                />
            </View>
        </View>
    )
}
export default QuanLiKhachHang

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 3000,
    },
    titlle: {
        flexDirection: 'row',
        backgroundColor: '#D43131',
        height: 50,
    },
    textTillte: {
        color: 'white',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 120,
    },
})

var foodList = [
    {
        "_id": "1",
        "name": "Nguyễn Văn Tin",
        "email": "tindeptrai@gmail.com",
        "phone": "0358856753",
        "images": "https://s3-alpha-sig.figma.com/img/f84d/1ccc/6bdc9e652bc76dbfcb670ef808ae075c?Expires=1686528000&Signature=PMjtyJoH3DjIn0XrA6P19sR28s8gYRKRr7bj3LhyO64R24u~7i27vX4oCJK4K7b~WypaEWynTBcd4j8S~q6R-uBwlYu3PKDZJC~vs5ocQ2qLad9jrEeZclcF3GdMAEEgJY1fBG5UjPRYMafXCeR2cNqSCl4QKjfB-8pODPi7~tFCSDA-bkffViOGHc4ey0f~zzKjiskA5Cub5UPB32uyUcz8QWU8FDz1anffKVTkh8XWDnuqOSEDRpCugkTq5EjmUcicWBpVvEmbUa-9kkVIypmfkC2uAKToE9GpXEiSKobiMeHS1fDSHmS6Ia3GG90sV~ysHF7duDTQy3tT7f2Lzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        "_id": "2",
        "name": "Nguyễn Trung Thuận",
        "email": "thuandeptrai@gmail.com",
        "phone": "0583626457",
        "images": "https://s3-alpha-sig.figma.com/img/e085/327b/b4462a037a41d5dbd085fb244519887e?Expires=1686528000&Signature=UzIbLiHqrxaYPJxEux84ERFc034FQkM9~-CysEcuzUApICBsYHr1dZrYkwYNInz8Suh0ZseJwNPdHgoKWQqbn6KZ7WfKguS4XQvkNWSFNo~1VcpgsbNI5TaVYznOfrn8kFqJ5X14iYLIoBbtWqwCMauAFoMsbegzvE~lKzk3psF-vhUb8tFIgJjRyQeyD3ZVl4kCrPemeaJsfAJkmPvlQPMzNC3ZRwkMUpOtOakNPA3jBmoUbrvcWhZGN2x5xN2SS15v53D26OWjef-bFE-mVk6GFtSiA6Dcl-SO7oQhz~SgQlDTmlA~Jd4NduD3KCOyVN54sn9t41YlHnFCu9RLJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        "_id": "3",
        "name": "Nguyễn Hồng Lĩnh",
        "email": "linhdeptrai@gmail.com",
        "phone": "0824342044",
        "images": "https://s3-alpha-sig.figma.com/img/07af/3c7e/eb1a9a3cb65a98bfb500cf9bec6f8de2?Expires=1686528000&Signature=EYpbN~DJkpZy0P-whuW6huPqqtxmjtZwGL-yvh5jGJZGqiOrl7txMWYCX-2AtCNda70nrjm7M4vdH-3qYR-UIHbJ~PzsVY-F2X4J6LUZXSnsHO1M-Mo7Z3o35VWMiDc4Ge2vMLX66qjWYC~309GAB6ZCiRjE655zC-bfexRmofYIUEZb-4CWQ5uMYx-i7cAGK1MicSPCK7WtcUEgckDHr7thx8UoyF9yrlC4uJw4doxKdvVy8KL24S8vGamWyNuUeRx5h0PS~93QFTTgVuXcOIRK2vKdA3vOOf95Opp2EkXAPclUJ0HuJaSJtqHe-r5fDPeuqAqDoj-aol4XJ29EPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        "_id": "4",
        "name": "Nguyễn Trần Tiến Anh",
        "email": "tanhdeptrai@gmail.com",
        "phone": "0358856753",
        "images": "https://s3-alpha-sig.figma.com/img/a3d1/c476/a8b99cba3bb32de31b887538346eee5e?Expires=1686528000&Signature=pqAlc2NgrEm1eaEhGLq7FcP3IIxXeqYp8J4b5fMo4AiKKWKkwHRcNB5FfS5p~z3RGJaMGFBOPmKN5KmIRiZS-RGsoKM1eucnaugSjDXPoiV0Z5pkW2R7b9gD3WqefzXn~lmjZjk7CiYTZb2J6ZrJvCpBWv25Ph9xaLUSX2MH2PFZal~wKgAZjG9eU4RICi3ZojDCH2uDq8TGsv2DAfdjQo0anaIQHn8xmLD0a6NgfphVc5sYqUxMFOxB-zdLIymML2JSkdwb8cAl0~6dIkqMZBmOJmCUBsxRzK2dS7~HyGSk1CWfzFLb5vpR0rCcMnP1ftdEtmuTX27zz38EWNNrkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        "_id": "5",
        "name": "Nguyễn Minh Nhật",
        "email": "nhatdeptrai@gmail.com",
        "phone": "0374526216",
        "images": "https://s3-alpha-sig.figma.com/img/3b5b/c8ae/5512b0b37c8d081b28667fcf48d1c3ac?Expires=1686528000&Signature=LATUbpn7Zg3b3HcVTw9-3C-XnRSWEUNyfXY0xd2I-GpVVxMgKLmubec7Dqrlp20PGeMuLxa9bTH-I~rYEvnZfynxKXkbR01B-dTtzDiQkPF7sXjWQWpjM1Yr0wBxVChLmhPah8QBDEGTViz-6l6k4IVbyjqlb~-VlaTcLZ0tKXhMTvuMSJnaf24QZAUE9UE7BnXcNhBwZCR7K1Kemn9WlRi~IdPmz3ytZ2aBqq5i4d8vLh6jhOJKpkvtT2G56oONbE0yD9takiyOE1zy13mO-y5n7T7mvOa2yayxiihFm4KWAFIqKdL9gW564987LS-hfZTsNnm9Wmq~qYmoWbBICA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    }
]