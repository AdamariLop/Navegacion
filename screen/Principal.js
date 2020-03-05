/* 
      DESARROLLADOR: Sheedyt Adamari López Sarabia
      GRUPO: TI01SM-18
      FECHA: 04 de Marzo de 2020
      DESCRIPCIÓN: La pantalla Principal extrae los datos de la API de Star Wars.
                   Dependiendo el nombre de las variables podemos extraer de la API la información.
*/

import React, { Component } from 'react';
import {View,Text, ActivityIndicator, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Usuario extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
    }
  }

  async componentDidMount(){
    try{
      const response = await fetch('https://swapi.co/api/species/?page=1');
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson.results,
      },function(){
      });
    }catch(error){
      console.log(error);
    }
  }

  render(){
    if(this.state.isLoading==true){
      return(
        <View style={{flex:1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return(
      <View style={styles.content}>
        <Text style={styles.textCenter}>Star Wars: Especies</Text>
        <FlatList 
          data={this.state.dataSource}
          renderItem={({item}) => 
            <Text> Especie: {item.name}, Clasificación: {item.classification}</Text>

          }
          keyExtractor = {({name},index)=>name} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    textCenter: {
      textAlign: 'center', // ALINEAR EL TEXTO
      width: '100%', // OCUPAR EL ANCHO DE CARD
      fontSize: 20,
      color: '#F5C00A'
    },
    content: {
        flex: 1,
        justifyContent: 'center', // CENTRAR CONTENIDO
      }
});

export default Usuario;