import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React, { useState,useEffect } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORFONTS } from './Constants/theme.js';
import { SIZEFONTS } from './Constants/theme.js';
import Router from './src/Router/Router.js';



import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.testDb') // returns Database object

const screens = [
  {
    id :1,
    address: 'Sweet Action',
    desc: 'Sweet stuff just for you',
    image: require('./assets/donut.jpg')

  },
  {
    id :2,
    address: 'Amazing Flavors',
    desc: 'They will make you feel good',
    image: require('./assets/wedcake.jpg')
  }

]


export default function App () {
  console.disableYellowBox = true;


  useEffect(() => {

    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS user1 (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,sex TEXT ,age INT, email TEXT,password TEXT,city TEXT ,phone INT)'
      )
    })

    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT,uid INTEGER, name TEXT, price Float, image TEXT)'
      )
    })

    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS favourites (id INTEGER PRIMARY KEY AUTOINCREMENT,uid INTEGER, name TEXT, price Float, image TEXT)'
      )
    })

    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS images (id INTEGER PRIMARY KEY AUTOINCREMENT, image TEXT, discription TEXT, isImage TEXT)'
      )
    })    
  }, []);


  
  StatusBar.setBarStyle('light-content', true)
  const [showAuthenticationPage, setAuthenticationPage] = useState(false);

  const buttonLabel = (label) => {
    return(
      <View style={{
        color:COLORFONTS.title,
        fontWeight:'600',
        fontSize: SIZEFONTS.h4
      }}>
        <Text>
          {label}
        </Text>
      </View>
    )
  }
  if(!showAuthenticationPage)
  {
    return (
      <AppIntroSlider
        data = {screens}
        renderItem = {({item}) => {
          return(
            <View style ={styles.boardTwo}>
              <Image
                source = {item.image}  
                style = {{
                width: 300,
                height:400,
              }}
              resizeMode = 'contain'
               
              />
              <Text style= {{
                fontWeight: 'bold',
                color: COLORFONTS.title,
                fontSize: SIZEFONTS.h1,
              }}>
                {item.address}
              </Text>
              <Text  style= {{
                textAlign: 'center',
                paddingTop: 5,
                fontWeight: 'bold',
                color: COLORFONTS.title,
                fontSize: SIZEFONTS.h1,
              }}>
                {item.desc}
              </Text>
            </View>
          )
        }}
          activeDotStyle={{
            backgroundColor:COLORFONTS.primary,
            width:30,
          }}
          showSkipButton
          renderNextButton={() => buttonLabel("Next")} 
          renderSkipButton={() => buttonLabel("Skip")}
          renderDoneButton={() => buttonLabel("Done")}
          onDone={() => {
            setAuthenticationPage(true);
          }}
          
      /> 
    )
  }
  return (
    <Router />
  )

  

}




const styles = StyleSheet.create({

  boardOne: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  boardTwo: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    paddingTop : 100,
  }

})