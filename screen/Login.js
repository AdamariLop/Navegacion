/* 
      DESARROLLADOR: Sheedyt Adamari López Sarabia
      GRUPO: TI01SM-18
      FECHA: 04 de Marzo de 2020
      DESCRIPCIÓN: La pantalla Login permite inicia sesión al usuario, anteriormente podíamos mandar los datos
                   del usuario a la pantalla de Datos. Ahora, nos permite navegar a la pantalla Principal
                   para mostrar los datos de API. Esto poniendo un ActivityIndicator antes para aparentar
                   la carga de la página. Además permite navegar a la pantalla de Registro
*/

import React, { Component } from 'react';
import { Container, Card, Content,  Body, Text, Button, Item, CardItem, Input, Icon, View } from 'native-base';
import { StyleSheet, Modal, ActivityIndicator } from 'react-native';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      nombre:'',
      contraseña:'',
      isloading: true,
    } 
  }
  ShowHideActivityIndicator = () =>{
    const navegar=this.props.navigation;
    if(this.state.isLoading == true)
    {
      this.setState({isLoading: false})
    }
    else
    {
      this.setState({isLoading: true})
      setTimeout(() => {
        navegar.navigate('Principal')
        this.setState({isLoading: false})
      },2000);
    }
  }
  render(){
    const navegar=this.props.navigation;
    return (
      <Container>
      <Content padder contentContainerStyle={styles.content}>
        <Card>
        {
                this.state.isLoading ?  
                <Modal
                  transparent = {true} 
                  animationType = {'none'} 
                  visible = {this.state.isloading}> 
                    <View style = {styles.modalBackground}> 
                      <View style = {styles.activityIndicator}> 
                        <ActivityIndicator style={{padding: 20}}/> 
                      </View> 
                    </View> 
                </Modal> : null
              }
          <CardItem header bordered>
            <Text style={styles.textCenter}>Inicio de sesión</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Item inlineLabel>
                <Icon type='FontAwesome' name='user' />
                  <Input placeholder='Nombre de usuario' value={this.state.nombre} onChangeText={(nombre)=> this.setState({nombre}) }/>
                </Item>
                <Item inlineLabel last>
                  <Icon type='FontAwesome' name='lock' />
                  <Input placeholder='Contraseña' secureTextEntry={true} value={this.state.contraseña} onChangeText={(contraseña)=> this.setState({contraseña}) }/>
                </Item>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Button primary style={styles.boton} onPress={this.ShowHideActivityIndicator}>
              <Text> Entrar </Text></Button>
          </CardItem>
            <Button primary style={{justifyContent:'center', marginLeft: '30%', width: 150}}
            onPress={() => navegar.navigate('Registro', { 
              titulo: 'Registro de usuario'
              }) }>
              <Text>Registrarse</Text></Button>
        </Card>
      </Content>
    </Container>
    ); //END RETURN
  } //END RENDER
}; //END CLASS*

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center', // CENTRAR CONTENIDO
  },
  textCenter: {
    textAlign: 'center', // ALINEAR EL TEXTO
    width: '100%' // OCUPAR EL ANCHO DE CARD
  },
  boton: {
    marginLeft: '36%', // AVENTAR DE LADO DERECHO
  },
  modalBackground : {
    flex : 1 ,
    alignItems : 'center' ,
    flexDirection : 'column' ,
    justifyContent : 'space-around' ,
    backgroundColor : '#EEEBE1'
  } ,
  activityIndicator : {
    backgroundColor : '#FFFFFF' ,
    height : 100 ,
    width : 100 ,
    borderRadius : 10 ,
    display : 'flex' ,
    alignItems : 'center' ,
    justifyContent : 'space-around'
  }
});


export default Login;