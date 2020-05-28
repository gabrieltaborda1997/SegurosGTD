import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button, TextInput, Linking } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

export default function Screen2 ({ navigation }) {
      return (
            <View style={styles.botao}>
                  <Button title="Início"
                  onPress={ () => navigation.navigate('Seguros')} />           
                <ScrollView>
                        <View style={styles.container}>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>HDI SEGUROS</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 30031434')}}>30031434</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>ICATU SEGUROS (SICREDI, SICOOB)</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 40020040')}}>40020040</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>LIBERTY SEGUROS</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08007261981')}}>08007261981</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>MAPFRE</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08007757196')}}>08007757196</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>MET LIFE</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 30035433')}}>30035433</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>MARITIMA</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08000162727')}}>08000162727 OU 08007070164</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>MONGERAL SEGURADORA</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08000260909')}}>08000260909</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>PREVSUL SEGURADORA</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08007098059')}}>08007098059</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>PORTO SEGURO</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08007279393')}}>08007279393</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>SANCOR SEGUROS</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08002000393')}}>08002000393</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>SOMPO SEGUROS</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08000164949')}}>08000164949</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>TOKIO MARINE</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08007075050')}}>08007075050</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>UNIMED SEGURADORA</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08007270522')}}>08007270522 OU 0800555430</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>ZURICH</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08002854141')}}>08002854141</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}></Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: numero')}}>numero</Text>
                              </View>                        
                        </View>
                  </ScrollView>
            </View>
         )
      }
  
  const styles = StyleSheet.create({
      container: {
          flex:1,
          backgroundColor: '#222222',
      },

      textHeader: {
          fontSize: 40,
          color:'white',
          alignItems:'center',
          justifyContent: 'center',
      },

      text: {
            fontSize: 20,
            color:'white',
           
        },

      textNumber: {
      fontSize: 20,
      color:'grey',
      alignItems: 'center',
      justifyContent: 'center'
      },

      containerBox: {
        width: 412,
        height: 65,
        
      },

      containerBox2: {
        //alignItems:'center',
        justifyContent: 'center',
        width: 412,
        height: 65,
        borderTopWidth: 0.5,
        borderColor: 'white'
      },
      botao: {
          backgroundColor: '#222',
          
      }

  });
