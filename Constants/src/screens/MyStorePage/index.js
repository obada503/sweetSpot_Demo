import { Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Button, Dimensions, Modal, AsyncStorage, ScrollView, ImageBackground, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { getSellerDessert } from '../../../Constants/Desserts'
import { getSellerName } from '../../../Constants/Desserts'
import { getSellerItem, getSellerItems } from '../../../Constants/SellersItems'
import { useIsFocused } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';

import * as SQLite from 'expo-sqlite'
import { COLORFONTS } from '../../../Constants/theme'
const db = SQLite.openDatabase('db.testDb') // returns Database object

const MyStorePage = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [sex, setSex] = useState();

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const { width } = Dimensions.get("window");

  // This is to manage TextInput State

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModalVisibility1 = () => {
    setModalVisible1(!isModalVisible1);
  };
  function getImages() {
    setLoading(true);

    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM images',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          setSelleritem1(temp);
          // setLoading(false);
        }
      );
    });

  }



  function DisplaySellerItems({ item: selleritem }) {
    //  console.log("img uri" ,selleritem.image);
    // console.log(dessert.id);
    return (


      <TouchableOpacity style={{
        backgroundColor: 'white',
        borderRadius: 13,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',

      }} onPress={() => {

        // navigation.navigate('Item', {selleritemID: selleritem.id,},

        //  navigation.navigate('Item', { dessertId: selleritem.id },


        // )
      }
      }
      >
        <Image style={{ height: 130, width: 130, marginVertical: 20, marginHorizontal: 20, marginBottom: 20 }}
          source={selleritem.image} />

        <Text style={{ color: '#000000', textAlign: 'center', marginHorizontal: 14, marginVertical: 5, alignSelf: 'center', fontWeight: 'bold' }}>{selleritem.name}</Text>
        <Text style={{ color: '#000000', textAlign: 'center', marginHorizontal: 14, marginVertical: 5, alignSelf: 'center', fontWeight: 'bold' }}>{selleritem.description}</Text>
        <Text style={{ color: '#000000', textAlign: 'center', marginHorizontal: 14, marginVertical: 10, alignSelf: 'center' }}>$ {selleritem.price}</Text>



      </TouchableOpacity>
    )
  }
  function DisplaySellerItems1({ item: selleritem }) {
    return (
      <TouchableOpacity style={{
        backgroundColor: 'white',
        borderRadius: 13,
        alignItems: 'center',
        width: 200,

        justifyContent: 'center',

      }}
        activeOpacity={0.75}
        onPress={() => {


        }
        }
      >

        <Image style={{ height: 130, width: 130, marginVertical: 20, marginHorizontal: 20, marginBottom: 20 }}
          source={{ uri: JSON.parse(selleritem.image) }} />


        <Text style={{ color: '#000000', marginHorizontal: 14, textAlign: 'center', marginVertical: 5, alignSelf: 'center', fontWeight: 'bold' }}>{selleritem.title}</Text>
        <Text style={{ color: '#000000', marginHorizontal: 14, textAlign: 'center', marginVertical: 5, alignSelf: 'center', fontWeight: 'bold' }}>{selleritem.discription}</Text>
        <Text style={{ color: '#000000', marginHorizontal: 14, textAlign: 'center', marginVertical: 10, alignSelf: 'center' }}>$ {selleritem.price}</Text>


      </TouchableOpacity>
    )
  }
  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 100,
          marginHorizontal: 10,
          backgroundColor: "#000",
        }}
      />
    );
  }
  const [pickedImagePath, setPickedImagePath] = useState('');
  const [selleritem1, setSelleritem1] = useState([]);
  const [selleritem, setSelleritem] = useState([]);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();

  let searchUser = (id) => {
    // console.log('id++', id);

    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM user1 where id = ?',
        [id],
        (tx, results) => {
          var len = results.rows.length;
          // console.log('123len++', results);
          if (len > 0) {
            setName(results.rows.item(0).name)
            setAge(results.rows.item(0).age)
            setSex(results.rows.item(0).sex)


          } else {
            alert('No user found');
          }
        }
      );
    });
  };




  useEffect(() => {
    if(isFocused){ 

    

    getImages()


    AsyncStorage.getItem("isEnabled").then(asyncStorageRes => {
      //  console.log("rt",JSON.parse(asyncStorageRes))
      setIsEnabled(JSON.parse(asyncStorageRes))
    });
    AsyncStorage.getItem("userId").then(asyncStorageRes => {
      searchUser(JSON.parse(asyncStorageRes));

    });
    setSelleritem(getSellerItems())
  }
}, [isFocused])
  const insertImg = (uri) => {

    db.transaction(tx => {
      tx.executeSql('INSERT INTO images(image,discription,title,price) values (?,?,?,?)', [uri, description, title, price],
        (txObj, resultSet) => {
          console.log("Insert image+++", resultSet)
        },
        (txObj, error) => console.log('Error', error))
    })
  }


  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    // console.log(result);
    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      toggleModalVisibility1()

    }

  }



  // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {

    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      toggleModalVisibility()
      setPickedImagePath(result.uri);

    }

  }


  return (
    <KeyboardAvoidingView>

      <ScrollView>

        <Modal animationType="slide"
          transparent visible={isModalVisible}
          presentationStyle="overFullScreen"
          onDismiss={toggleModalVisibility}>
          <View style={styles.viewWrapper}>



            <View style={styles.modalView}>
              <Text style={{
                color: '#000000',
                fontWeight: 'bold',
                fontSize: 20,
                fontFamily: 'monospace',
                marginBottom: 20
              }}>Image Description  </Text>

              <TextInput placeholder="Enter Image Title"
                value={title} style={styles.textInput}
                onChangeText={(value) => setTitle(value)} />

              <TextInput placeholder="Enter Image Description"
                value={description} style={styles.textInput}
                onChangeText={(value) => setDescription(value)} />


              <TextInput placeholder="Enter Price"
                value={price} style={styles.textInput}
                onChangeText={(value) => setPrice(value)} />

              {/** This button is responsible to close the modal */}

              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => {
                  insertImg(JSON.stringify(pickedImagePath))
                  toggleModalVisibility()

                }}>
                  <View style={styles.firstButton}>
                    <Text style={styles.buttonText1}>Save</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  toggleModalVisibility()
                }}>
                  <View style={styles.firstButton}>
                    <Text style={styles.buttonText1}>Cancel</Text>
                  </View>
                </TouchableOpacity>

              </View>



            </View>
          </View>
        </Modal>

        <Modal animationType="slide"
          transparent visible={isModalVisible1}
          presentationStyle="overFullScreen"
          onDismiss={toggleModalVisibility1}>
          <View style={styles.viewWrapper}>
            <View style={styles.modalView}>
              <Text style={{
                color: '#000000',
                fontWeight: 'bold',
                fontSize: 20,
                fontFamily: 'monospace',
                marginBottom: 20
              }}>Image Description  </Text>

              <TextInput placeholder="Enter Image Title"
                value={title} style={styles.textInput}
                onChangeText={(value) => setTitle(value)} />

              <TextInput placeholder="Enter Image Description"
                value={description} style={styles.textInput}
                onChangeText={(value) => setDescription(value)} />


              <TextInput placeholder="Enter Price"
                value={price} style={styles.textInput}
                onChangeText={(value) => setPrice(value)} />

              {/** This button is responsible to close the modal */}

              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => {
                  insertImg(JSON.stringify(pickedImagePath));
                  toggleModalVisibility1()


                }}>
                  <View style={styles.firstButton}>
                    <Text style={styles.buttonText1}>Save</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  toggleModalVisibility1()
                }}>
                  <View style={styles.firstButton}>
                    <Text style={styles.buttonText1}>Cancel</Text>
                  </View>
                </TouchableOpacity>

              </View>



            </View>
          </View>
        </Modal>

        <View>
          <View>
            <TouchableOpacity>
              <ImageBackground source={require('../../../assets/mystoreheader.png')}
                style={{ width: 400, height: 90 }}>
              </ImageBackground>

            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Image source={require('../../../assets/user.png')}
              style={{ width: 130, height: 130, borderRadius: 100, marginTop: -60 }}></Image>
            <Text style={{ fontSize: 25, fontWeight: 'bold', fontFamily: 'monospace', padding: 10 }}> {name} </Text>
            <Text style={{ color: 'darkgrey', fontSize: 15, fontWeight: 'bold', fontFamily: 'monospace' }}> {age}, {sex} </Text>
            <MaterialIcons name="add-circle" size={45} color="black" style={styles.add} />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('SellerPage')}>
            <View style={styles.firstButton}>
              <Text style={styles.buttonText}>All Items</Text>
            </View>
          </TouchableOpacity>

         

        


          <TouchableOpacity onPress={() => navigation.navigate('MyFavouriteList')}>
            <View style={styles.firstButton}>
              <Text style={styles.buttonText}>My Favorites Items</Text>
            </View>
          </TouchableOpacity>

          {!isEnabled &&
          <>
           <TouchableOpacity onPress={() => {
            openCamera()
          }}>
            <View style={styles.firstButton}>
              <Text style={styles.buttonText}>Pick Image From Camera</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            showImagePicker()
          }}>
            <View style={styles.firstButton}>
              <Text style={styles.buttonText}>Pick Image From Gallery</Text>
            </View>
          </TouchableOpacity>
          </>
          }

          {/* Displaying users items horizontally , he will be able to add or remove items with expo image picker */}
          <View style={{ marginTop: 10 }}>

            <FlatList
              horizontal={true}
              style={{ marginHorizontal: 10, marginBottom: 10 }}
              contentContainerStyle={styles.SellerInventoryContainer}
              keyExtractor={(item) => item.id.toString()}
              data={selleritem}
              ItemSeparatorComponent={FlatListItemSeparator}

              //renderDessert function declared above
              renderItem={DisplaySellerItems}
            />
          </View>
          <Text style={{
            color: "#000000",
            fontWeight: 'bold',
            fontSize: 20,
            justifyContent: 'center',
            textAlign: 'center',
            alignSelf: 'center',
            fontFamily: 'monospace'
          }}>My Uploaded Images</Text>

          <View style={{ marginTop: 2 }}>

            <FlatList
              horizontal={true}
              style={{
                marginHorizontal: 10, marginTop: 20
                , marginBottom: 10
              }}
              contentContainerStyle={styles.SellerInventoryContainer}
              keyExtractor={(item) => item.id.toString()}
              data={selleritem1}
              ItemSeparatorComponent={FlatListItemSeparator}

              //renderDessert function declared above
              renderItem={DisplaySellerItems1}
            />
          </View>



        </View>
      </ScrollView>

    </KeyboardAvoidingView>
  )
}

export default MyStorePage

