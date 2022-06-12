import React, {useState} from 'react'
import { View } from 'react-native';
import {BottomNavigation, Text } from 'react-native-paper'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwsome from 'react-native-vector-icons/FontAwesome'


import Home from '../screens/Home'
import WishList from '../screens/WishList'
import Chart from '../screens/Chart'
import Profile from '../screens/Profile'



const Tab = createBottomTabNavigator() 

// const Home = () => <Text>Coba</Text>

const RouteNavigation = () => {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
      {key:'home', title:'Home', icon: 'knife-military', color: '#3F51B5'},
      {key:'wishlist', title:'Wishlist', icon: 'account-arrow-right', color: '#009688'},
      {key:'profile', title:'Profile', icon: 'account-plus',  color: '#795548' }
  ])
  const renderScene = BottomNavigation.SceneMap({ home: Home, wishlist: WishList, profile: Profile, });
  

  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={({route, navigation}) => {
      console.log(navigation)
      return {
        tabBarActiveTintColor: 'red',
        headerShown: false,
        tabBarStyle:{
          paddingBottom:10,
          borderRadius:50,
          height:70,
          marginBottom:10,
          position:'absolute'
        }
      }
    }}   >
      <Tab.Screen name='Home' component={Home} options={({route, navigation}) => {
        return{
          tabBarIcon: ({focused, color, size}) => (<Ionicons name={focused?'home':'home-outline'} color={color} size={size}/>),
          tabBarLabel:'HOME',
          
        }
      }} />
      <Tab.Screen name='WishList' component={WishList} options={({route, navigation}) => {
        return{
          tabBarIcon: ({focused, color, size}) => (<Ionicons name={focused?'heart':'heart-outline'} color={color} size={size}/>),
          tabBarLabel:'Wishlist'
        }
      }} />
      <Tab.Screen name='Chart' component={Chart} options={({route, navigation}) => {
        return{
          tabBarIcon: ({focused, color, size}) => (<Ionicons name={focused?'cart':'cart-outline'} color={color} size={size}/>)
        }
      }} />
      <Tab.Screen name='Profile' component={Profile} options={({route, navigation}) => {
        return{
          tabBarIcon: ({focused, color, size}) => (<FontAwsome name={focused?'user':'user-o'} color={color} size={size}/>)
        }
      }} />
    </Tab.Navigator>
     ///<BottomNavigation 
      //  navigationState={{index, routes}}
      //  onIndexChange={setIndex}
      //  renderScene={renderScene}
     ///> 
  )
}

export default RouteNavigation