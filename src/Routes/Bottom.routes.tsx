import React from 'react';
import {Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import List from '../pages/ListResults'
import Add from '../pages/AddResults'

const {Navigator,Screen } = createBottomTabNavigator()

const BottomTabs: React.FC = () => {
    return(
        <Navigator
        tabBarOptions={{
            style:{
                elevation:0,
                shadowOpacity:0,
                height:64
            },
            tabStyle:{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:"center"
            },
            iconStyle:{
                flex:0,
                width:20,
                height:20
            },
            labelStyle:{
                fontSize:13,
                marginLeft:16
            },
            inactiveBackgroundColor:'#fafafc',
            activeBackgroundColor:'#ebebf5',
            inactiveTintColor:'#c1bccc',
            activeTintColor:'#FF872C'
                        
        }}
    >
        <Screen 
            options={{
                tabBarLabel:'Listagem',
                tabBarIcon:({color,focused,size})=>{
                    return <Ionicons size={size} color={color} name="ios-list"/>
                }
            }}
            name="Listagem" 
            component={List}
        ></Screen>
        <Screen 
            options={{
                tabBarLabel:'Cadastrar',
                tabBarIcon:({color,focused,size})=>{
                    return <Ionicons size={size} color={color} name="logo-usd"/>
                }
            }}
            name="Cadastrar" 
            component={Add}
        ></Screen>
    </Navigator>
    );
}

export default BottomTabs;