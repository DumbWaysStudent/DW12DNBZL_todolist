/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text,View,StyleSheet,TextInput,Button } from 'react-native';
import { black } from 'ansi-colors';


export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      todos : ['Work','Swim','Study','Sleep','Run']
    }
  }
  render() {

    return (
      <View style= {styles.container}>
        <View style={styles.fixToText}>
          <TextInput style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 2 ,alignItems: 'stretch'}}
          placeholder="type new todo..."
          onChangeText={(value) => this.setState({string : value})}
          value={this.state.string}
          />
          <Button title="Add" style={{paddingHorizontal: 1}}
          onPress={(value) => this.setState({cars : this.state.todos.push(this.state.string)})}
          >
          </Button>
        </View>
        <View>
        {this.state.todos.map((todo)=>{
          return <Text style = {styles.text}>{todo}</Text>
        })}
        </View>
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
    },
    fixToText: {
      flexDirection: 'row',
      alignContent: 'stretch',
      paddingHorizontal: 3
    },
 })