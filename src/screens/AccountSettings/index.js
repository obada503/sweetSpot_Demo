import { View, Text, Image, Switch, ScrollView, AsyncStorage, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from "react";

import styles from './styles'
import { COLORFONTS } from '../../../Constants/theme'
import Register from '../Register'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Caption, TouchableRipple, Title } from 'react-native-paper'
import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.testDb') // returns Database object
import { useIsFocused } from "@react-navigation/native";

const AccountSettings = ({ navigation }) => {
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const isFocused = useIsFocused();
  const [uid, setUId] = useState();

  const [isEnabled, setIsEnabled] = useState(false);
  let [flatListItems, setFlatListItems] = useState([]);

  let searchUser = (id) => {

    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM user1 where id = ?',
        [id],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            setName(results.rows.item(0).name)
            setCity(results.rows.item(0).city)
            setPhone(results.rows.item(0).phone)
            setEmail(results.rows.item(0).email)


          } else {
            alert('No user found');
          }
        }
      );
    });
  };
  useEffect(() => {
    if(isFocused){ 
    
      AsyncStorage.getItem("isEnabled").then(asyncStorageRes => {
      //  console.log("rt",JSON.parse(asyncStorageRes))
        setIsEnabled(JSON.parse(asyncStorageRes))
      });

      AsyncStorage.getItem("userId").then(asyncStorageRes => {
        searchUser(JSON.parse(asyncStorageRes));
        setUId(JSON.parse(asyncStorageRes))
      });

    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM favourites where uid = ?',
        [uid],
        (tx, results) => {
          setFlatListItems(results.rows.length);
        }
      );
    });
  }

    //when user reloads app he will get all the desserts listed

    // when user seacrh it will stop the state update  
  

  

  }, [isFocused])
  return (
    <ScrollView style={styles.container}>

      <View style={styles.userInfoSection}>
        <Text style={styles.title1}>{isEnabled ? "Switched as Buyer" : "Switched as Seller"}  </Text>
        <Switch
          trackColor={{ false: "#81b0ff" , true: "#767577" }}
          thumbColor={isEnabled ? "#f4f3f4" : "#f5dd4b"}
          onValueChange={(value) => { 
            setIsEnabled(value => !value);
            AsyncStorage.setItem('isEnabled', JSON.stringify(value));

        }}

          value={isEnabled}
        />

      </View>



      <View style={styles.userInfoSection}>
        <Image source={require('../../../assets/user.png')}
          style={{ width: 120, height: 120, borderRadius: 100, marginTop: 20 }}></Image>
        <Text style={styles.title}> {name} </Text>
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
          <Icon name="map-marker-radius" color="#00ffff" size={40} />
          <Text style={styles.title2}>{city}</Text>
        </View>
      </View>

      <View style={styles.userInfoSection2}>
        <View style={styles.row}>
          <Icon name="phone" color="#00ffff" size={40} />
          <Text style={styles.title2}>{phone}</Text>
        </View>
      </View>

      <View style={styles.userInfoSection2}>
        <View style={styles.row}>
          <Icon name="email" color="#00ffff" size={40} />
          <Text style={styles.title2}>{email}</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {
          borderRightColor: '#00ffff',
          borderRightWidth: 1
        }]}>
          <Title>{flatListItems}Items</Title>
          <Caption>Favorites</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>{flatListItems}</Title>
          <Caption>Orders</Caption>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={() => { navigation.navigate("MyFavorities") }}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Add Dessert to Favorites</Text>
          </View>
        </TouchableOpacity>
      </View>






    </ScrollView>

  )
}



export default AccountSettings;