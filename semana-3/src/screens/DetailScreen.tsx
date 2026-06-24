import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { HomeStackParamList } from '../navigation/types';
import { mockData } from '../data/mockData';
import { COLORS, TYPOGRAPHY, SPACING } from '../theme';

type DetailScreenRouteProp = RouteProp<HomeStackParamList, 'Detail'>;

export default function DetailScreen() {
  const route = useRoute<DetailScreenRouteProp>();
  const { id } = route.params;

  const item = mockData.find((b) => b.id === id);

  if (!item) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Embarcación no encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.boatName}>{item.boatName}</Text>
        <View style={styles.infoRow}>
          <Ionicons name="person-outline" size={20} color={COLORS.textSecondary} />
          <View style={styles.infoColumn}>
            <Text style={styles.label}>Propietario</Text>
            <Text style={styles.value}>{item.ownerName}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={20} color={COLORS.textSecondary} />
          <View style={styles.infoColumn}>
            <Text style={styles.label}>Amarre</Text>
            <Text style={styles.value}>{item.berthNumber}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="construct-outline" size={20} color={COLORS.textSecondary} />
          <View style={styles.infoColumn}>
            <Text style={styles.label}>Servicio</Text>
            <Text style={styles.value}>{item.serviceType}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  errorText: {
    ...TYPOGRAPHY.body,
    color: COLORS.error,
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    flex: 1,
    padding: SPACING.lg,
    gap: SPACING.md,
  },
  boatName: {
    ...TYPOGRAPHY.header,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: 12,
    elevation: 1,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  infoColumn: {
    flex: 1,
  },
  label: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  value: {
    ...TYPOGRAPHY.subtitle,
    color: COLORS.textPrimary,
    marginTop: 2,
  },
});
