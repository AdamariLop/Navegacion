/* 
      DESARROLLADOR: Sheedyt Adamari López Sarabia
      GRUPO: TI01SM-18
      FECHA: 04 de Marzo de 2020
      DESCRIPCIÓN: La pantalla principal permite navegar entre las diferentes pantallas secundarias,
                   con ayuda del componente 'NavigationContainer'.
*/

import React from 'react';
import Login from './screen/Login';
import Registro from './screen/Registrarse';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Datos from './screen/Datos';
import Principal from './screen/Principal';

const Stack = createStackNavigator();

const App:() => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name='Principal' component={Principal} />
        <Stack.Screen name='Datos' component={Datos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;