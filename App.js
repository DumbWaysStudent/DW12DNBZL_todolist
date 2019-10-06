/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text,View,StyleSheet,TextInput,Button,CheckBox } from 'react-native';
import { black } from 'ansi-colors';


export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      todos : ['Work','Swim','Study','Sleep','Run'],
      checked : true
    }
  }
  onRemoveItem = i => {
    this.setState(state => {
      const todos = state.todos.filter((todo, j) => i !== j);
      return {
        todos,
      };
    });
  };

  onChangeCheck = (todo) => {
    const checkCopy = {...this.state.checked}
    if (checkCopy[todo]) checkCopy[todo] = false;
    else checkCopy[todo] = true;
    this.setState({ checked: checkCopy});
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
          onPress={(value) => this.setState({todo : this.state.todos.push(this.state.string)})}
          >
          </Button>
        </View>
        <View>
        {this.state.todos.map((todo,index)=>{
          return (
          <View style={styles.fixToText}>
            <CheckBox
              value = {this.state.checked[index]}
              onChange = {() => this.onChangeCheck(index)}
            />
          <Text style = {styles.text} key = {todo}>{todo}</Text> 
          <Button title="Delete" onPress={() => this.onRemoveItem(index)}
           ></Button>
          </View>
            )
        }
        )}
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
       paddingTop:5,
       width : 200
    },
    fixToText: {
      flexDirection: 'row',
      alignContent: 'stretch',
      paddingHorizontal: 5
    },
    justText: {
      flexDirection: 'row',
      alignContent: 'stretch',
      paddingHorizontal: 5,
      width: 150
    },
 })