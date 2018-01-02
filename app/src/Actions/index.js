
import Services from '../Services/Services';
import {Alert} from 'react-native'
import * as Types from './types';

export const getTasks= (dispatch) => {
    Services.getTask("https://api.myjson.com/bins/i64i5",'GET')
        .then(result =>{
            console.log("Rep",JSON.parse(result._bodyText))
                dispatch({
                    type: Types.TASK_ABLETO_GETDATA,
                    payload: JSON.parse(result._bodyText)
                })
        }).catch((err => {
            dispatch({
                type: Types.TASK_UNABLETO_GETDATA,
                payload: []
            })
            console.log("error",err)
            Alert.alert("Please try again later")
        }))
};