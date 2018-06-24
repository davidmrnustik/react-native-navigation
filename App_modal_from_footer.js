import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Favorites = ({ navigation }) => (
  <SafeAreaView>
    <Text>Hello from the favorites tab</Text>
    <Button
      title="Open modal"
      onPress={() => navigation.navigate('Modal')}
    />
  </SafeAreaView>
)

const Recents = ({ navigation }) => (
  <SafeAreaView>
    <Text>Hello from the recets tab</Text>
  </SafeAreaView>
)

const MainApp = createBottomTabNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favorites',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="star" size={25} color={tintColor} />,
    },
  },
  New: {
    screen: View,
    navigationOptions: ({ navigation }) => ({
      title: 'New',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="plus" size={25} color={tintColor} />,
      tabBarOnPress: () => {
        navigation.navigate('Modal')
      }
    })
  },
  Recents: {
    screen: Recents,
    navigationOptions: {
      title: 'Recents',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="clock" size={25} color={tintColor} />,
    },
  },
})

const ModalScreen = ({ navigation }) => (
  <SafeAreaView>
    <Button
      title="Close modal"
      onPress={() => navigation.goBack(null)}
    />
  </SafeAreaView>
)

const RootNavigator = createStackNavigator({
  MainApp: {
    screen: MainApp,
  },
  Modal: {
    screen: ModalScreen,
  }
}, {
  mode: 'modal',
  headerMode: 'none',
})

export default RootNavigator;