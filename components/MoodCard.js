import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

const MoodCard = ({ mood }) => {

  const moodColors = {
    Excelente: '#E8E3FA',
    Bien: '#DEF2E8',
    Neutral: '#FAF0D1',
    Mal: '#FAE0DE',
    Calmado: '#E0EDFA',
  };

  const moodEmojis = {
    Excelente: '😄',
    Bien: '🙂',
    Neutral: '😐',
    Mal: '😞',
    Calmado: '😌',
  };

  return (
    <View style={styles.container}>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <View style={[styles.cardMoodSurface, { backgroundColor: moodColors[mood.mood] }]}>
          <Text style={{ fontSize: 20 }}>{moodEmojis[mood.mood]}</Text>
        </View>

        <View style={{ gap: 4 }} >
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#1B1B1F' }}>{mood.mood}</Text>
          <Text style={{ fontSize: 12, color: '#6B6B75' }}>{mood.date}</Text>
        </View>

      </View>

      <Text style={{ fontSize: 12, fontWeight: '600', color: '#7363BF' }}>{mood.activities.join(' · ')}</Text>

      <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 12, color: '#666' }}>
        {mood.description}
      </Text>

    </View>
  )
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
    gap: 8,
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
  cardMoodSurface: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#DEF2E8',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default MoodCard;