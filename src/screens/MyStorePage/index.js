import { Text, View, TouchableOpacity, ScrollView, ImageBackground, Image, FlatList} from 'react-native'
import React, { useState, useEffect }  from 'react'
import styles from './styles'


// import { Ionicons } from 'expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { getSellerDessert } from '../../../Constants/Desserts'
import { getSellerName } from '../../../Constants/Desserts'
import { getSellerItem, getSellerItems } from '../../../Constants/SellersItems'



const MyStorePage = ({navigation}) => {
  
  function DisplaySellerItems({ item: selleritem }){
    // console.log(dessert);
    // console.log(dessert.id);
    return(
        
          <TouchableOpacity style={styles.card} onPress={() => {
                      
                    // navigation.navigate('Item', {selleritemID: selleritem.id,},
                     
                     navigation.navigate('Item', {dessertId: selleritem.id},

                 
                     )}
          }
          >
           
           <Image style={styles.image} source={selleritem.image}/>
            
              <View style={styles.infoContainer}>
              
            
              </View>
            
          </TouchableOpacity>    
    )
}


const [selleritem, setSelleritem] = useState([]);

useEffect(() => {
  //when user reloads app he will get all the desserts listed
    setSelleritem(getSellerItems())
})

// console.log(dessert);

  return (
    <View>
          <View>
            <TouchableOpacity>
               <ImageBackground source={require('../../../assets/mystoreheader.png')}
                 style={{ width:400,height:90}}>
               </ImageBackground>
             
            </TouchableOpacity>
          </View>

          <View style={{alignItems:'center'}}>
            <Image source={require('../../../assets/user.png')}
                    style={{width:130 ,height:130, borderRadius: 100, marginTop:-60}}></Image>
              <Text style={{fontSize:25,fontWeight:'bold', fontFamily:'monospace', padding:10}}> Blank Name </Text>
              <Text style={{color:'darkgrey',fontSize:15,fontWeight:'bold', fontFamily:'monospace'}}> 22, Male </Text>
              <MaterialIcons name="add-circle" size= {45} color="black" style={styles.add}/>
          </View>
                   
          <TouchableOpacity onPress={() => navigation.navigate('SellerInventory')}>
              <View style= {styles.firstButton}>
                <Text style={styles.buttonText}>View Current Inventory</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style= {styles.firstButton}>
                <Text style={styles.buttonText}>Logout</Text>
              </View>
          </TouchableOpacity>
        
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={{fontFamily:'monospace'}}> 6 Items Posted</Text>
          </View>
          <View style={styles.box}>
            <Text style={{fontFamily:'monospace'}}> Add Or Delete Items</Text> 
          </View>
        </View>
        {/* Displaying users items horizontally , he will be able to add or remove items with expo image picker */}
        <View style={{marginTop:20}}>
        
          <FlatList 
          horizontal={true}
          style={styles.SellerInventory}
          contentContainerStyle={styles.SellerInventoryContainer}
          keyExtractor={(item) => item.id.toString()}
          data={selleritem}
          //renderDessert function declared above
          renderItem={DisplaySellerItems}
        />
        </View>
    </View>
  )
}

export default MyStorePage
 
