/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text,View,StyleSheet } from 'react-native';
import { black } from 'ansi-colors';


export default class App extends Component{

  render() {
    const todos = ['Work','Swim','Studys','Sleep','Run'];

    return (
      <View style= {styles.container}>
        
        {todos.map((todo)=>{
          return <Text style = {styles.text}>{todo}</Text>
        })}
      </View>
    )
  }
};

const styles = StyleSheet.create ({
    container: {
       padding: 10,
       marginTop: 3,
    },
    text: {
       color: '#4f603c',
       borderBottomColor: 'black',
       borderBottomWidth: 2,
       paddingBottom: 5,
       paddingTop:5
    }
 })