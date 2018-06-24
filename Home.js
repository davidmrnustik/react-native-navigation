import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-elements';

export default ({ navigation, screenProps }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="Card A">
      <View>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aspernatur quasi voluptatibus impedit possimus distinctio quas asperiores neque, sequi sunt, delectus porro eveniet eius aut! Rerum non ullam fugit fugiat!</Text>
      </View>
    </Card>
    <Card title="Card B">
      <View>
        <Text>Adipisicing elit. Natus aspernatur quasi voluptatibus impedit possimus distinctio quas asperiores neque, sequi sunt, delectus porro eveniet eius aut! Rerum non ullam fugit fugiat!</Text>
      </View>
    </Card>
    <Card title="Card C">
      <View>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vero praesentium possimus tenetur mollitia, nulla illum.</Text>
      </View>
    </Card>
  </View>
)