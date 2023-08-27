import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import ItemDonCocUser from './ItemDonCocUser'
import { useTheme } from '@react-navigation/native';
import axios from 'axios';
import AxiosIntance from './images/ultil/AxiosIntance';
import { AppContext } from './AppContext';

const QuanLiDonCocUser = (props) => {
  const {navigation} = props;
  const {infoUser} = useContext(AppContext);
  const [tablePosition, setTablePosition] = useState("");
  const [dateUse, setDateUse] = useState("");
  const [dataReservation, setDataReservation] = useState("");
  
  useEffect(()=> {
    const getReservationByIdUserAndDateUse =  async () => {
      const response = await AxiosIntance().get("/reservation/get-for-menu-newest?idUser="+ infoUser._id);
      console.log(response);
      if(response.result == true){
        setDataReservation(response.data);
      }
    }
    getReservationByIdUserAndDateUse();

    
  }, [])
  
 
  return (
    <View style={{ height: 630 }}>
      <FlatList
        data={dataReservation}
        renderItem={({ item }) => <ItemDonCocUser dulieu1={item} navigation={navigation}/>}
        keyExtractor={item => item._id}
      />
    </View>
  )
}

export default QuanLiDonCocUser

const styles = StyleSheet.create({})

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