import { createStaticNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RootTabs from './src/navigation/RootNavigator';

const Navigation = createStaticNavigation(RootTabs);

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
