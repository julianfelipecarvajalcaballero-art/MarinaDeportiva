import { memo } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { MarinaItem } from '../types';

interface ItemCardProps {
  item: MarinaItem;
  onPress: (item: MarinaItem) => void;
}

function ItemCard({ item, onPress }: ItemCardProps) {
  return (
    <Pressable
      onPress={() => onPress(item)}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.boatName} numberOfLines={1}>{item.boatName}</Text>
        <Text style={styles.label}>Propietario: <Text style={styles.value}>{item.ownerName}</Text></Text>
        <Text style={styles.label}>Amarre: <Text style={styles.value}>{item.berthNumber}</Text></Text>
        <Text style={styles.label}>Servicio: <Text style={styles.value}>{item.serviceType}</Text></Text>
      </View>
    </Pressable>
  );
}

export default memo(ItemCard);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 16,
    gap: 6,
  },
  boatName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A2E',
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    color: '#8E8E9A',
  },
  value: {
    fontSize: 14,
    color: '#4A4A6A',
    fontWeight: '500',
  },
});
