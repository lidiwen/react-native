import React, { Component } from 'react'
import {
    Text,
} from 'react-native'


export  default  class second extends  Component{

    static navigationOptions = ({navigation}) => ({
        header:null,
    });

    constructor() {
        super();
    }
    render(){
        return(
            <Text>diyi</Text>
        )
    }
}