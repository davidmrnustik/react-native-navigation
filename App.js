import React from 'react';
import { Button, SafeAreaView, Text, Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const Foo = ({ navigation }) => (
  <SafeAreaView>
    <Text>Foo screen</Text>
    <Button
      title="Go to bar"
      onPress={() => navigation.navigate('Bar')}
    />
  </SafeAreaView>
);

const Bar = ({ navigation }) => (
  <SafeAreaView>
    <Text>Bar screen</Text>
    <Button
      title="Go to baz"
      onPress={() => navigation.navigate('Baz')}
    />
    <Button
      title="Replace with baz"
      onPress={() => navigation.dispatch(replaceCurrentScreen('Baz'))}
    />
  </SafeAreaView>
);

const Baz = ({ navigation }) => (
  <SafeAreaView>
    <Text>Baz screen</Text>
    <Button
      title="Go back"
      onPress={() => navigation.goBack()}
    />
  </SafeAreaView>
);

const MainAppStack = createStackNavigator({
  Foo: {
    screen: Foo,
    navigationOptions: {
      title: 'Foo',
    },
  },
  Bar: {
    screen: Bar,
    navigationOptions: {
      title: 'Bar',
    },
  },
  Baz: {
    screen: Baz,
    navigationOptions: {
      title: 'Baz',
    },
  },
});

const replaceCurrentScreen = (routeName, params = {}) => ({
  type: 'ReplaceCurrentScreen',
  routeName,
  params,
})

const prevGetStateForAction = MainAppStack.router.getStateForAction;
MainAppStack.router.getStateForAction = (action, state) => {
  if (state && action.type === 'ReplaceCurrentScreen') {
    const routes = state.routes.slice(0, state.routes.length - 1);
    routes.push(action);

    // returns a new navigation state
    return {
      ...state,
      routes,
      index: routes.length - 1,
    }
  }
  return prevGetStateForAction(action, state);
}

export default MainAppStack;