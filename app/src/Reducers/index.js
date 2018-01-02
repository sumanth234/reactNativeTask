
import { ActionConst } from 'react-native-router-flux';
import { combineReducers } from 'redux';
import * as Types from '../Actions/types'
const INITIALSTATE = {
    taskSuccessData : [],
    taskFailureData : [],
    taskType : true ,

}
const sceneReducer = (state = {}, {type, scene}) => {
    switch(type){
        case ActionConst.FOCUS:
            return { ...state, scene };
        default:
            return state;
    }
}
const taskReducer = (state = INITIALSTATE, {type,payload}) => {
    switch(type){
        case Types.TASK_ABLETO_GETDATA:
            return { ...state, taskSuccessData: payload ,taskType:false}
        case Types.TASK_UNABLETO_GETDATA:
            return { ...state, taskFailureData:payload,taskType:true}
        default:
            return state
    }
}

export default combineReducers({
    scene:sceneReducer,
    taskLib:taskReducer,
})
