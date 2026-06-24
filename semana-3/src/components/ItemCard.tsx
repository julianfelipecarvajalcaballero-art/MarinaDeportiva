import { memo } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MarinaItem } from '../types';
import { COLORS, TYPOGRAPHY, SPACING } from '../theme';

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
        <View style={styles.row}>
          <Ionicons name="person-outline" size={14} color={COLORS.textMuted} />
          <Text style={styles.infoText} numberOfLines={1}>{item.ownerName}</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="location-outline" size={14} color={COLORS.textMuted} />
          <Text style={styles.infoText}>Amarre {item.berthNumber}</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="construct-outline" size={14} color={COLORS.textMuted} />
          <Text style={styles.infoText}>{item.serviceType}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default memo(ItemCard);

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: COLORS.black,
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
    padding: SPACING.md,
    gap: SPACING.sm,
  },
  boatName: {
    ...TYPOGRAPHY.subtitle,
    color: COLORS.textPrimary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  infoText: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    flex: 1,
  },
});
