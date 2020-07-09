import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {CreateMaterialTopTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator} from "react-navigation-stack";
import Icon from 'react-native-vector-icons/AntDesign';

import Inicio from './pages/inicio';
import Cards from './pages/cards';
import Lojas from './pages/lojas';
import Configuracoes from './pages/configuracoes';

import Entrar from './pages/entrar';
import Mensagens from './pages/mensagens';


export default class Routes extends Component{
    render(){
        return(
            <View style={styles.container}>
                <AppTabNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        marginBottom:10,
        marginTop:40,
    }
});

const inicioStack = createStackNavigator({
    Inicio: {
        screen: Inicio,
        navigationOptions: {
            title: 'Inicio',
            header: null
          },
    },
    Entrar: {
        screen: Entrar,
        navigationOptions: {
            title: 'Inicio',
            header: null 
          },
    },
    Mensagens: Mensagens
});

const AppTabNavigator = createAppContainer(
    createMaterialTopTabNavigator(
        {
            Inicio:{
                screen: inicioStack,
                navigationOptions:{
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <Icon size={25} color="#01a862" name="star" />
                        }
                        return <Icon size={25} color="#c4c4c4" name="star" />
                    }
                }
            },
            Cards:{
                screen: Cards,
                navigationOptions:{
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <Icon size={25} color="#01a862" name="creditcard" />
                        }
                        return <Icon size={25} color="#c4c4c4" name="creditcard" />
                    }
                }
            },
            Lojas:{
                screen: Lojas,
                navigationOptions:{
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <Icon size={25} color="#01a862" name="shoppingcart" />
                        }
                        return <Icon size={25} color="#c4c4c4" name="shoppingcart" />
                    }
                }
            },
            Configuracoes:{
                screen: Configuracoes,
                navigationOptions:{
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <Icon size={25} color="#01a862" name="setting" />
                        }
                        return <Icon size={25} color="#c4c4c4" name="setting" />
                    },
                    title:'Config.'
                }
            }
        }, 
        {
            tabBarPosition: 'bottom',
            initialRouteName:'Inicio',

            tabBarOptions:{
                showIcon:true,
                showLabel:true,
                activeTintColor:'#01a862',
                inactiveTintColor:'#c4c4c4',
                style:{
                    backgroundColor:'#ffffff',
                    borderTopWidth:1,
                    shadowRadius:8,
                    shadowOpacity:8,
                    shadowColor:'#000000'
                },
                upperCaseLabel:false,
                indicatorStyle:{
                    backgroundColor:'#ffffff'
                }
            }
        }
    )
);