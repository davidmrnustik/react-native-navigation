import React from 'react';
import { Button, SafeAreaView, Text, Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const Home = ({ navigation }) => (
  <SafeAreaView>
    <Text>Home screen</Text>
    <Button
      title="Go to details"
      onPress={() => navigation.navigate('Detail')}
    />
  </SafeAreaView>
);

const Details = ({ navigation }) => (
  <SafeAreaView>
    <Text>Details screen</Text>
    <Button
      title="Go to home"
      onPress={() => navigation.goBack()}
    />
  </SafeAreaView>
);

const MainAppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Detail: {
    screen: Details,
    navigationOptions: {
      title: 'Details',
    },
  },
}, {
  transitionConfig: () => {
    return {
      transitionSpec: {
        duration: 750,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: interpolator,
      headerTitleInterpolator: interpolator,
      headerLeftInterpolator: interpolator,
    }
  }
});

const interpolator = (sceneProps) => {
  const { layout, position, scene } = sceneProps;
  const opacity = position.interpolate({
    inputRange: [scene.index - 1, scene.index, scene.index + 1],
    outputRange: [0, 1, 0],
  });
  const scale = position.interpolate({
    inputRange: [scene.index - 1, scene.index, scene.index + 1],
    outputRange: [0.8, 1, 1],
  });
  const height = layout.initHeight;
  const translateY = position.interpolate({
    inputRange: [scene.index - 1, scene.index, scene.index + 1],
    outputRange: [height, 0, 0],
  });

  return {
    opacity,
    transform: [
      { scale },
      { translateY}
    ]
  }
}

export default MainAppStack;