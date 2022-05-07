import { View, Text, StyleSheet, AsyncStorage, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react';
import styles from './styles'
import { COLORFONTS } from '../../../Constants/theme'
import SocialButton from '../../components/SocialButton.js'
// import {AuthContext} from '../navigation/AuthProvider'
import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.testDb') // returns Database object


const LoginPage = ({ navigation }) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let searchUser = () => {



    if (email == null && password == null) {
      alert('Please fill email and password');

    } else {


      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM user1 where email = ? AND password = ?',
          [email, password],
          (tx, results) => {
            var len = results.rows.length;
            console.log('len', len);
            if (len > 0) {
              console.log("sucesss", results.rows.item(0).name);
              console.log("sucesss", results.rows.item(0).age);
              console.log("sucesss", results.rows.item(0).sex);
              var id = results.rows.item(0).id;
              AsyncStorage.setItem('userId', JSON.stringify(id));
              console.log('userId++++++++===', JSON.stringify(id));

              navigation.navigate('BottomTabs')

            } else {
              alert('No user found');
            }
          }
        );
      });
    }
  };

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
              placeholder='Email'
              style={styles.textinput}
              placeholderTextColor={COLORFONTS.white}
              keyboardType="email-address"
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(userEmail) => setEmail(userEmail)} />
            <TextInput
              placeholder='Password'
              secureTextEntry={true}
              style={styles.textinput}
              placeholderTextColor={COLORFONTS.white}
              onChangeText={(userPassword) => setPassword(userPassword)} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => {
              // navigation.navigate('BottomTabs')

              searchUser()
            }}>

              <View style={styles.firstButton}>
                <Text style={styles.buttonText}>Log In</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity >
              <View style={styles.firstButton}>
                <Text style={styles.buttonText}>Forgot Password</Text>
              </View>
            </TouchableOpacity>


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