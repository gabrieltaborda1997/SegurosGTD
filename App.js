import 'react-native-gesture-handler';
import  React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen2 from './src/components/Screen2'
import Screen3 from './src/components/Screen3'
import Home from './src/components/Home'


const Stack = createStackNavigator();

export default function Menu (){
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home"> 
    <Stack.Screen name="Seguros" component={Home} options={{
      headerStyle:{
       // backgroundColor: ''
      }
    }}/>
      <Stack.Screen name="Screen2" component={Screen2} options={{ title: "Agenda" }}/>
      <Stack.Screen name="Screen3" component={Screen3} options={{ title: "Agenda 2" }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}