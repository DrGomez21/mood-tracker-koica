import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';

import { useTheme } from '@react-navigation/native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function AppLayout({ children }) {
  const { colors } = useTheme();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.background}
        />

        <View style={styles.container}>{children}</View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});