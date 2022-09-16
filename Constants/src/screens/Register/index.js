import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { COLORFONTS } from '../../../Constants/theme'
import LoginPage from '../Login';
import SocialButton from '../../components/SocialButton';
import React, { useState, useEffect } from 'react'
import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.testDb') // returns Database object

const Register = ({ navigation }) => {
  let [Name, setName] = useState();
  let [Sex, setSex] = useState();
  let [Age, setAge] = useState();
  let [Email, setEmail] = useState();
  let [Password, setPassword] = useState();
  let [PhoneNumber, setPhoneNumber] = useState();
  let [City, setCity] = useState();

  const insertReg = () => {

    if (Name == null && Sex == null && Age == null && Email == null && Password == null,City==null && PhoneNumber==null) {
      alert('Please fill all field');

    } else {

      db.transaction(tx => {
        tx.executeSql('INSERT INTO user1(name, sex, age, email, password,city,phone) values (?,?,?,?,?,?,?)', [Name, Sex, Age, Email, Password,City,PhoneNumber],
          (txObj, resultSet) => {
          //  console.log("Insert", resultSet)
            navigation.navigate('Login')

          },
          (txObj, error) => console.log('Error', error))
      })
    }

  }

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
            <Text style={styles.title}>Create an account</Text>
          </View>

          <View style={styles.dataContainer}>
            <TextInput
              placeholder='Name'
              style={styles.textinput}
              placeholderTextColor={COLORFONTS.white}
              autoCapitalize='none'
              onChangeText={
                (userName) => setName(userName)
              }
              autoCorrect={false} />
            <TextInput
              placeholder='Sex'
              style={styles.textinput}
              onChangeText={
                (sex) => setSex(sex)
              }
              placeholderTextColor={COLORFONTS.white} />
            <TextInput placeholder='Age'
              style={styles.textinput}
              onChangeText={
                (age) => setAge(age)
              }
              placeholderTextColor={COLORFONTS.white} />

<TextInput
              placeholder='City'
              style={styles.textinput}
              onChangeText={
                (cty) => setCity(cty)
              }
              placeholderTextColor={COLORFONTS.white} />
            <TextInput placeholder='Phone Number'
              style={styles.textinput}
              onChangeText={
                (ph) => setPhoneNumber(ph)
              }
              placeholderTextColor={COLORFONTS.white} />

            <TextInput
              placeholder='Email'
              style={styles.textinput}
              onChangeText={
                (email) => setEmail(email)
              }
              placeholderTextColor={COLORFONTS.white} />

            <TextInput placeholder='Password'
              secureTextEntry={true}
              style={styles.textinput}
              onChangeText={
                (pwd) => setPassword(pwd)
              }
              placeholderTextColor={COLORFONTS.white} />
          </View>
          <View style={styles.buttonContainer}>

            <TouchableOpacity onPress={() => {
              insertReg()
            }}>
              <View style={styles.firstButton}>
                <Text style={styles.buttonText}>Register</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.firstButton}>
                <Text style={styles.buttonText}>Already have an account? Login</Text>
              </View>
            </TouchableOpacity>


          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}



export default Register;