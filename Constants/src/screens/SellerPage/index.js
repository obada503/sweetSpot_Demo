import { StyleSheet, Text,AsyncStorage ,View,Alert ,ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getSellerItems } from '../../../Constants/SellersItems'

import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.testDb') // returns Database object
import { COLORFONTS, SIZEFONTS } from "../../../Constants/theme";
import { useIsFocused } from "@react-navigation/native";

const SellerPage = ({ navigation }) => {

  const isFocused = useIsFocused();


  let deleteUser = (selleritems) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  items where id=?',
        [selleritems.id],
        (tx, results) => {
       //   console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User deleted successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.goBack(),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Please insert a valid User Id');
          }
        }
      );
    });
  };

  let deleteUser2 = (selleritems) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  items2 where id=?',
        [selleritems.id],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User deleted successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.goBack(),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Please insert a valid User Id');
          }
        }
      );
    });
  };



  function DisplaySellerItems({ item: selleritems }) {
   // console.log(selleritems.price);
    return (

      <TouchableOpacity style={{  
         flex: 1,
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '4%',
        marginHorizontal: 2}} onPress={() => {
        // navigation.navigate('Item', {selleritemsId: selleritems.id,},)
      }
      }>

        <Image style={{
          flex: 1,
          aspectRatio: 1,
          width: '40%',
          height: '40%',
          alignItems: 'center',
          justifyContent: 'center',  
          resizeMode: 'contain'
        }} source={selleritems.image} />

        <View style={styles.infoContainer}>
        <TouchableOpacity onPress={() =>{
          deleteUser(selleritems)

        }}
          style={{
            backgroundColor: COLORFONTS.secondary,
            padding: 10,
            width:150,
            marginHorizontal: 10,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text style={{
            color: COLORFONTS.white,
            fontWeight: 'bold',
            fontSize: 12,
            fontFamily: 'monospace'
          }}>Delete Items</Text>
        </TouchableOpacity>
        <Text style={{
            color: COLORFONTS.lightgrey,
            fontWeight: 'bold',
            fontSize: 20,
            textAlign:'center',
            justifyContent:'center',
            alignSelf:'center',
            fontFamily: 'monospace'
          }}>{selleritems.name}</Text>
        <Text style={{
            color: COLORFONTS.lightgrey,
            fontWeight: 'bold',
            fontSize: 15,
            justifyContent:'center',
            alignSelf:'center',
            fontFamily: 'monospace'
          }}>${selleritems.price}</Text>


        </View>

      </TouchableOpacity>
    )
  }

  function DisplaySellerItems2({ item: selleritems }) {
     return (
 
       <TouchableOpacity style={{  
          flex: 1,
         backgroundColor: 'white',
         borderRadius: 16,
         alignItems: 'center',
         justifyContent: 'center',
         marginTop: '4%',
         marginHorizontal: 2}} onPress={() => {
         // navigation.navigate('Item', {selleritemsId: selleritems.id,},)
       }
       }>
 
         <Image style={{
           flex: 1,
           aspectRatio: 1,
           width: '40%',
           height: '40%',
           alignItems: 'center',
           justifyContent: 'center',  
           resizeMode: 'contain'
         }} 
         source={{ uri: JSON.parse(selleritems.image) }} />
 
         <View style={styles.infoContainer}>
         <TouchableOpacity onPress={() =>{
           deleteUser2(selleritems)
 
         }}
           style={{
             backgroundColor: COLORFONTS.secondary,
             padding: 10,
             width:150,
             marginHorizontal: 10,
             borderRadius: 10,
             justifyContent: 'center',
             alignItems: 'center',
             marginVertical: 10,
           }}>
           <Text style={{
             color: COLORFONTS.white,
             fontWeight: 'bold',
             fontSize: 12,
             fontFamily: 'monospace'
           }}>Delete Items</Text>
         </TouchableOpacity>
         <Text style={{
             color: COLORFONTS.lightgrey,
             fontWeight: 'bold',
             fontSize: 20,
             textAlign:'center',
             justifyContent:'center',
             alignSelf:'center',
             fontFamily: 'monospace'
           }}>{selleritems.name}</Text>
         <Text style={{
             color: COLORFONTS.lightgrey,
             fontWeight: 'bold',
             fontSize: 15,
             justifyContent:'center',
             alignSelf:'center',
             fontFamily: 'monospace'
           }}>${selleritems.price}</Text>
 
 
         </View>
 
       </TouchableOpacity>
     )
   }

  let [flatListItems, setFlatListItems] = useState([]);
  let [flatListItems2, setFlatListItems2] = useState([]);

  const [uid, setUId] = useState();

  useEffect(() => {
    if(isFocused){ 

    AsyncStorage.getItem("userId").then(asyncStorageRes => {
     // console.log(JSON.parse(asyncStorageRes))
      setUId(JSON.parse(asyncStorageRes))
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM items where uid = ?',
          [JSON.parse(asyncStorageRes)],
          (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i) {
  
              temp.push(results.rows.item(i));
         //     console.log("temp.push", results.rows.item(i).image)
            }
            setFlatListItems(temp);
          }
        );
      });

      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM items2 where uid = ?',
          [JSON.parse(asyncStorageRes)],
          (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i) {
  
              temp.push(results.rows.item(i));
         //     console.log("temp.push", results.rows.item(i).image)
            }
            setFlatListItems2(temp);
          }
        );
      });

    });

 
  }
}, [isFocused])




  return (
    <ScrollView>
    <View>


<FlatList
        horizontal={false}
        style={styles.SellerInventory}
        contentContainerStyle={styles.SellerInventoryContainer}
        keyExtractor={(item) => item.id.toString()}
        data={flatListItems2}
        //renderDessert function declared above
        renderItem={DisplaySellerItems2}
      />

      <FlatList
        horizontal={false}
        style={styles.SellerInventory}
        contentContainerStyle={styles.SellerInventoryContainer}
        keyExtractor={(item) => item.id.toString()}
        data={flatListItems}
        //renderDessert function declared above
        renderItem={DisplaySellerItems}
      />
    </View>
    </ScrollView>
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
    paddingBottom: 15,
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
    flex: 1,
    aspectRatio: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
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