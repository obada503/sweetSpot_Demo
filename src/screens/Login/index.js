import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useContext} from 'react';
import styles from './styles'
import { COLORFONTS } from '../../../Constants/theme'
import SocialButton from '../../components/SocialButton.js'
// import {AuthContext} from '../navigation/AuthProvider'


const LoginPage = ({ navigation }) => {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  // const {login, googleLogin, fbLogin} = useContext(AuthContext);
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/pancake.jpg')}
        style={{
          flex: 1,
          alignContent: 'center'

        }}
        resizeMode="cover"
      >
        <ScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Sweet Spot</Text>
            <Text style={styles.subTitle}>Welcome Back</Text>
          </View>
          <View style={styles.dataContainer}>
            {/* <AntDesign name='user' size={25} color='#666' /> */}
            <TextInput 
              placeholder='Username' 
              style={styles.textinput} 
              placeholderTextColor={COLORFONTS.white}
              keyboardType="email-address"
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(userEmail) => setEmail(userEmail)}  />
            <TextInput 
              placeholder='Password' 
              secureTextEntry={true} 
              style={styles.textinput} 
              placeholderTextColor={COLORFONTS.white}
              onChangeText={(userPassword) => setPassword(userPassword)}  />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('BottomTabs')}>
      
              <View style={styles.firstButton}>
                <Text style={styles.buttonText}>Log in</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
              <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            <View>
              <SocialButton
                buttonTitle="Sign In with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => fbLogin()}
              />

              <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => googleLogin()}
              />
            </View>


            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <View style={styles.firstButton}>
                <Text style={styles.buttonText}>Don't have an account? SignUp</Text>
              </View>
            </TouchableOpacity>
            
            

          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}



export default LoginPage;