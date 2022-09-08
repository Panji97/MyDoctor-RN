import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Doctor, Message, Hospital} from '../../pages';
import MyTabBar from './MyTabBar';
// import {MyTabBar} from '../molecules';

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Doctor" component={Doctor} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Hospital" component={Hospital} />
    </Tab.Navigator>
  );
};

export default MainApp;
