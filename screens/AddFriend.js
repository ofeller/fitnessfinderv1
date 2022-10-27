import React from 'react';
import {Image} from 'react-native';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, Alert, TouchableOpacity, Button, TextInput, View} from 'react-native';
//import {Overlay} from 'react-native-elements';
import UserProfile from '../resources/UserProfile';

// function AddFriend(){

// return(
          // <View style={{alignItems: 'center', padding: 10, paddingTop: 20 }}>
          // <Text style={{fontSize: 28, fontFamily: 'Arial', fontWeight: '600'}}>FitnessFinder</Text>
          // <Text style={{fontSize: 18, fontFamily: 'Arial', fontWeight: '400', paddingVertical:10}}>Your workout friends!</Text>
          // <View style ={{padding: 10}}>
          //   <TouchableOpacity style ={{backgroundColor: '#575757', borderRadius: 10, paddingVertical: 5}}>
          //       <Text style = {{fontSize: 24, fontFamily: 'Arial', fontWeight: '600', color:"#ffffff", textAlign:'center'}}
          //       onPress>Sync your contacts for more workout buddies!</Text>
          //   </TouchableOpacity>
          // </View>
          //   <View style={{paddingBottom: 10}}>
          //     <UserProfile></UserProfile>
          //   </View>
          // </View>
        
//           )
// }

export default class AddFriend extends React.Component {
  state={
    isVisible:false
  }

  renderResults=() =>{ 
    this.setState({
      isVisible:!this.state.isVisible
    })
  } 

  //{this.state.isVisible?<UserProfile/>:null}
//onPress={ this.renderResults}

  render() { 
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        {this.state.isVisible?<UserProfile/>:null}
        <Button onPress={ this.renderResults} 
          title="Tap here to sync your contacts! You'll have more friends to workout with." 
          color="#489fb5" /> 
    </View> 
    );
   }
}

//export default AddFriend