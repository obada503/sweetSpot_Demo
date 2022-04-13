import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, SafeAreaView, Button} from "react-native";
import { getDessert } from '../../../Constants/Desserts';



const ItemPage = ({route, navigation}) => {
  
  const {dessertId} = route.params;
  const [dessert, setDesserts] = useState({});

  useEffect(() => {
      setDesserts(getDessert(dessertId))
  })
  console.log(dessertId);
  console.log(dessert);
return (
  <SafeAreaView>
      <ScrollView>
          <View style={styles.imageContainer}>
              <Image style={styles.image} source={dessert.image} />
          </View>
          <View style={styles.infoContainer}>
              <Text style={styles.name}>{dessert.name}</Text>
              <Text style={styles.price}>$ {dessert.price}</Text>
              <Text style={styles.description}>{dessert.description}</Text>
          </View>
      </ScrollView>
  </SafeAreaView>
)
}

export default ItemPage


const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      backgroundColor: 'white'
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
  });


