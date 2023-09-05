import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoBeta from './component/InfoBeta';
import List from './component/List';

const StackDemo = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <StackDemo.Navigator  initialRouteName='List' screenOptions={{ headerShown: false }} >
      <StackDemo.Screen name='InfoBeta' component={InfoBeta} options={ {title:'Thư mục'}} />
      <StackDemo.Screen name='List' component={List} options={ {title:'Thư mục'}} />


{/* viết tiếp các màn hình khác vào đây */}
    </StackDemo.Navigator>
</NavigationContainer>
  );
}
