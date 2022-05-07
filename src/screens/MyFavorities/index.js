import { Text, View, AsyncStorage, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchbarMenu from '../../components/searchbarMenu.js';
import { getDessertName, getDesserts } from '../../../Constants/Desserts.js';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'
import { COLORFONTS, SIZEFONTS } from "../../../Constants/theme";
import { useIsFocused } from "@react-navigation/native";
import * as SQLite from 'expo-sqlite'
import { ScrollView } from 'react-native-gesture-handler';
const db = SQLite.openDatabase('db.testDb') // returns Database object


const AllItems = ({ navigation, dessert }) => {
  const isFocused = useIsFocused();


  function DisplayDessert1({ item: dessert }) {
    // good way to test if the function calls
    console.log("DisplayDessert", "call");

    return (

      <View style={styles.card}>
        <TouchableOpacity style={styles.card} onPress={() => {
          navigation.navigate('Item', {
            dessertId: dessert.id,

          });

        }
        }>
          <Image style={styles.image} source={dessert.image} />

          <View style={styles.infoContainer}>
            <Text style={styles.name}>{dessert.name}</Text>
            <Text style={styles.price}>$ {dessert.price}</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => {
          insertFavourite(dessert)

        }}
          style={{
            backgroundColor: COLORFONTS.secondary,
            padding: 10,
            width: 145,
            marginHorizontal: 10,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text style={{
            color: COLORFONTS.white,
            fontWeight: 'bold',
            fontSize: 14,
            fontFamily: 'monospace'
          }}>Add Favourite</Text>
        </TouchableOpacity>


      </View>
    )
  }

  function DisplayDessert2({ item: dessert }) {
    return (
      <View style={styles.card}>
        <TouchableOpacity style={styles.card} 
        >
          <Image style={styles.image}
          source={{ uri: JSON.parse(dessert.image) }} />

          <View style={styles.infoContainer}>
            <Text style={styles.name}>{dessert.title}</Text>
            <Text style={styles.price}>$ {dessert.price}</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => {
         insertFavourite2(dessert)

        }}
          style={{
            backgroundColor: COLORFONTS.secondary,
            padding: 10,
            width: 145,
            marginHorizontal: 10,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text style={{
            color: COLORFONTS.white,
            fontWeight: 'bold',
            fontSize: 14,
            fontFamily: 'monospace'
          }}>Add Favourite</Text>
        </TouchableOpacity>


      </View>
    )
  }
  const insertFavourite = (dessert) => {


    db.transaction(tx => {
      console.log("Ud", userId)
      tx.executeSql('INSERT INTO favourites (uid,name, price, image) values (?,?,?,?)', [userId, dessert.name, dessert.price, dessert.image],
        (txObj, resultSet) => {
          console.log("Insert", resultSet)
          navigation.goBack();

        },
        (txObj, error) => console.log('Error', error))
    })
  }

  const insertFavourite2 = (dessert) => {


    db.transaction(tx => {
      console.log("Ud", userId)
      tx.executeSql('INSERT INTO favourites2 (uid,name, price, image) values (?,?,?,?)', [userId, dessert.title, dessert.price, dessert.image],
        (txObj, resultSet) => {
          console.log("Insert", resultSet)
          navigation.goBack();

        },
        (txObj, error) => console.log('Error', error))
    })
  }
  const [desserts, setDesserts] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isEnabled, setIsEnabled] = useState(isEnabled);
  const [userId, setUserId] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages()
    //when user reloads app he will get all the desserts listed
    if (isFocused) {
      setDesserts(getDesserts())
      setFilterData(getDesserts())

      AsyncStorage.getItem("userId").then(asyncStorageRes => {
        setUserId(JSON.parse(asyncStorageRes));

      });
      AsyncStorage.getItem("key").then(asyncStorageRes => {
        console.log("new ", JSON.parse(asyncStorageRes))
        setIsEnabled(JSON.parse(asyncStorageRes))
      });
    }
    // when user seacrh it will stop the state update  

    console.log("useEffect", "useEffect");

  }, [isFocused])
  function getImages() {

    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM images',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {

            temp.push(results.rows.item(i));
          }
          setImages(temp);
          // setLoading(false);

        }
      );
    });

  }
  // making a hook which shows the value if the user is searching or not, is false by default if no search is in progress
  const [data] = useState(getDessertName())

  return (
    <ScrollView>

    <View>

      {/* displaying flatlist  */}



      <FlatList

        style={styles.DessertPage}
        contentContainerStyle={{ 
          backgroundColor: "#eeeeee",
          paddingVertical: 8,
          paddingBottom: 15,
          marginHorizontal: 8,
  }}        numColumns={2}
        keyExtractor={(item) => item.id}
        data={images}
        //renderDessert function declared above
        renderItem={DisplayDessert2}
      />

      <FlatList

        style={styles.DessertPage}
        contentContainerStyle={{ 
        backgroundColor: "#eeeeee",
        paddingVertical: 8,
        paddingBottom: 15,
        marginHorizontal: 8,
}}
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={filterData}
        //renderDessert function declared above
        renderItem={DisplayDessert1}
      />

    </View>
    </ScrollView>
  )

}

export default AllItems;

