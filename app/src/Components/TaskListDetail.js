
import React,{ Component } from 'react'
import {StyleSheet,Text,View,Dimensions,Platform,Image,TouchableOpacity} from 'react-native'
import { Actions } from 'react-native-router-flux'
var deviceWidth = Dimensions.get('window').width
export default class TaskListDetail extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.header}>
                        <View style={styles.backButtonView}>
                            <TouchableOpacity onPress={()=>Actions.pop()} >
                                <Image source={require('../../img/back_button.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.headerTextView}>
                            <Text style={styles.headerText}>{this.props.data.task}</Text>
                        </View>

                        <View style={styles.rightButton}>
                        </View>
                </View>
                        <Text style={styles.textStyle}>{this.props.data.task}</Text>
                        <Text style={styles.textStyle}>{"Created by "}{this.props.data.createdBy}</Text>
                        <Text style={styles.textStyle}>{"Status : " }{this.props.data.status}</Text>
                        <Text style={styles.textStyle}>{"Category : " }{this.props.data.category}</Text>
                        <Text style={styles.textStyle}>{"Priority : " }{this.props.data.priority}</Text>
                        <Text style={styles.textStyle}>{"due on "}{this.props.data.dueDate}</Text>

                   </View>



        );
    }
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#077CE5',
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0,
        elevation: 2,
        width:deviceWidth,
    },
    headerImage :{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: deviceWidth,
        marginTop: (Platform.OS === 'ios') ? 15 : 0,
    },
    backButtonView: {
        flex:1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft:7
    },
    headerTextView: {
        flex:3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText : {
        fontSize:18,
        color: '#fff'
    },
    rightButton : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    textStyle : {
        fontSize:16,
        fontWeight:'bold',
        alignSelf:'flex-start',
        padding:5
    }
})