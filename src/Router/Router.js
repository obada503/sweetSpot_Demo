import React from 'react'
import Register from '../screens/Register'
import LoginPage from '../screens/Login'
import AccountSettings from '../screens/AccountSettings'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import MyStorePage from '../screens/MyStorePage'
import DessertPage from '../screens/Home'
import ItemPage from '../screens/Item'
import { COLORFONTS } from '../../Constants/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';






const auth = createStackNavigator(
    {
        Login:
        {
            screen: LoginPage,
            navigationOptions: {
                headerShown: false,
            }
        },
        SignUp:
        {
            screen: Register,
            navigationOptions: {
                headerShown: false,
            }
        }
    }

);


const itemstack = createNativeStackNavigator();

function HomeNav(){
    return(
        <NavigationContainer >
            <itemstack.Navigator screenOptions={{
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
                <itemstack.Screen name = 'Home' component = {DessertPage}/>
                <itemstack.Screen name = 'Item' component = {ItemPage}/>
            </itemstack.Navigator>
        </NavigationContainer>
    );
}

const homenav = createStackNavigator(
    {
        //here, creating two route's for the screens to be able to navigate between them 
        home:
        {
            screen: DessertPage 
                 
        },
        item:
        {
            screen: ItemPage
            
        }
    },

    {
        defaultNavigationOptions:
        {
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
            
        }

    }
)


// const itemnav = createStackNavigator(
//     {
//         item:
//         {
//             screen: ItemPage

//         },
         
//     },

//     {
//         defaultNavigationOptions:
//         {
//             headerTitle: 'ItemPage',
//             headerStyle:
//             {
//                 backgroundColor: COLORFONTS.primary
//             },
//             headerTitleStyle:
//             {
//                 color: COLORFONTS.white,
//                 fontWeight: '800',
//             }
//         }

//     }
// ) 

const accountnav = createStackNavigator(
    {
        account:
        {
            screen: AccountSettings

        },   
    },

    {
        defaultNavigationOptions:
        {
            headerTitle: 'SweetSettings',
            headerStyle:
            {
                backgroundColor: COLORFONTS.primary
            },
            headerTitleStyle:
            {
                color: COLORFONTS.white,
                fontWeight: '800',
            }
        }
    }
)

const mystorepagenav = createStackNavigator(
    {
        MyStorePage:
        {
            screen: MyStorePage

        },   
    },

    {
        defaultNavigationOptions:
        {
            headerTitle: 'SweetStore',
            headerStyle:
            {
                backgroundColor: COLORFONTS.primary
            },
            headerTitleStyle:
            {
                color: COLORFONTS.white,
                fontWeight: '800',
            }
        }
    }
)




const tabNavigator = createBottomTabNavigator({


    store:
    {
        screen: mystorepagenav,
        navigationOptions:
        {
            tabBarLabel: 'MyStore',
            tabBarIcon:({tintColor,focused}) => <Icon name='view-dashboard-outline' size={focused ? 30: 20} color={COLORFONTS.primary}/>
        }
    },
    home:
    {
        screen: HomeNav,
        navigationOptions:
        {
            tabBarLabel: 'Home',
            tabBarIcon:({tintColor,focused}) => <Icon name='home-outline' size={focused ? 30: 20} color={COLORFONTS.primary}/>
        },
        //screen: itemnav

    },
    account:
    {
        screen: accountnav,
        navigationOptions:
        {
            tabBarLabel: 'Account',
            tabBarIcon:({tintColor,focused}) => <Icon name='account-outline' size={focused ? 30: 20} color={COLORFONTS.primary}/>
        },
       
    },


    

},{
    initialRouteName: 'home',
    
    tabBarOptions: 
    {
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
        }
    }

}) 

const stack = createSwitchNavigator(
    {
        authStack:
        {
            screen: auth,
            navigationOptions:
            {
                headerShown: false,
            }
        },
        stack:
        {
            screen: tabNavigator,
        },

    }
);

const Router = createAppContainer(stack);


export default Router