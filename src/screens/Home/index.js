import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, TextInput} from 'react-native'
import React, {useEffect, useState} from 'react'
import SearchbarMenu from '../../components/searchbarMenu.js';
import {  getDessertName, getDesserts } from '../../../Constants/Desserts.js';
import { AntDesign } from '@expo/vector-icons';


const DessertPage = ({navigation, dessert}) => {

  //this function is used to display our desserts
  function DisplayDessert({ item: dessert }){
   console.log("wwww","call");
 //   console.log("dddddd",dessert.id);
    return(
        
          <TouchableOpacity style={styles.card} onPress={() => {
            navigation.navigate('Item', {
              dessertId: dessert.id,

            });

          }
          }>
           
           
           
            <Image style={styles.image} source={dessert.image}/>
            
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{dessert.name}</Text>
                <Text style={styles.price}>$ {dessert.price}</Text>
              </View>
          </TouchableOpacity>

            
    )
}

   
  //  function renderDessert({item: dessert}){
  //   return(

  //         <DisplayDessert
  //             //dessert item passed in with spread operator
  //             {...dessert}
  //         />
  //       )
  //   }

  const [desserts, setDesserts] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    //when user reloads app he will get all the desserts listed
      setDesserts(getDesserts())
      setFilterData(getDesserts())
  })

    // making a hook which shows the value if the user is searching or not, is false by default if no search is in progress
    const [data] = useState(getDessertName())
    const [filter, setFilter] = useState(data)
    const [searching, setisSearching] = useState(false)
    // const onSearch = (text) => {
    //   if(text)
    //   {
    //     setisSearching(true)
    //     // ignoring case sensitivity
    //     const userInput = text.toLowerCase()
    //     const userInputList = desserts.filter(item=>{
    //      const items = item.name.toLowerCase()

    //       if(items.match(userInput)){
    //         console.log("result++",userInputList)
    //         setDesserts(items);
    //         return items

    //       }
          
    //     })
    //   setFilter(userInputList)
    //   }
    //         else{
    //           setFilter(data)
    //           setisSearching(false)
    //         } 
      
    // }

    const searchFilterFunction = (text) => {
      // Check if searched text is not blank
      if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource and update FilteredDataSource
        const newData = desserts.filter(
          function (item) {
            // Applying filter for the inserted text in search bar
            const itemData = item.name
                ? item.name.toUpperCase()
                : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;

          }
        );
        setFilterData(newData);
        
      }else{
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
      
     
         

        <FlatList
        
          style={styles.DessertPage}
          contentContainerStyle={[styles.DessertPageContainer]}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
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
    width:'100%',
    
    
    
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
  flex:1,
  backgroundColor: 'white',
  borderRadius: 16,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '4%',
  marginHorizontal:2
  
  

},
image: {
  flex:1,
  aspectRatio: 1,
  width: '50%',
  height:'50%',
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