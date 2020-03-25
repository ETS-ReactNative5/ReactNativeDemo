import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  StackActions,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Splash from './screens/Splash';
import Auth from './screens/Auth';

//TODO old screens, should be removed before release
import Header from './components/Header';
import {
  getNavbarBrowseIcon,
  getNavbarExploreIcon,
  getNavbarLibraryIcon,
} from './utils/icons';
import {getFontStyleObject} from './utils/font';
import {fromRightWithFade} from './utils/navigation';
import Routes from './Routes';
import Theme from './Theme';
import Main from './screens/Main';

export default {
  Splash: 'Splash',
  AuthStack: 'AuthStack',
  HomeStack: 'HomeStack',

  Auth: 'Auth',
  Main: 'Main',

  Settings: 'Settings',
  MovieListScreen: 'MoviesListScreen',
  MovieDetailsScreen: 'MovieDetailsScreen',

  BottomTabs: 'BottomTabs',
};

const defaultHeaderObject = {
  header: props => <Header scene={props.scene} />,
};

const createDefaultStackNavigator = (screensObject, customOptions) =>
  createStackNavigator(screensObject, {
    defaultNavigationOptions: {...defaultHeaderObject},
    cardStyle: {
      backgroundColor: '#000',
    },
    headerMode: 'screen',
    transitionConfig: () => fromRightWithFade(),
    ...customOptions,
  });

const AuthStack = createDefaultStackNavigator({
  [Routes.Auth]: {screen: Auth},
});

const HomeStack = createStackNavigator({
  [Routes.Main]: {screen: Main},
});

export const RootStack = createAppContainer(
  createSwitchNavigator({
    [Routes.Splash]: {screen: Splash},
    [Routes.AuthStack]: {screen: AuthStack},
    [Routes.HomeStack]: {screen: HomeStack},
  }),
);
