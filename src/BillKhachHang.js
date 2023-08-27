import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import QuanLiDonCocUser from './QuanLiDonCocUser';
import QuanLiDonUser from './QuanLiDonUser';

const BillKhachHang = (props) => {
    const {navigation, route} = props;
    const {params} = route;

    const ClickBack = () => {
        navigation.goBack();
    }
    const Tab1 = createMaterialTopTabNavigator();
    return (
        <Tab1.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 16, color: 'white', fontWeight: 'bold' },
                tabBarItemStyle: { flexDirection: 'row', flex: 1 },
                tabBarStyle: { backgroundColor: '#D43131' },
            }}>
            <Tab1.Screen name="Phiếu đặt bàn" component={QuanLiDonCocUser} />
            <Tab1.Screen name="Lịch sử thanh toán" component={QuanLiDonUser} />
        </Tab1.Navigator>
    )
}

export default BillKhachHang

const styles = StyleSheet.create({})