import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hola, soy el Detalle de la entrada</Text>
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

export default DetailScreen;