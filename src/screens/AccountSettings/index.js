import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import * as React from 'react';
import styles from './styles'
import { COLORFONTS } from '../../../Constants/theme'
import Register from '../Register'

const AccountSettings = ({ navigation }) => {
  return (
    <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <View style={styles.firstButton}>
                <Text style={styles.buttonText}>Don't have an account? SignUp</Text>
              </View>
            </TouchableOpacity>

    </View>
       
  )
}



export default AccountSettings;