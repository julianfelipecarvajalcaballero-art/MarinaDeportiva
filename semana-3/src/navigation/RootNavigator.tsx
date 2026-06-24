import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { COLORS } from '../theme';

const HomeStack = createNativeStackNavigator({
  screens: {
    HomeList: {
      screen: HomeScreen,
      options: { title: 'Marina Deportiva' },
    },
    Detail: {
      screen: DetailScreen,
      options: { title: 'Detalle' },
    },
  },
});

const RootTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: HomeStack,
      options: {
        title: 'Home',
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      },
    },
    Favorites: {
      screen: FavoritesScreen,
      options: {
        title: 'Favorites',
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Ionicons name="bookmark" size={size} color={color} />
        ),
      },
    },
  },
  screenOptions: {
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.textMuted,
  },
});

export default RootTabs;
