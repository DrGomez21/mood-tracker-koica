import { View, Text, StyleSheet, Pressable, FlatList, TouchableOpacity } from 'react-native';
import MainMoodCard from '../components/MainMoodCard';
import MoodCard from '../components/MoodCard';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {

  const data = [
    {
      id: '1',
      mood: 'Neutral',
      date: '7 nov · 14:30',
      activities: ['Trabajo', 'Estudio'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '2',
      mood: 'Mal',
      date: '6 nov · 14:30',
      activities: ['Trabajo'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '3',
      mood: 'Excelente',
      date: '5 nov · 14:30',
      activities: ['Trabajo', 'Ocio', 'Deporte'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '4',
      mood: 'Calmado',
      date: '4 nov · 14:30',
      activities: ['Trabajo', 'Amigos'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]

  return (
    <View style={styles.container}>

      <View style={styles.containerHeader}>
        <Text style={styles.sectionHeader}>Hola, Diego 👋🏼</Text>
        <Text style={styles.sectionSubtitle}>Domingo 8 de Noviembre</Text>
      </View>

      <MainMoodCard />

      <View style={styles.containerTitle}>
        <Text style={styles.sectionTitle}>Últimos registros</Text>
        <Pressable onPress={() => console.log('Ver todos presionado')}>
          <Text style={styles.textButton}>Ver todos</Text>
        </Pressable>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 16 }}>
            <MoodCard mood={item} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={{ width: '100%' }}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => console.log('FAB presionado')}
        activeOpacity={0.8}
      >
        <Ionicons name="add" size={32} color="#FFFFFF" />
      </TouchableOpacity>

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

export default HomeScreen;