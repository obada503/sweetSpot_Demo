import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'




// passing props 

const SearchbarMenu = ({props}) => {
  return (
    <View style={styles.searchMenu} >
      <View  style={styles.searchMenuPage}>
        
      </View>
      <Text>
        Hello
      </Text>
    </View>
  )
}

export default SearchbarMenu

const styles = StyleSheet.create({
  searchMenu:{
    position:'absolute', 
    top:'10%', 
    left:0, right:0,bottom:0,
    backgroundColor:'gray',
    opacity: 0.2,
    borderTopLeftRadius:4,
    borderTopRightRadius:4,
    
  },
  searchMenuPage:{
    flexWrap:'wrap',
    marginHorizontal:20,
    backgroundColor:'red',
    zIndex:10,
   
  }
  
})