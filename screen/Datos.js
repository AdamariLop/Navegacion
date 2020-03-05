/* 
      DESARROLLADOR: Sheedyt Adamari López Sarabia
      GRUPO: TI01SM-18
      FECHA: 04 de Marzo de 2020
      DESCRIPCIÓN: La pantalla de Datos, recibe los valores de las variables insertadas por el usuario,
                   por medio de 'this.props.params.'. Éstas son recibidas desde Login.js.
                   El botón cerrar sesión navega a la pantalla de Login.js.
*/

import React, { Component } from 'react';
import { Container, Content, CardItem,Text, Button } from 'native-base';
import {StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class IconTextboxExample extends Component {
    render() {
        const navegar = this.props.navigation;
      return (
        <Container>
          <Content padder contentContainerStyle = {styles.content}>
             <CardItem header bordered>
                <Text style={styles.textCenter}>{this.props.route.params.titulo}</Text>
              </CardItem>
              <CardItem>
              <Text style={styles.textCenter}>Usuario: {this.props.route.params.nombre}</Text>
              </CardItem>
              <CardItem>
              <Text style={styles.textCenter}>Contraseña: {this.props.route.params.contraseña}</Text>
              </CardItem>
              <Button primary style={{justifyContent:'center', marginLeft: '25%', width: 170, margin: 10}}
            onPress={() => navegar.navigate('Login') }>
              <Text>Cerrar sesión</Text></Button>
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
    }
});