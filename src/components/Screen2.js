import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button, TextInput, Linking } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';




export default function Screen2 ({ navigation }) {
      return (
            <View>
                  <Button title="Proximo"
                  onPress={ () => navigation.navigate('Screen3')} />            
                  <ScrollView>
                        <View style={styles.container}>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>ALLIANZ</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08007222163')}}>08007222163</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>ASPP SERVIDOR PUBLICO DO PARANA</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 41 32591052')}}>(41) 32591052</Text> 
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>BNP PARIBAS CARDIF</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08007250620')}}>08007250620</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>BRADESCO</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08007012704')}}>08007012704 OU 40042757</Text> 
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>BANCO DO BRASIL</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08007297000')}}>08007297000</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>BANCO SANTANDER</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08007705030')}}>08007705030</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>BANCO CAIXA ECONOMICA FEDERAL</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08007222492')}}>08007222492</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>BANCO HSBC</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08007041921')}}>08007041921</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>BANCO ITAU</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08007201010')}}>08007201010 OU 30031010</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>CARDIFE SEGURADORA</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08005454545')}}>08005454545</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>CHUBB SEGURADORA</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 0800165859')}}>0800165859</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}>CASAS BAHIA</Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: 08007100119')}}>08007100119 OU 40034033</Text>
                              </View>
                              <View style={styles.containerBox2}>
                                    <Text style={styles.text}></Text>
                                    <Text style={styles.textNumber} onPress={()=>{Linking.openURL('tel: numero')}}></Text>
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

  });
