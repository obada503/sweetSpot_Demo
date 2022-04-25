import { View, Text, StyleSheet,ImageBackground, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import * as React from 'react';
import styles from './styles'
import { COLORFONTS } from '../../../Constants/theme'
import LoginPage from '../Login';
import SocialButton from '../../components/SocialButton';

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
                <TextInput 
                  placeholder='Email' 
                  style = {styles.textinput} 
                  placeholderTextColor={COLORFONTS.white}
                  keyboardType="email-address" 
                  autoCapitalize='none'
                  autoCorrect={false}  />
                <TextInput 
                  placeholder='Sex' 
                  style = {styles.textinput} 
                  placeholderTextColor={COLORFONTS.white}  />
                <TextInput placeholder='Age' style = {styles.textinput} placeholderTextColor={COLORFONTS.white}/>
                <TextInput placeholder='Email' style = {styles.textinput} placeholderTextColor={COLORFONTS.white}/>
                
                <TextInput placeholder='Password' secureTextEntry={true} style = {styles.textinput} placeholderTextColor={COLORFONTS.white}/>
              </View>
              <View style = {styles.buttonContainer}>
                
                <TouchableOpacity onPress={() => navigation.navigate('DessertPage')}>
                  <View style= {styles.firstButton}>
                    <Text style={styles.buttonText}>Register</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <View style= {styles.firstButton}>
                    <Text style={styles.buttonText}>Already have an account? Login</Text>
                  </View>
                </TouchableOpacity>
                
                

                <View>
              <SocialButton
                buttonTitle="Signup with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => fbLogin()}
              />

              <SocialButton
                buttonTitle="Signup with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => googleLogin()}
              />
            </View>

              </View>
            </ScrollView>
        </ImageBackground>
    </View>
  )
}



export default Register;