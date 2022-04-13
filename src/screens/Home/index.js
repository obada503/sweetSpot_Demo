import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import Searchbar from '../../components/searchbar.js';
import { getDesserts } from '../../../Constants/Desserts.js';



const DessertPage = ({navigation}) => {

  function DisplayDessert({ item: dessert }){
    // console.log(dessert);
    // console.log(dessert.id);
    return(
        
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Item', {dessertId: dessert.id,},)}>
            <Image style={styles.image} source={dessert.image}/>
            
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{dessert.name}</Text>
                <Text style={styles.price}>$ {dessert.price}</Text>
              </View>
          </TouchableOpacity>

            
    )
}

   //this function is used to display our desserts
  //  function renderDessert({item: dessert}){
  //   return(

  //         <DisplayDessert
  //             //dessert item passed in with spread operator
  //             {...dessert}
  //         />
  //       )
  //   }

  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    //when user reloads app he will get all the desserts listed
      setDesserts(getDesserts())
  })



  return (

    <View>
        {/* Displaying searchbar component */}
        <Searchbar/> 
        
        <FlatList 
          style={styles.DessertPage}
          contentContainerStyle={styles.DessertPageContainer}
          keyExtractor={(item) => item.id.toString()}
          data={desserts}
          //renderDessert function declared above
          renderItem={DisplayDessert}
      />
    </View>
   
  )
}

export default DessertPage;

const styles = StyleSheet.create({
  DessertPage: {
    backgroundColor: "#eeeeee",
  },
  DessertPageContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    paddingBottom: 85,
    marginHorizontal: 8,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  backgroundColor: 'white'
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
  padding: 16
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