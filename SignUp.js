import React from 'react';
import { View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';

export default ({ navigation, screenProps }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address" />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />
      <FormLabel>Confirm password</FormLabel>
      <FormInput secureTextEntry placeholder="Confirm password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03a9f4"
        title="SIGN UP"
        onPress={() => screenProps.signIn()}
      />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="transparent"
        textStyle={{ color: "#bcbec1" }}
        title="SIgn In"
        onPress={() => navigation.navigate('SignIn')}
      />
    </Card>
  </View>
);
