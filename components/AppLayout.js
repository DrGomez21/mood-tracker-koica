import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';

import { useTheme } from '@react-navigation/native';

export default function AppLayout({ children }) {
  const { colors } = useTheme();

  return (
    <View style={styles.screen}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      />

      <View style={styles.container}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    flex: 1,
  },
});