import React, {useEffect, useState} from 'react';
import {Text, View, Image, ScrollView, SafeAreaView, Button} from "react-native";
import { getDessert } from '../../../Constants/Desserts';


import styles from './styles';

const ItemPage = ({route, navigation}) => {
  
  const {dessertId} = route.params;
  const [dessert, setDesserts] = useState({});

  useEffect(() => {
      setDesserts(getDessert(dessertId))
  })
  // console.log(dessertId);
  // console.log(dessert);
return (
  <SafeAreaView>
      <ScrollView>
          <View style={styles.imageContainer}>
              <Image style={styles.image} source={dessert.image} />
          </View>
          <View style={styles.infoContainer}>
              <Text style={styles.sellerName}>{dessert.sellerName}</Text>
              <Text style={styles.name}>{dessert.name}</Text>
              <Text style={styles.price}>$ {dessert.price}</Text>
              <Text style={styles.description}>{dessert.description}</Text>
          </View>
      </ScrollView>
  </SafeAreaView>
)
}

export default ItemPage




