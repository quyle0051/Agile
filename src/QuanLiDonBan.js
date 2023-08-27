import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ItemDonBan from './ItemDonBan'

const QuanLiDonBan = () => {
  return (
    <View style={{ height: 630 }}>
      <FlatList
        data={foodList}
        renderItem={({ item }) => <ItemDonCocUser dulieu1={item} />}
        keyExtractor={item => item._id}
      />
    </View>
  )
}

export default QuanLiDonBan

const styles = StyleSheet.create({

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