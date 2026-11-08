import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainMoodCard = () => {
  return (
    <View style={styles.container}>
      <Text>Tu estado hoy</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <View style={{
          width: 56,
          height: 56,
          borderRadius: 18,
          backgroundColor: '#DEF2E8',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{ fontSize: 24 }}>😃</Text>
        </View>

        <View style={{ gap: 4 }} >
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#1B1B1F' }}>Bien</Text>
          <Text style={{ fontSize: 12, color: '#6B6B75' }}>Registrado a las 10:00 AM</Text>
        </View>

      </View>

      {/* Pill de actividades */}
      <View
        style={{
          backgroundColor: '#E8E3FA',
          borderRadius: 20,
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
      >
        <Text style={{fontSize: 12, fontWeight: '600', color: '#7363BF'}}>Trabajo · Estudio</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
    shadowColor: '#d7d5d5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default MainMoodCard;