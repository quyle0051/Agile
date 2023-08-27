import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AgileLogin from './AgileLogin'
import AgileRestaurant from './AgileRestaurant'
import { AppContext } from './AppContext'
import DatBan from './DatBan';
import CaNhan from './CaNhan'
import DonHang from './DonHang'
import ThucDon from './ThucDon';
import SignUp from './SignUp';
import Details from './Details'
import QuanLiKhachHang from './QuanLiKhachHang'
import QuanLiMenu from './QuanLiMenu'
import ItemQuanLiMenu from './ItemQuanLiMenu'
import ItemKhachHang from './ItemKhachHang'
import MainFoodMenu from './MainFoodMenu'
import ItemSanPham from './ItemSanPham'
import SanPham from './SanPham'
import BillKhachHang from './BillKhachHang'
import SignUp2 from './SignUp2'
import Ordered from './Ordered'
import BillOfKhachHang from './BillOfKhachHang'
import HoadonTong from './HoaDonTong'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

//login, register => stack
const Users = () => {
  return (
    <Stack.Navigator initialRouteName='AgileRestaurant' screenOptions={{ headerShown: false }}>
      <Tab.Screen name='AgileRestaurant' component={AgileRestaurant} />
      <Tab.Screen name='AgileLogin' component={AgileLogin} />
      <Tab.Screen name='SignUp' component={SignUp} />
      <Tab.Screen name='SignUp2' component={SignUp2} />
    </Stack.Navigator>
  )
}


const CaNhanTab = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}>
      
      <Stack.Screen name="CaNhan" component={CaNhan} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="DonHang" component={HoadonTong} />
      <Stack.Screen name="BillKhachHang" component={BillKhachHang} />
    </Stack.Navigator>
  )
}

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'thucdon') {
            return <Image style={{ width: 50.4, height: 35}} source={require('./images/menu.png')} />
          } else if (route.name === 'datban') {
            return <Image source={require('./images/ban.png')} />
          } else if (route.name === 'canhan') {
            return <Image style={{ width: 50.4, height: 35 }} source={require('./images/canhan.png')} />
          }
        },
        tabBarActiveTintColor: '#D43131',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      
      <Tab.Screen name="thucdon" component={MainFoodMenu} options={{ title: "Menu" }} />
      <Tab.Screen name="datban" component={DatBan} options={{ title: "Table" }} />
      <Tab.Screen name="canhan" component={CaNhanTab} options={{ title: "Me" }} />
    </Tab.Navigator>
  )
}

const BillTab = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}>
      
      <Stack.Screen name="khachhang" component={QuanLiKhachHang} options={{ title: "Menu" }}/>
      <Stack.Screen name="BillOfKhachHang" component={BillOfKhachHang} options={{ title: "Đơn của khách hàng" }}/>
      
    </Stack.Navigator>
  )
}

const MainOwner = () =>{
  return( 
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'thucdon') {
              return <Image source={require('./images/menu.png')}/>
            } else if (route.name === 'billtab') {
              return <Image style={{ width: 50.4, height: 35 }} source={require('./images/canhan.png')}/>
            } 
          
          },
          tabBarActiveTintColor: '#D43131',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="thucdon" component={QuanLiMenu} options={{ title: "Menu" }} />
        <Tab.Screen name="billtab" component={BillTab} options={{ title: "Khach hang" }} />
        
      </Tab.Navigator>
  )
}
const MenuByRole = ()=>{
  const {infoUser}=useContext(AppContext);
  return(
    <>
    {
      infoUser.role==1? <MainOwner/>:<Main/>
    }
    </>
  );
}
const AppNavigator = () => {
  const { isLogin } = useContext(AppContext);

  return (
    <>
      {
        isLogin == false ? <Users /> : <MenuByRole/>
      }
    </>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({});