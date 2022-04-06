import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Searchbar = () => {
  return (
    <View contentContainerStyle={styles.contentContainerStyle}>
    {/*making input container*/}
    {/*stylig the inner view component so they are vertically aligned*/}
    <View style={{
        flexDirection: "row", alignItems: "center", justifyContent: 'center', borderColor: '#A0A0A0',
        padding: 5, backgroundColor: "#E7E7E7", marginLeft: 9, marginRight: 9, marginTop: 10,
        borderWidth: 3, borderRadius: 7
    }}>
        {/* displaying text in searchbar */}
        <AntDesign name="search1" size={20} color="red" />
        <TextInput style={{ marginLeft: 15 }} placeholder="Search Desserts, Appetizers, Sellers" />
    </View>
    {/*making all components pressable*/}
    {/* <View> */}
          {/* <Text style={{
              margin: 10, fontSize: 20, fontWeight: "600", paddingLeft: 7
              , backgroundColor: "#ffe6e6", borderColor: "#FF9999", textAlign: 'center'
                }}>
                    Scroll down to view more items!
          </Text> */}
          
          {/* CALL DESSERTPAGE?? */}

    {/* </View> */}
</View>
  )
}

export default Searchbar

const styles = StyleSheet.create({})