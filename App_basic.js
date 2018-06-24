import React from 'react';
import { Button, SafeAreaView, View, Modal, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const Home = ({ navigation, screenProps }) => (
  <SafeAreaView>
    <Button
      title="Go to details"
      onPress={() => navigation.navigate('Details')}
    />
    <Button
      title="Go to modal"
      onPress={() => screenProps.changeModalVisibility(true)}
    />
  </SafeAreaView>
);

const Details = ({ navigation }) => (
  <SafeAreaView>
    <Button
      title="Go to modal"
      onPress={() => screenProps.changeModalVisibility(true)}
    />
  </SafeAreaView>
);

const ModalScreen = ({ navigation }) => (
  <SafeAreaView>
    <Button
      title="Close modal"
      onPress={() => navigation.goBack(null)}
    />
  </SafeAreaView>

)

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
});

const RootNavigator = createStackNavigator({
  MainApp: {
    screen: MainAppStack,
  },
  Modal: {
    screen: ModalScreen,
  },
}, {
  headerMode: 'none',
  mode: 'modal',
})

class App extends React.Component {
  state = {
    modalVisible: false,
  }

  changeModalVisibility = (modalVisible = false) => {
    this.setState({ modalVisible });
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <MainAppStack
          screenProps={{ changeModalVisibility: this.changeModalVisibility }}
        />
        <Modal
          visible={this.state.modalVisible}
          animationType="fade"
        >
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalBody}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi perspiciatis nostrum asperiores, voluptas obcaecati culpa reiciendis saepe minima eligendi delectus repudiandae rerum commodi provident laudantium accusantium illum debitis mollitia facilis.
              </Text>
              <Button
                title="Close modal"
                onPress={() => this.changeModalVisibility(false)}
              />
            </View>
          </SafeAreaView>
        </Modal>          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBody: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    borderRadius: 5,
  }
})

export default App;