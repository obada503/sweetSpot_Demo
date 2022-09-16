import { Text, View, ScrollView, AsyncStorage, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchbarMenu from '../../components/searchbarMenu.js';
import { getDessertName, getDesserts } from '../../../Constants/Desserts.js';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'
import { COLORFONTS, SIZEFONTS } from "../../../Constants/theme";
import { useIsFocused } from "@react-navigation/native";
import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.testDb') // returns Database object


const DessertPage = ({ navigation, dessert }) => {
  const isFocused = useIsFocused();

  //this function is used to display our desserts
  function DisplayDessert({ item: dessert }) {
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
      </View>
    )
  }
  function DisplayDessert1({ item: dessert }) {
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



        {!isEnabled &&
        <TouchableOpacity onPress={() => {
          insertImage(dessert)

        }}
          style={{
            backgroundColor: COLORFONTS.secondary,
            padding: 10,
            width: 100,
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
          }}>Add Items</Text>
        </TouchableOpacity>

        }
      </View>
    )
  }

  const insertImage = (dessert) => {

    console.log("Ud", userId)

    db.transaction(tx => {
      tx.executeSql('INSERT INTO items (uid, name, price, image) values (?,?,?,?)', [userId, dessert.name, dessert.price, dessert.image],
        (txObj, resultSet) => {
          console.log("Insert", resultSet)
          navigation.goBack();

        },
        (txObj, error) => console.log('Error', error))
    })
  }


  const insertImage2 = (dessert) => {


    db.transaction(tx => {
      tx.executeSql('INSERT INTO items2 (uid, name, price, image) values (?,?,?,?)', [userId, dessert.title, dessert.price, dessert.image],
        (txObj, resultSet) => {
          navigation.goBack();

        },
        (txObj, error) => console.log('Error', error))
    })
  }
  const [userId, setUserId] = useState();

  const [desserts, setDesserts] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);

  const [selleritem1, setSelleritem1] = useState([]);

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
          setSelleritem1(temp);
          // setLoading(false);

        }
      );
    });

  }


  useEffect(() => {
    //when user reloads app he will get all the desserts listed
    getImages()
    AsyncStorage.getItem("userId").then(asyncStorageRes => {
      setUserId(JSON.parse(asyncStorageRes));

    });
    if (isFocused) {
      AsyncStorage.getItem("isEnabled").then(asyncStorageRes => {
        //  console.log("rt",JSON.parse(asyncStorageRes))
        setIsEnabled(JSON.parse(asyncStorageRes))
      });
    }
    // when user seacrh it will stop the state update  
    if (!searching) {
      setDesserts(getDesserts())
      setFilterData(getDesserts())
      console.log("dfgh=========", filterData)

    }

    console.log("useEffect", "useEffect");

  }, [isFocused])

  // making a hook which shows the value if the user is searching or not, is false by default if no search is in progress
  const [data] = useState(getDessertName())
  const [filter, setFilter] = useState(data)
  const [searching, setisSearching] = useState(false)


  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 100,
          marginHorizontal: 10,
          backgroundColor: "#000",
        }}
      />
    );
  }
  //search method that filters record and update flat list
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the desserts and update FilteredDataSource
      const newData = desserts.filter(
        function (item) {
          // Applying filter for the inserted text in search bar
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          console.log("itemData", itemData.indexOf(textData) > -1);
          return itemData.indexOf(textData) > -1;

        }
      );
      // set state and update flatlist; newData is the searched data
      setisSearching(true)
      setFilterData(newData);
      console.log("new data", newData);

    } else {

      //if record not found in list we update list from our dessert list
      setisSearching(false)
      setDesserts(desserts);

    }
  };
  function DisplaySellerItems({ item: selleritem }) {
    //  console.log("img uri" ,selleritem.image);
    // console.log(dessert.id);
    return (
      <TouchableOpacity style={{
        backgroundColor: 'white',
        borderRadius: 13,
        alignItems: 'center',
        width: 200,
        justifyContent: 'center',

      }} onPress={() => {

        // navigation.navigate('Item', {selleritemID: selleritem.id,},

        navigation.navigate('ItemDb', {
          dessertId: selleritem.id,
          image: selleritem.image,
          title: selleritem.title,
          price: selleritem.price,
          dis: selleritem.discription
        },


        )
      }
      }
      >
        <Image style={{ height: 130, width: 130, marginVertical: 20, marginHorizontal: 20, marginBottom: 10 }}
          source={{ uri: JSON.parse(selleritem.image) }} />

        <Text style={{ color: '#000000', textAlign: 'center', marginHorizontal: 14, marginVertical: 5, alignSelf: 'center', fontWeight: 'bold' }}>{selleritem.title}</Text>
        <Text style={{ color: '#000000', textAlign: 'center', marginHorizontal: 14, marginVertical: 5, alignSelf: 'center', fontWeight: 'bold' }}>{selleritem.discription}</Text>
        <Text style={{ color: '#000000', textAlign: 'center', marginHorizontal: 14, marginVertical: 10, alignSelf: 'center' }}>$ {selleritem.price}</Text>

        {!isEnabled &&
        <TouchableOpacity onPress={() => {
          insertImage2(selleritem)

        }}
          style={{
            backgroundColor: COLORFONTS.secondary,
            padding: 10,
            width: 100,
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
          }}>Add Items</Text>
        </TouchableOpacity>

        }


      </TouchableOpacity>
    )
  }
  // here we call the searchFilterFunction on the change of the text, meaning if any letter is pressed by the user

  return (
    <View>

      <ScrollView>


        <View style={styles.searchBarContainer}>
          {/* displaying text in searchbar */}
          <AntDesign name="search1" size={20} color="red" />
          <TextInput style={{ marginLeft: 15 }}
            placeholder="Search Desserts, Appetizers, Sellers"
            onChangeText={searchFilterFunction} />

        </View>


        {/* displaying flatlist  */}

        <View style={{ marginTop: 10 }}>

          <Text style={{
            color: "#000000",
            fontWeight: 'bold',
            fontSize: 20,
            justifyContent: 'center',
            textAlign: 'center',
            alignSelf: 'center',
            fontFamily: 'monospace'
          }}>My Uploaded Images</Text>


          <FlatList
            horizontal={true}
            style={{ marginHorizontal: 10, marginBottom: 10 }}
            contentContainerStyle={{
              backgroundColor: "#eeeeee",
              paddingVertical: 8,
              paddingBottom: 45,
              marginHorizontal: 8,
            }}
            keyExtractor={(item) => item.id.toString()}
            data={selleritem1}
            ItemSeparatorComponent={FlatListItemSeparator}
            //renderDessert function declared above
            renderItem={DisplaySellerItems}
          />
        </View>


        <View>
          <Text style={{
            color: "#000000",
            fontWeight: 'bold',
            fontSize: 20,
            justifyContent: 'center',
            textAlign: 'center',
            alignSelf: 'center',
            fontFamily: 'monospace'
          }}>Defaut Images</Text>

          <FlatList

            style={styles.DessertPage}
            contentContainerStyle={[styles.DessertPageContainer]}
            numColumns={2}
            keyExtractor={(item) => item.id}
            data={filterData}
            //renderDessert function declared above
            renderItem={DisplayDessert1}
          />
        </View>




      </ScrollView>
    </View>

  )



}

export default DessertPage;

