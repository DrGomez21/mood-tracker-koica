import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddMoodScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hola, soy el AddMoodScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddMoodScreen;