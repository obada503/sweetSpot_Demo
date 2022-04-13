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

const AuthStack = createNativeStackNavigator();

function AuthStackScreen({isSignedIn}){
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={LoginPage}></AuthStack.Screen>
            <AuthStack.Screen name="Register" component={Register}></AuthStack.Screen>
        </AuthStack.Navigator>
    )
}


const Itemstack = createNativeStackNavigator();

function ItemStackScreen(){
    return(
        
            <Itemstack.Navigator options={{
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
            }}>
                <Itemstack.Screen name = 'Home' component = {DessertPage} options={{headerShown:false}}/>
                <Itemstack.Screen name = 'Item' component = {ItemPage} />
            </Itemstack.Navigator>
        
    );
}

// const AccountStack = createNativeStackNavigator();

// function AccountStackScreen(){
//     return (
//         <AccountStack.Navigator>
//             <AccountStack.Screen name="Login" component={AccountSettings}></AccountStack.Screen>
//         </AccountStack.Navigator>
//     );
//     }
 const MyStoreStack = createNativeStackNavigator();

function MyStoreStackScreen(){
    return (
        <MyStoreStack.Navigator>
            <MyStoreStack.Screen name="MyStore" component={MyStorePage} options={{headerShown:false}}></MyStoreStack.Screen>
        </MyStoreStack.Navigator>
    );
    }


const Tab = createBottomTabNavigator()

function BottomTabs() {
    return (
        <Tab.Navigator>
        <Tab.Screen name="MyStore" component={MyStoreStackScreen} options=
        {{
            tabBarLabel: 'MyStore',
            tabBarIcon:({tintColor,focused}) => <Icon name='view-dashboard-outline' size={focused ? 30: 20} color={COLORFONTS.primary}/>
        }} />
        <Tab.Screen name="Home" component={ItemStackScreen} options=
        {{
            tabBarLabel: 'Home',
            tabBarIcon:({tintColor,focused}) => <Icon name='home-outline' size={focused ? 30: 20} color={COLORFONTS.primary}
            initialRouteName="Home"
            options= 
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
        }} />
        <Tab.Screen name="Account" component={AccountSettings} options=
        {{
            tabBarLabel: 'Account',
            tabBarIcon:({tintColor,focused}) => <Icon name='account-outline' size={focused ? 30: 20} color={COLORFONTS.primary}/>
        }} />
        </Tab.Navigator>
    );
}
            
const Stack = createNativeStackNavigator();

export default function Router(){

    const [isSignedIn, setIsSignedIn] = useState(false);

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
                        name="Home"
                        component={BottomTabs}
                    />  
                {/* ) : ( */}
                    <Stack.Screen
                        name="Authentication"
                        component={AuthStackScreen}
                        options={{
                        headerShown: false,
                        }}
                    />
                {/* )} */}
            </Stack.Navigator>
        </NavigationContainer>             
    );
};