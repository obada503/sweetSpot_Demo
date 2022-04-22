import { StyleSheet, Text, View, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect }  from 'react'
import { getSellerItems } from '../../../Constants/SellersItems'


const SellerPage = ({navigation}) => {

  function DisplaySellerItems({ item: selleritems }){
    // console.log(dessert);
    // console.log(dessert.id);
    return(
        
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Item', {selleritemsId: selleritems.id,},)}>
           
           <Image style={styles.image} source={selleritems.image}/>
            
              <View style={styles.infoContainer}>
              
            
              </View>
            
          </TouchableOpacity>    
    )
}
const [selleritems, setSelleritems] = useState([]);

  useEffect(() => {
    //when user reloads app he will get all the desserts listed
      setSelleritems(getSellerItems())
  })

  return (
    <View>
        
        <FlatList 
          horizontal={true}
          style={styles.SellerInventory}
          contentContainerStyle={styles.SellerInventoryContainer}
          keyExtractor={(item) => item.id.toString()}
          data={selleritems}
          //renderDessert function declared above
          renderItem={DisplaySellerItems}
        />
    </View>
  )
}

export default SellerPage

const styles = StyleSheet.create({
  SellerInventory: {
  backgroundColor: "#eeeeee",
  },
  SellerInventoryContainer: {
  backgroundColor: "#eeeeee",
  paddingVertical: 8,
  paddingBottom: 85,
  marginHorizontal: 8,
  },
  imageContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  },
  card: {
  backgroundColor: 'white',
  borderRadius: 16,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '4%',

  },
  image: {
  flex:1,
  aspectRatio: 1,
  width: '100%',
  height:'100%',
  resizeMode:'contain'
  },
  infoContainer: {
  padding: 50
  },
  name: {
  fontSize: 22,
  fontWeight: 'bold',
  },
  price: {
  fontSize: 16,
  fontWeight: '600',
  marginBottom: 8,
  },
  description: {
  fontSize: 16,
  fontWeight: '400',
  color: '#787878',
  marginBottom: 16,
  },
});