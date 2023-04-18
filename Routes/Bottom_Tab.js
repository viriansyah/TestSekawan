import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../Pages/List';
import Detail from '../Pages/Detail';
import Profile from '../Pages/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home_Stack(){
    return(
        <Stack.Navigator
        initialRouteName='list'>
            <Stack.Screen
            name='list'
            component={List}
            options={{ title: 'List Data' }}/>

            <Stack.Screen
            name='detail'
            component={Detail}
            options={{ title: 'Detail Data' }}/>
        </Stack.Navigator>
    )
}

function Profile_Stack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='profile'
            component={Profile}
            options={{ title: 'Profile User' }}/>
        </Stack.Navigator>
    )
}

function Bottom_Tab(){
    return(
        <Tab.Navigator
        initialRouteName='Home_Stack'>
            <Tab.Screen
            name='Home_Stack'
            component={Home_Stack}
            options={{headerShown:false,
                tabBarLabel: 'List Data',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                  ),}}/>
            <Tab.Screen
            name='Profile_Stack'
            component={Profile_Stack}
            options={{headerShown:false,
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-outline" color={color} size={size} />
                  )}}/>
        </Tab.Navigator>
    )
}

export default Bottom_Tab;