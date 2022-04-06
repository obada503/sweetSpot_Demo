import React from "react";
import {Text, Image, View, StyleSheet, TouchableOpacity} from "react-native";



export function DisplayDessert(navigation,{name, price, image}){
    return(

          <TouchableOpacity style={styles.card} onPress={() => {
                  navigation.navigate('item', {dessertId: dessert.id})
              }}>
            <Image style={styles.image} source={image}/>
            
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>$ {price}</Text>
            </View>
          </TouchableOpacity>

            
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '4%',

    },
    image: {
        flex:1,
        aspectRatio: 1,
        width: '100%',
        height:'100%',
        resizeMode:'contain'
    },
    infoContainer: {
        padding: 16 
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    }
})