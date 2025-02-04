/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardScreen from '../../screens/dashboard/dashboard';
import StudyScreen from '../../screens/Study/study';
import GameScreen from '../../screens/game/game';
import InterviewScreen from '../../screens/interview/interview';
import UserScreen from '../../screens/user/user';
import {COLORS} from '../../themes/theme';

const Tab = createBottomTabNavigator();

function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Study':
              iconName = 'book-open';
              break;
            case 'Game':
              iconName = 'gamepad-variant';
              break;
            case 'Interview':
              iconName = 'briefcase';
              break;
            case 'User':
              iconName = 'account';
              break;
            default:
              iconName = 'help-circle';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.GREEN,
        tabBarInactiveTintColor: COLORS.LIGHT_WHITE,
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Study" component={StudyScreen} />
      <Tab.Screen name="Game" component={GameScreen} />
      <Tab.Screen name="Interview" component={InterviewScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
}

export default BottomRoutes;
