import React, { useState } from 'react'
import Register from '../screens/Register'
import LoginPage from '../screens/Login'
import AccountSettings from '../screens/AccountSettings'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator, createTabNavigator } from '@react-navigation/bottom-tabs'
import MyStorePage from '../screens/MyStorePage'
import DessertPage from '../screens/Home'
import ItemPage from '../screens/Item'
import { COLORFONTS } from '../../Constants/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import SellerDetails from '../screens/SellerInventory'
// import SellerPage from '../screens/SellerPage'

const AuthStack = createNativeStackNavigator();

function AuthStackScreen({isSignedIn}){
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={LoginPage} 
                            options={{headerShown: false,}}></AuthStack.Screen>
            <AuthStack.Screen name="Register" component={Register} 
                            options={{headerShown: false,}}></AuthStack.Screen>
        </AuthStack.Navigator>
    )
}


const Itemstack = createNativeStackNavigator();

function ItemStackScreen(){
    return(
        
            <Itemstack.Navigator  >
                <Itemstack.Screen name = "DessertPage" component = {DessertPage} options= 
            {{
                activeTintColor: COLORFONTS.primary,
                inactiveTintColor: COLORFONTS.grey,

                labelStyle:
            {
                    fontWeight: 'bold',

            },
            tabStyle:
            {
                paddingTop: 5,
                height: 50
            },
                headerTitle: 'SweetPage',
                headerStyle:
                {
                    backgroundColor: COLORFONTS.primary
                },
                headerTitleStyle:
                {
                    color: COLORFONTS.white,
                    fontWeight: '800',
                }, 
            
            }}/>
                <Itemstack.Screen name = 'Item' component = {ItemPage} options= 
            {{
                activeTintColor: COLORFONTS.primary,
                inactiveTintColor: COLORFONTS.grey,

                labelStyle:
            {
                    fontWeight: 'bold',

            },
            tabStyle:
            {
                paddingTop: 5,
                height: 50
            },
                headerTitle: 'SweetItem',
                headerStyle:
                {
                    backgroundColor: COLORFONTS.primary
                },
                headerTitleStyle:
                {
                    color: COLORFONTS.white,
                    fontWeight: '800',
                }, 
            
            }}/>
            </Itemstack.Navigator>
        
    );
}

const AccountStack = createNativeStackNavigator();

function AccountStackScreen(){
    return (
        <AccountStack.Navigator >
            <AccountStack.Screen name="Account" component={AccountSettings} options= 
            {{
                activeTintColor: COLORFONTS.primary,
                inactiveTintColor: COLORFONTS.grey,

                labelStyle:
            {
                    fontWeight: 'bold',

            },
            tabStyle:
            {
                paddingTop: 5,
                height: 50
            },
                headerTitle: 'SweetSettings',
                headerStyle:
                {
                    backgroundColor: COLORFONTS.primary
                },
                headerTitleStyle:
                {
                    color: COLORFONTS.white,
                    fontWeight: '800',
                }, 
            
            }}></AccountStack.Screen>
        </AccountStack.Navigator>
    );
    }
 const MyStoreStack = createNativeStackNavigator();

function MyStoreStackScreen(){
    return (
        <MyStoreStack.Navigator>
            <MyStoreStack.Screen name="MyStore" component={MyStorePage} options= 
            {{
                activeTintColor: COLORFONTS.primary,
                inactiveTintColor: COLORFONTS.grey,

                labelStyle:
            {
                    fontWeight: 'bold',

            },
            tabStyle:
            {
                paddingTop: 5,
                height: 50
            },
                headerTitle: 'SweetStore',
                headerStyle:
                {
                    backgroundColor: COLORFONTS.primary
                },
                headerTitleStyle:
                {
                    color: COLORFONTS.white,
                    fontWeight: '800',
                }, 
            
            }}></MyStoreStack.Screen>
            <MyStoreStack.Screen name = 'Item' component = {ItemPage} options= 
            {{
                activeTintColor: COLORFONTS.primary,
                inactiveTintColor: COLORFONTS.grey,

                labelStyle:
            {
                    fontWeight: 'bold',

            },
            tabStyle:
            {
                paddingTop: 5,
                height: 50
            },
                headerTitle: 'SweetItem',
                headerStyle:
                {
                    backgroundColor: COLORFONTS.primary
                },
                headerTitleStyle:
                {
                    color: COLORFONTS.white,
                    fontWeight: '800',
                }, 
            
            }}/>
        </MyStoreStack.Navigator>
    );
    }

    // calling the navigation.navigate based upon the names in the bottomtabnavigator? 

const Tab = createBottomTabNavigator()

function BottomTabs() {
    return (
        <Tab.Navigator>
        <Tab.Screen name="MyStoreStack" component={MyStoreStackScreen} options=
        {{
            headerShown:false,
            tabBarLabel: 'MyStore',
            tabBarIcon:({tintColor,focused}) => <Icon name='view-dashboard-outline' size={focused ? 30: 20} color={COLORFONTS.primary}/>
        }} />
        <Tab.Screen name="ItemStack" component={ItemStackScreen} options=
        {{
            headerShown:false,
            tabBarLabel: 'Home',
            tabBarIcon:({tintColor,focused}) => <Icon name='home-outline' size={focused ? 30: 20} color={COLORFONTS.primary}
            initialRouteName={DessertPage}
            
            />
        }} />
        <Tab.Screen name="AccountStack" component={AccountStackScreen} options=
        {{
            headerShown:false,
            tabBarLabel: 'Account',
            tabBarIcon:({tintColor,focused}) => <Icon name='account-outline' size={focused ? 30: 20} color={COLORFONTS.primary}/>
        }} />
        </Tab.Navigator>
    );
}
            
const Stack = createNativeStackNavigator();

export default function Router(){

    // const [isSignedIn, setIsSignedIn] = useState(false);

    // return (
    //     <>
    //         {( isSignedIn ? (
    //             <BottomTabs/>
    //         ) : (
    //             <AuthStackScreen/>
    //         ))}
    //     </>
    // );

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* { isSignedIn  ? ( */}
                <Stack.Screen
                        name="Authentication"
                        component={AuthStackScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="BottomTabs"
                        component={BottomTabs}
                        options={{
                            headerShown: false,
                            }}
                    />  
                {/* ) : ( */}
                    
                {/* )} */}
            </Stack.Navigator>
        </NavigationContainer>             
    );
};