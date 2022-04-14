import { Text, View, TouchableOpacity, ScrollView, ImageBackground, Image} from 'react-native'
import React from 'react'
import styles from './styles'


// import { Ionicons } from 'expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'




const MyStorePage = ({navigation}) => {
  return (
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
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
              <Text style={{fontSize:25,fontWeight:'bold', fontFamily:'monospace', padding:10}}> Adam Richard </Text>
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
          <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
            <View style={styles.sellerItemsContainer}>
              <Image source={require('../../../assets/Desserts/Image1.png')} style={styles.image} resizeMode='cover' ></Image>
            </View>
            <View style={styles.sellerItemsContainer}>
              <Image source={require('../../../assets/Desserts/Image2.png')} style={styles.image} resizeMode='cover' ></Image>
            </View>
            <View style={styles.sellerItemsContainer}>
              <Image source={require('../../../assets/Desserts/Image3.png')} style={styles.image} resizeMode='cover' ></Image>
            </View>
            <View style={styles.sellerItemsContainer}>
              <Image source={require('../../../assets/Desserts/Image4.png')} style={styles.image} resizeMode='cover' ></Image>
            </View>
            <View style={styles.sellerItemsContainer}>
              <Image source={require('../../../assets/Desserts/Image5.png')} style={styles.image} resizeMode='cover' ></Image>
            </View>
            <View style={styles.sellerItemsContainer}>
              <Image source={require('../../../assets/Desserts/Image6.png')} style={styles.image} resizeMode='cover' ></Image>
            </View>
          </ScrollView>
        </View>
        

      </ScrollView>
    </View>
  )
}

export default MyStorePage
 
