import React, {Component} from 'react'
import {
    Text,View,Alert,
    TouchableOpacity,
    NativeModules
} from 'react-native'

import { requireNativeComponent} from 'react-native';


const RTCustomView = requireNativeComponent('RTCustomView');

const nativeModule = NativeModules.OpenNativeModule;

export  default  class First extends  Component{

    static navigationOptions = ({navigation}) => ({
        header:null,
    });

    constructor() {
        super();
    }


    render(){
        return(
            <View style={{backgroundColor:'white',flex:1}}>

                <RTCustomView  appKey={'你好李迪文'}  style={{width:200,left:100,height:100,top:100,backgroundColor:'green'}}/>

                <TouchableOpacity    style={{flex:1}} onPress ={()=>{this._onPressButton()}}>
                <Text style={{top:100,left:200}}>diyi</Text>
                </TouchableOpacity>
            </View>

        )
     }
     _onPressButton(){
         // nativeModule.openNativeVC();
         // Alert.alert(
         //     'Alert Title',
         //     'alertMessage',
         //     [
         //         {text: 'OK', onPress: () => console.log('OK Pressed!')},
         //     ]
         // )
     }
}
