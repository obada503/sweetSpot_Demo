import {  Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome'
import { Feather } from 'react-native-vector-icons/Feather'

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { COLORFONTS } from '../../../Constants/theme'


const EditAccount = () => {
  return (
    <View style={styles.container}>
     <View style={{margin:20}}>
        <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={() => {}}>
                <View style={{
                    height: 120,
                    width: 120,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <ImageBackground
                        source= { require('../../../assets/user.png') } 
                        style={{height:120, width: 120}}
                        imageStyle={{borderRadius:100}}
                        >
                        {/* putting camera icon on top of profile pic */}
                        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                            <Icon name='camera' size={40} color="#fff" style={{
                                opacity:0.6,
                                alignItems:'center',
                                justifyContent:'center',
                                borderWidth:1,
                                borderColor:'#fff',
                                borderRadius:20,
                            }}/>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
            <Text style={{marginTop:10, fontSize:18, fontWeight:'bold'}}>Blank Name</Text>
        </View>

        <View style={styles.action}>
            <MaterialCommunityIcons name="account" size={30} color={'#00ffff'} />
            <TextInput 
                placeholder='Name'
                placeholderTextColor="#696969" 
                style={styles.textInput} 
                autoCorrect={false}  
                borderBottomColor= {COLORFONTS.lightgrey}
                borderBottomWidth = {1}
                />
        </View>
        <View style={styles.action}>
            <MaterialCommunityIcons name="phone" size={30} color={'#00ffff'} />
            <TextInput 
                placeholder='Phone Number'
                placeholderTextColor="#696969" 
                style={styles.textInput} 
                autoCorrect={false}  
                borderBottomColor= {COLORFONTS.lightgrey}
                borderBottomWidth = {1}
                keyboardType='number-pad'
                />
        </View>
        <View style={styles.action}>
            <MaterialCommunityIcons name="email" size={30} color={'#00ffff'} />
            <TextInput 
                placeholder='Email'
                placeholderTextColor="#696969" 
                style={styles.textInput} 
                autoCorrect={false}  
                borderBottomColor= {COLORFONTS.lightgrey}
                borderBottomWidth = {1}
                keyboardType='email-address'
                />
        </View>
        <View style={styles.action}>
            <MaterialCommunityIcons name="earth" size={30} color={'#00ffff'} />
            <TextInput 
                placeholder='Country'
                placeholderTextColor="#696969" 
                style={styles.textInput} 
                autoCorrect={false}  
                borderBottomColor= {COLORFONTS.lightgrey}
                borderBottomWidth = {1}
                />
        </View>
        <View style={styles.action}>
            <MaterialCommunityIcons name="city" size={30} color={'#00ffff'} />
            <TextInput 
                placeholder='City'
                placeholderTextColor="#696969" 
                style={styles.textInput} 
                autoCorrect={false}  
                borderBottomColor= {COLORFONTS.lightgrey}
                borderBottomWidth = {1}
                />
        </View>

        {/* addig submit button */}
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
            <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}

export default EditAccount

