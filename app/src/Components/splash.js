"use strict";

import React, { Component } from 'react';
import {View, Platform,Text} from 'react-native';
import { Actions,ActionConst } from 'react-native-router-flux';

export default class CoverPage extends Component {
    componentDidMount() {
        this._splash();
    }

    _splash() {
        setTimeout(() => {
            Actions.TaskList({type: ActionConst.REPLACE});
        },3000)
    }

    render() {
        return <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
            <Text style = {{fontSize:32,fontWeight:'bold',color:'rgb(7,124,229)'}}>Splash</Text>
        </View>
    }
}
