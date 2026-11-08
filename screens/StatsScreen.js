import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatsScreen = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.sectionHeader}>Stats</Text>
      <Text style={styles.sectionSubtitle}>Un resumen simple de como venís sintiéndote</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 20,
  },

  containerHeader: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 4,
  },

  sectionHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1B1B1F',
  },

  sectionSubtitle: {
    fontSize: 16,
    color: '#6B6B75',
  },

  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1B1B1F',
  },

  textButton: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7363BF',
  },

  fab: {
    position: 'absolute',
    width: 58, // Tamaño estándar de un FAB
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0, // Distancia desde la derecha
    bottom: 20, // Distancia desde abajo
    backgroundColor: '#7363BF',
    borderRadius: 20,
    // Sombras para Android
    elevation: 10,
    // Sombras para iOS
    shadowColor: '#261A4D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
  },
});

export default StatsScreen;