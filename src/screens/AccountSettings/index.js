import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import * as React from 'react';
import styles from './styles'
import { COLORFONTS } from '../../../Constants/theme'
import Register from '../Register'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Caption, TouchableRipple, Title} from 'react-native-paper'


const AccountSettings = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
            
              <View style={styles.userInfoSection}>
                <Image source={require('../../../assets/user.png')}
                      style={{width:120 ,height:120, borderRadius: 100, marginTop:20}}></Image>
                  <Text style={styles.title}> Blank Name </Text>
                  <Text style={styles.title1}> @username </Text>
              </View>  
                
              {/* navigation in this block so user can edit his profile */}
              <View style={styles.userInfoSection}>
                <TouchableOpacity onPress={() => navigation.navigate('EditAccountSettings')}>
                <View style={styles.row} >
                  <Text style={styles.editProfileTitle}> Edit  </Text>
                  
                  <MaterialCommunityIcons.Button
                        name="account-edit"
                        size={25}
                        backgroundColor="#fffafa"
                        color="#00fa9a"
                        onPress={() => navigation.navigate('EditAccountSettings')}
                        />  
                  
                </View>
                </TouchableOpacity>
              
                  
              </View>
              {/* navigation in this block so user can edit his profile */}

              <View style={styles.userInfoSection2}>
                <View style={styles.row}>
                  <Icon name="map-marker-radius" color="#00ffff" size={40}/>
                  <Text style={styles.title2}>Dallas,TX</Text>
                </View>
              </View>
                
                <View style={styles.userInfoSection2}>
                  <View style={styles.row}>
                    <Icon name="phone" color="#00ffff" size={40}/>
                    <Text style={styles.title2}>9999999999</Text>
                  </View>
                </View>

                <View style={styles.userInfoSection2}>
                  <View style={styles.row}>
                    <Icon name="email" color="#00ffff" size={40}/>
                    <Text style={styles.title2}>user@gmail.com</Text>
                  </View>
                </View>

              <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                      borderRightColor: '#00ffff',
                      borderRightWidth: 1
                    }]}>
                <Title>$100</Title>
                <Caption>Wallet</Caption>
              </View>
              <View style={styles.infoBox}>
                <Title>5</Title>
                <Caption>Orders</Caption>
              </View>
            </View> 
            <View style={styles.menuWrapper}>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Icon name="heart-outline" color="#FF6347" size={25}/>
                  <Text style={styles.menuItemText}>Your Favorites</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Icon name="credit-card" color="#FF6347" size={25}/>
                  <Text style={styles.menuItemText}>Payment</Text>
                </View>
              </TouchableOpacity>
          </View>
          
                

              
            

    </ScrollView>
       
  )
}



export default AccountSettings;