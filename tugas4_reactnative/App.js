/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import Contents from "./Component/Contents";
import { View,StatusBar} from 'react-native';




export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <Contents/>
      </View>
    )
  }
}
