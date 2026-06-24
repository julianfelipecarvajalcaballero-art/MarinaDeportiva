import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { mockData } from '../data/mockData';
import ItemCard from '../components/ItemCard';
import { MarinaItem } from '../types';

export default function HomeScreen() {
  const handlePress = (item: MarinaItem) => {
    alert(`Seleccionaste: ${item.boatName}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Marina Deportiva</Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {mockData.map((item) => (
          <ItemCard key={item.id} item={item} onPress={handlePress} />
        ))}
        <View style={styles.footer}>
          <Pressable
            onPress={() => alert('¡Bienvenido a Marina Deportiva!')}
            style={({ pressed }) => [styles.footerButton, pressed && styles.footerButtonPressed]}
          >
            <Text style={styles.footerButtonText}>Ver más embarcaciones</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  header: {
    backgroundColor: '#61DAFB',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 16,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  footerButton: {
    backgroundColor: '#61DAFB',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  footerButtonPressed: {
    opacity: 0.7,
  },
  footerButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
