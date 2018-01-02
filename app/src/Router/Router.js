
import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import TaskList from '../Components/TaskList'
import TaskListDetail from '../Components/TaskListDetail'

const Scenes = Actions.create(
    <Scene key="Main">
        <Scene
            key='TaskList'
            component={TaskList}
            hideNavBar={true}
            title="Login"
            initial
             />
        <Scene
            key='TaskListDetail'
            component={TaskListDetail}
            hideNavBar={true}
            title = "Home"
            />
    </Scene>
)



const ConnectedRouter = connect()(Router);

const RouterComponent = () => {
    return (
        <ConnectedRouter scenes={Scenes} />
    );
};

export default RouterComponent;