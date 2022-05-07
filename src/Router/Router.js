import React, { useState } from 'react'
import Register from '../screens/Register'
import LoginPage from '../screens/Login'
import AccountSettings from '../screens/AccountSettings'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator, createTabNavigator } from '@react-navigation/bottom-tabs'
import MyStorePage from '../screens/MyStorePage'
import DessertPage from '../screens/Home'
import ItemPage from '../screens/Item'
import SellerPage from '../screens/SellerPage'
import MyFavorities from '../screens/MyFavorities'
import MyFavouriteList from '../screens/MyFavouriteList'
import ItemDb from '../screens/ItemDb'

import { COLORFONTS } from '../../Constants/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import EditAccountSettings from '../screens/EditAccountSettings'
import EditAccount from '../screens/EditAccountSettings'

const AuthStack = createNativeStackNavigator();

function AuthStackScreen({ isSignedIn }) {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={LoginPage}
                options={{ headerShown: false, }}></AuthStack.Screen>
            <AuthStack.Screen name="Register" component={Register}
                options={{ headerShown: false, }}></AuthStack.Screen>
        </AuthStack.Navigator>
    )
}


const Itemstack = createNativeStackNavigator();

function ItemStackScreen() {
    return (

        <Itemstack.Navigator  >
            <Itemstack.Screen name="DessertPage" component={DessertPage} options=
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

                }} />
            <Itemstack.Screen name='Item' component={ItemPage} options=
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

                }} />

            <Itemstack.Screen name='ItemDb' component={ItemDb} options=
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

                }} />

        </Itemstack.Navigator>





    );
}

const AccountStack = createNativeStackNavigator();

function AccountStackScreen() {
    return (
        <AccountStack.Navigator >
            <AccountStack.Screen name='Account' component={AccountSettings} options=
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

            <AccountStack.Screen name='EditAccountSettings' component={EditAccount} options=
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
                    headerTitle: 'Edit SweetSettings',
                    headerStyle:
                    {
                        backgroundColor: COLORFONTS.primary
                    },
                    headerTitleStyle:
                    {
                        color: COLORFONTS.white,
                        fontWeight: '800',
                    },

                }} />
        </AccountStack.Navigator>
    );
}
const MyStoreStack = createNativeStackNavigator();

function MyStoreStackScreen() {
    return (
        <MyStoreStack.Navigator>
            <MyStoreStack.Screen name='MyStore' component={MyStorePage} options=
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



            <MyStoreStack.Screen name='Item' component={ItemPage} options=
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

                }} />

            <MyStoreStack.Screen name='SellerPage' component={SellerPage} options=
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

                }} />


            <MyStoreStack.Screen name='MyFavorities' component={MyFavorities} options=
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
                    headerTitle: 'Add Favorities Item',
                    headerStyle:
                    {
                        backgroundColor: COLORFONTS.primary
                    },
                    headerTitleStyle:
                    {
                        color: COLORFONTS.white,
                        fontWeight: '800',
                    },

                }} />

            <MyStoreStack.Screen name='MyFavouriteList' component={MyFavouriteList} options=
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
                    headerTitle: 'Favorities Item List',
                    headerStyle:
                    {
                        backgroundColor: COLORFONTS.primary
                    },
                    headerTitleStyle:
                    {
                        color: COLORFONTS.white,
                        fontWeight: '800',
                    },

                }} />
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
                    headerShown: false,
                    tabBarLabel: 'MyStore',
                    tabBarIcon: ({ tintColor, focused }) => <Icon name='view-dashboard-outline' size={focused ? 30 : 20} color={COLORFONTS.primary} />
                }} />
            <Tab.Screen name="ItemStack" component={ItemStackScreen} options=
                {{
                    headerShown: false,
                    initialRouteName: { DessertPage },
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ tintColor, focused }) => <Icon name='home-outline' size={focused ? 30 : 20} color={COLORFONTS.primary}
                    />
                }} />
            <Tab.Screen name="AccountStack" component={AccountStackScreen} options=
                {{
                    headerShown: false,
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ tintColor, focused }) => <Icon name='account-outline' size={focused ? 30 : 20} color={COLORFONTS.primary} />
                }} />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

export default function Router() {

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