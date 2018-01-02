
import React,{ Component } from 'react'
import {StyleSheet,Text,View,TouchableOpacity,Dimensions,ScrollView,ActivityIndicator,Platform,Image} from 'react-native'
import Services from '../Services/Services';
import { getTasks }  from '../Actions/index';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import * as _ from 'lodash'
var deviceWidth = Dimensions.get('window').width
class TaskList extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.getTasks()
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.header}>
                    <View style={styles.backButtonView}>
                    </View>

                    <View style={styles.headerTextView}>
                        <Text style={styles.headerText}>Task List</Text>
                    </View>

                    <View style={styles.rightButton}>
                    </View>
                </View>
               {this.props.taskType?

                <View >
                    <ActivityIndicator
                        animating={this.state.showProgress}
                        style={styles.loader}
                        size="large"
                    />
                </View>
                :
                <ScrollView >
                    { _.map(this.props.taskSuccessData,(rowData) => {
                        console.log("rowData.taskList",rowData.taskList)
                        return _.map(rowData.taskList, (dataList) => {
                            console.log("dataList", dataList)
                            return (
                            <TouchableOpacity onPress = {() => Actions.TaskListDetail({data:dataList})} style={styles.mainButton}>
                                <View>
                                    <Text style={{fontSize:18,fontWeight:'bold'}}>{dataList.task}</Text>
                                    <Text>{"created by "} {dataList.createdBy}</Text>
                                    <View style={{justifyContent:'flex-start',flexDirection:'row'}}>
                                        <Text style={{fontSize:14,fontWeight:'bold',borderWidth:1,borderRadius:5,padding:2}}>{dataList.status}</Text>
                                    </View>
                                    <View style={{justifyContent:'flex-end',paddingTop:2,paddingBottom:2,paddingLeft:10}}><Text>{"due on "}{dataList.dueDate}</Text></View>
                                </View>
                            </TouchableOpacity>
                            )

                    })

                    })
                    }
                </ScrollView>
            }</View>



        );
    }
}

const styles = StyleSheet.create({
    mainButton:{
        borderWidth:2,
        borderColor:'black',
        borderRadius:12,
        justifyContent: 'center',
        alignItems: 'flex-start',
        height:150,
        padding:10,
        margin:10
    },
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
        width:deviceWidth
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
        justifyContent: 'center'
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
    loader:{
        marginTop:20
    },
})

const mapDispatchToProps = dispatch => {
    return ({
        getTasks() { getTasks(dispatch) },
    })
}

const mapStateToProps = ({  taskLib }) => {

    const {taskSuccessData,taskFailureData,taskType} = taskLib
    return {taskSuccessData,taskFailureData,taskType}

}
export default connect(mapStateToProps,mapDispatchToProps)(TaskList)