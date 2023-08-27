import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import QuanLiDonCocUser from './QuanLiDonCocUser';
import QuanLiDonUser from './QuanLiDonUser';
import DonHang from './DonHang';
import HoaDonCu from './HoaDonCu';

const HoadonTong = (props) => {
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
            <Tab1.Screen name="Hóa đơn đang chờ thanh toán" component={DonHang} />
            <Tab1.Screen name="Hóa đơn đã thanh toán" component={HoaDonCu} />
        </Tab1.Navigator>
    )
}

export default HoadonTong

const styles = StyleSheet.create({})