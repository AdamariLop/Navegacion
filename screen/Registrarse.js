/* 
      DESARROLLADOR: Sheedyt Adamari López Sarabia
      GRUPO: TI01SM-18
      FECHA: 04 de Marzo de 2020
      DESCRIPCIÓN: La pantalla Registrarse solo permite al usuario enlazarse a la página de inicio de
                   Facebook y Twitter, además de regresar a la pantalla de Login.
*/

import React, { Component } from 'react';
import { Container, Card, Content,  Body, Text, Button, Item, CardItem, Input, Icon} from 'native-base';
import { StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class Registro extends Component {

constructor(props) {
  super(props)
  this.state = {
    user: '',
    pass: '',
    correo: ''
  }
}
 
 UserRegistrationFunction = () =>{
  
  const { user }  = this.state ;
  const { pass }  = this.state ;
  const { correo }  = this.state ;

 fetch('/api/registro.php', {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
     user: user,
     pass: pass,
     correo: correo
   })
 }).then((response) => response.json())
       .then((responseJson) => {
 // Showing response message coming from server after inserting records.
         Alert.alert(responseJson);
       }).catch((error) => {
         console.error(error);
       });
   }

  render(){
    const navegar = this.props.navigation;
    return (
      <Container>
      <Content padder contentContainerStyle={styles.content}>
        <Card>
          <CardItem header bordered>
            <Text style={styles.textCenter}>
              {this.props.route.params.titulo}
            </Text>
          </CardItem>
          <Item>
            <Text style={styles.textCenter}>Registrarse con una Red Social o Email</Text>
          </Item>
          <Item>
            <Button primary style={styles.boton_red} onPress={() => Linking.openURL('http://facebook.com')}>
              <Icon type='AntDesign' name='facebook-square'></Icon></Button>
            <Button info style={styles.boton_red}><Icon type='FontAwesome' name='twitter-square' onPress={() => Linking.openURL('https://twitter.com/login?lang=es')}></Icon></Button>
          </Item>
          <CardItem bordered>
            <Body>
              <Text style={styles.textCenter}>o</Text>
              <Item inlineLabel>
                <Icon type='FontAwesome' name='user' />
                  <Input placeholder='Nombre de usuario' onChangeText={(user)=> this.setState({user}) }/>
                </Item>
                <Item inlineLabel last>
                  <Icon type='FontAwesome' name='lock' />
                  <Input placeholder='Contraseña' secureTextEntry={true} onChangeText={(pass)=> this.setState({pass}) }/>
                </Item>
                <Item inlineLabel last>
                  <Icon type='Entypo' name='email' />
                  <Input placeholder='Correo' onChangeText={(correo)=> this.setState({correo}) }/>
                </Item>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Button primary style={styles.boton}
              onPress={this.UserRegistrationFunction}><Text> Registrarse </Text></Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
      );
    }
}

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
    marginLeft: '25%' // AVENTAR DE LADO DERECHO
  },
  boton_red: {
    justifyContent: 'center',
    width: 165.7
  }
});


export default Registro;
