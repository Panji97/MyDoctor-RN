import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MyTabBar} from '../components';
import {
  Splash,
  GetStarted,
  SignIn,
  SignUp,
  UploadPhoto,
  Doctor,
  Message,
  Hospital,
  ListDoctor,
  UserProfile,
  EditProfile,
  DoctorProfile,
  Chating,
} from '../pages';

const Stack = createNativeStackNavigator();
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

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen name="ListDoctor" component={ListDoctor} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
        <Stack.Screen name="Chating" component={Chating} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
