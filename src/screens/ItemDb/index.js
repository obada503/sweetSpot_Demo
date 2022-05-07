import React, {useEffect, useState} from 'react';
import {Text, View, Image, ScrollView, SafeAreaView, Button} from "react-native";
import { getDessert } from '../../../Constants/Desserts';

import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.testDb') // returns Database object

import styles from './styles';

const ItemPage = ({route, navigation}) => {
  
  const {dessertId} = route.params;
  const {image} = route.params;
  const {price} = route.params;
  const {title} = route.params;
  const {dis} = route.params;

  console.log("dessertId",dessertId);

  const [dessert, setDesserts] = useState({});
  useEffect(() => {

    // db.transaction((tx) => {
    //     tx.executeSql(
    //       'SELECT * FROM images where id = ?',
    //       [dessertId],
    //       (tx, results) => {
    //         var len = results.rows.length;
    //         if (len > 0) {
    //            setDesserts(results.rows.item(0))
  
  
    //         } else {
    //           alert('No user found');
    //         }
    //       }
    //     );
    //   });

  })
return (
  <SafeAreaView>
      <ScrollView>
    <View style={styles.imageContainer}>
              <Image style={styles.image} 
          source={{uri:JSON.parse(image)}} />
          </View>
           <View style={styles.infoContainer}>
              <Text style={styles.name}>Tiltle: {title}</Text>
              <Text style={styles.price}>Price: $ {price}</Text>
              <Text style={styles.description}>Description:{dis}</Text>
          </View> 
      </ScrollView>
  </SafeAreaView>
)
}

export default ItemPage




