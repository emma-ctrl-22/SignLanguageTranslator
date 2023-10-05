import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen';
import TabTwo from '../screens/TabTwo';
import TabThree from '../screens/TabThree';
const screenOptions={
  tabBarShowLabel:true,
  headerShown:true,
  tabBarStyle:{
    height:"11%",
    position: 'absolute',
    elevation: 0.1,
    backgroundColor:'dodgerblue',
    width:'95%',
    bottom:'2%',
    left:'2%',
    borderRadius:'7%'
  }
}
const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
     initialRouteName='Tabtwo'
     screenOptions={screenOptions}
    >
      <Tab.Screen name="Home" component={Homescreen}/>
      <Tab.Screen name="HTHT" component={TabTwo}/>
      <Tab.Screen name="QR CCODE SCANNER" component={TabThree}/>
    </Tab.Navigator>
  )
}

export default Tabs