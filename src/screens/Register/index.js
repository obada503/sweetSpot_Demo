import { View, Text, StyleSheet,ImageBackground, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import * as React from 'react';
import styles from './styles'
import { COLORFONTS } from '../../../Constants/theme'
import LoginPage from '../Login';

const Register = ({navigation}) => {
  return (
    <View style = {styles.container}>
        <ImageBackground
            source={require('../../../assets/pancake.jpg')}
            style={{
                flex: 1,
                alignContent: 'center'

            }}
            resizeMode = "cover"
        >
            <ScrollView>
              <View style = {styles.topContainer}>
                <Text style= {styles.title}>Create an account</Text>
              </View>
              <View style={styles.dataContainer}>
                <TextInput placeholder='Username' style = {styles.textinput} placeholderTextColor={COLORFONTS.white}/>
                <TextInput placeholder='Email' style = {styles.textinput} placeholderTextColor={COLORFONTS.white}/>
                
                <TextInput placeholder='Password' secureTextEntry={true} style = {styles.textinput} placeholderTextColor={COLORFONTS.white}/>
              </View>
              <View style = {styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <View style= {styles.firstButton}>
                    <Text style={styles.buttonText}>Already have an account? Login</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('DessertPage')}>
                  <View style= {styles.firstButton}>
                    <Text style={styles.buttonText}>Register</Text>
                  </View>
                </TouchableOpacity>

              </View>
            </ScrollView>
        </ImageBackground>
    </View>
  )
}



export default Register;