import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

// Layout
import AppLayout from './components/AppLayout';

// Pantallas
import HomeScreen from './screens/HomeScreen';
import StatsScreen from './screens/StatsScreen';
import HistoryScreen from './screens/HistoryScreen';
import AddMoodScreen from './screens/AddMoodScreen';
import DetailScreen from './screens/EntryDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F8F7F2',
    primary: '#7363BF',
    text: '#1B1B1F',
    onPrimary: '#FFFFFF',
  }
};

function withAppLayout(Component) {
  return function WrappedComponent(props) {
    return (
      <AppLayout>
        <Component {...props} />
      </AppLayout>
    );
  }
}

const HomeScreenWithLayout = withAppLayout(HomeScreen);
const StatsScreenWithLayout = withAppLayout(StatsScreen);
const HistoryScreenWithLayout = withAppLayout(HistoryScreen);
const AddMoodScreenWithLayout = withAppLayout(AddMoodScreen);
const DetailScreenWithLayout = withAppLayout(DetailScreen);

const getTabBarIcon = (routeName, focused) => {
  if (routeName === 'Inicio') {
    return focused ? 'home' : 'home-outline';
  }
  else if (routeName === 'Stats') {
    return focused ? 'stats-chart' : 'stats-chart-outline';
  }
  else if (routeName === 'Historial') {
    return focused ? 'time' : 'time-outline';
  }

  return 'ellipse-outline'; // Icono por defecto si no coincide con ninguna ruta
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreenWithLayout} />
      <Stack.Screen name="AddMood" component={AddMoodScreenWithLayout} />
      <Stack.Screen name="Detail" component={DetailScreenWithLayout} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          TabBarActiveTintColor: MyTheme.colors.primary,
          animation: 'shift',
          tabBarLabelPosition: 'beside-icon',
          tabBarStyle: {
            height: 72,
            elevation: 0,
            borderTopWidth: 0,
            shadowOpacity: 0, // Para iOS
          },
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={getTabBarIcon(route.name, focused)} size={size || 24} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Inicio" component={HomeStack} />
        <Tab.Screen name="Historial" component={HistoryScreenWithLayout} />
        <Tab.Screen name="Stats" component={StatsScreenWithLayout} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
