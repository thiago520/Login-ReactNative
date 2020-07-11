import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,ScrollView, TextInput, AsyncStorage   } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { Hoshi } from 'react-native-textinput-effects';

import {AsyncStorafe} from 'react-native';



export default class Entrar extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            senha: '',

            errorEmail: false,
            errorSenha: false,
        }
    }

    efetuarLogin = () => {
        this.setState({
            errorEmail: this.state.email == "" ? true : false,
            errorSenha: this.state.senha == "" ? true : false,
        });

        if (this.state.errorEmail || this.state.errorSenha) {
            return;
        }

        fetch('http://5f0a21ea5e512a00161c1401.mockapi.io/acesso', {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha
            })
        }).then((response) => response.json()).then((responseJson) => {
            this.saveKey(responseJson.name);
            this.props.navigation.navigate('Inicio');
        })
    }

    async saveKey(valor){
        await AsyncStorage.setItem('@usuario:key', valor);
    }

    errorEmail(){
        if(this.state.errorEmail){
            return(
                <Text style={styles.texto_error}>Ops. Faltou preencher o e-mail</Text>
            );
        }
        return(<Text></Text>);
    }

    errorSenha(){
        if (this.state.errorSenha){
            return(
                <Text style={styles.texto_error}>Ops. Faltou preencher a senha</Text>
            );
        }
        return(<Text></Text>)
    }

    render(){
        return(
            <View>
                <View style={styles.sombra}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Icon size={25} style={{marginTop:30, marginLeft:14, color:'#000000'}} color="#c4c4c4" name="left" />
                    </TouchableOpacity>
                    <Text style={styles.titulo}>Entrar</Text>
                </View>
            
                <ScrollView style={{height:'100%'}}>
                    <Hoshi
                        style={styles.input}
                        label={'E-mail'}
                        borderColor={'#7ac1ba'}
                        autoCompleteType='email'
                        keyboardType='email-address'
                        onChangeText={(text) => { this.setState({email: text}) }}
                    />
                    {this.errorEmail()}

                    <Hoshi
                        style={styles.input}
                        label={'Senha'}
                        borderColor={"#7ac1ba"}
                        caretHidden={true}
                        autoCorrect={false}
                        secureTextEntry={true}
                        keyboardType='email-address'
                        onChangeText={(text) => { this.setState({senha: text}) }}
                    />
                    {this.errorSenha()}
                </ScrollView>
                    
                    <View style={styles.view_botao_login}>
                        <TouchableOpacity style={styles.botao_login} onPress={this.efetuarLogin}>
                            <Text style={styles.texto_login}>Entrar</Text>
                        </TouchableOpacity>
                    </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    sombra:{
        backgroundColor:'#ffffff'
    },

    titulo: {
        fontSize: 32,
        marginTop: 10,
        marginBottom:20,
        fontWeight:'600',
        marginLeft:15,
    },

    view_botao_login: {
        alignSelf:'flex-end',
        position:'absolute',
        top:500,
        flexDirection:'column',
    },

    botao_login: {
        backgroundColor:'#01a862',
        marginLeft:10,
        width:170,
        height:65,
        marginRight:15,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        marginTop:30,
    },

    texto_login: {
        color:'#fff',
        fontWeight:'600',
        fontSize:18
    },

    input:{
        marginHorizontal:15,
    },

    texto_error: {
        color: 'red',
        marginHorizontal:15,
    }

});