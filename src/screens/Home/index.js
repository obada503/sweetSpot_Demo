import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchbarMenu from '../../components/searchbarMenu.js';
import { getDessertName, getDesserts } from '../../../Constants/Desserts.js';
import { AntDesign } from '@expo/vector-icons';


const DessertPage = ({ navigation, dessert }) => {

  //this function is used to display our desserts
  function DisplayDessert({ item: dessert }) {
    console.log("DisplayDessert", "call");
    return (

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


    )
  }



  const [desserts, setDesserts] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    //when user reloads app he will get all the desserts listed

    // when user seacrh it will stop the state update  
    if (!searching) {
      setDesserts(getDesserts())
      setFilterData(getDesserts())

    }

    console.log("useEffect", "useEffect");

  })

  // making a hook which shows the value if the user is searching or not, is false by default if no search is in progress
  const [data] = useState(getDessertName())
  const [filter, setFilter] = useState(data)
  const [searching, setisSearching] = useState(false)

  //search method thats filter record and update flat list
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
      // set state and update flatlist new data is seacrh data
      setisSearching(true)
      setFilterData(newData);
      console.log("new data", newData);

    } else {

      //if record not found in list we update list from our dessert list
      setisSearching(false)
      setDesserts(desserts);

    }
  };

  return (

    <View>
      <View style={styles.searchBarContainer}>
        {/* displaying text in searchbar */}
        <AntDesign name="search1" size={20} color="red" />
        <TextInput style={{ marginLeft: 15 }}
          placeholder="Search Desserts, Appetizers, Sellers"
          onChangeText={searchFilterFunction} />

      </View>


      {/* displaying flatlist  */}


      <FlatList

        style={styles.DessertPage}
        contentContainerStyle={[styles.DessertPageContainer]}
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={filterData}
        //renderDessert function declared above
        renderItem={DisplayDessert}
      />



    </View>

  )
}

export default DessertPage;

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    borderColor: '#A0A0A0',
    padding: 5,
    backgroundColor: "#E7E7E7",
    marginLeft: 9,
    marginRight: 9,
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 7,

  },
  DessertPage: {

    backgroundColor: "#eeeeee",
    width: '100%',



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
    backgroundColor: 'white',

  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4%',
    marginHorizontal: 2



  },
  image: {
    flex: 1,
    aspectRatio: 1,
    width: '50%',
    height: '50%',
    resizeMode: 'contain'
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