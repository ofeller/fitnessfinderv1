import * as React from 'react';
import {Image} from 'react-native';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, Alert, TouchableOpacity, Button, TextInput, View } from 'react-native';

const Circle = (props: any) => {
    const size =  50;
    const style = {
      borderRadius: size / 2,
      backgroundColor: '#ffffff',
      width: size,
      height: size,
      margin: 1,
      marginRight: 100
    };
    return <View style={style} />;
}

function UserProfile(){
    return(
    <View>
    <View style = {{padding: 5}}>
        <TouchableOpacity style={{ backgroundColor: '#489fb5', borderRadius: 10, paddingVertical: 5}}>
            <View style = {{flexDirection: 'row'}}>
                <View style ={{paddingLeft: 5}}><Circle></Circle></View>
                <View style = {{flexDirection: 'column', paddingTop:8, flex:0, paddingRight: 20 }}>
                    <Text style = {{fontSize: 16, fontFamily: 'Arial', fontWeight: '600', color:"#ffffff"}}>Name: Omar Maslamani</Text>
                    <Text style = {{fontSize: 16, fontFamily: 'Arial', fontWeight: '600', color:"#ffffff"}}>Username: omareos1</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
    
    <View style = {{padding: 5}}>
    <TouchableOpacity style={{ backgroundColor: '#489fb5', borderRadius: 10, paddingVertical: 5}}>
        <View style = {{flexDirection: 'row'}}>
            <View style ={{paddingLeft: 5}}><Circle></Circle></View>
            <View style = {{flexDirection: 'column', paddingTop:8, flex:0, paddingRight: 20 }}>
                <Text style = {{fontSize: 16, fontFamily: 'Arial', fontWeight: '600', color:"#ffffff"}}>Name: Steven Miltenberger</Text>
                <Text style = {{fontSize: 16, fontFamily: 'Arial', fontWeight: '600', color:"#ffffff"}}>Username: smliten04</Text>
            </View>
        </View>
    </TouchableOpacity>
    </View>

    <View style = {{padding: 5}}>
    <TouchableOpacity style={{ backgroundColor: '#489fb5', borderRadius: 10, paddingVertical: 5}}>
        <View style = {{flexDirection: 'row'}}>
            <View style ={{paddingLeft: 5}}><Circle></Circle></View>
            <View style = {{flexDirection: 'column', paddingTop:8, flex:0, paddingRight: 20 }}>
                <Text style = {{fontSize: 16, fontFamily: 'Arial', fontWeight: '600', color:"#ffffff"}}>Name: Olivia Feller</Text>
                <Text style = {{fontSize: 16, fontFamily: 'Arial', fontWeight: '600', color:"#ffffff"}}>Username: olivia11</Text>
            </View>
        </View>
    </TouchableOpacity>
    </View>

    
    <View style = {{padding: 5}}>
    <TouchableOpacity style={{ backgroundColor: '#489fb5', borderRadius: 10, paddingVertical: 5}}>
        <View style = {{flexDirection: 'row'}}>
            <View style ={{paddingLeft: 5}}><Circle></Circle></View>
            <View style = {{flexDirection: 'column', paddingTop:8, flex:0, paddingRight: 20 }}>
                <Text style = {{fontSize: 16, fontFamily: 'Arial', fontWeight: '600', color:"#ffffff"}}>Name: Nathalie Arana</Text>
                <Text style = {{fontSize: 16, fontFamily: 'Arial', fontWeight: '600', color:"#ffffff"}}>Username: pillowhugger00</Text>
            </View>
        </View>
    </TouchableOpacity>
    </View>

    <View style = {{padding: 5}}>
    <TouchableOpacity style={{ backgroundColor: '#489fb5', borderRadius: 10, paddingVertical: 5}}>
        <View style = {{flexDirection: 'row'}}>
            <View style ={{paddingLeft: 5}}><Circle></Circle></View>
            <View style = {{flexDirection: 'column', paddingTop:8, flex:0, paddingRight: 0 }}>
                <Text style = {{fontSize: 16, fontFamily: 'Arial', fontWeight: '600', color:"#ffffff"}}>Name: Ferkus Finglet</Text>
                <Text style = {{fontSize: 16, fontFamily: 'Arial', fontWeight: '600', color:"#ffffff"}}>Username: ferkusTheGreat22</Text>
            </View>
        </View>
    </TouchableOpacity>
    </View>

    </View>
    )
}


export default UserProfile;
