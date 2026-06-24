import { useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, ListRenderItemInfo, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MarinaItem } from '../types';
import { useSavedStore } from '../stores/savedStore';
import { RootTabParamList } from '../navigation/types';
import { COLORS, TYPOGRAPHY, SPACING } from '../theme';
import ItemCard from '../components/ItemCard';

type FavoritesScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Saved'>;

export default function FavoritesScreen() {
  const navigation = useNavigation<FavoritesScreenNavigationProp>();
  const savedItems = useSavedStore((state) => state.savedItems);
  const removeItem = useSavedStore((state) => state.removeItem);

  useEffect(() => {
    navigation.setOptions({
      tabBarBadge: savedItems.length > 0 ? savedItems.length : undefined,
    });
  }, [savedItems.length, navigation]);

  const handleRemove = useCallback((id: string) => removeItem(id), [removeItem]);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<MarinaItem>) => (
      <View>
        <ItemCard item={item} onPress={() => {}} />
        <View style={styles.removeRow}>
          <Pressable
            onPress={() => handleRemove(item.id)}
            style={({ pressed }) => [styles.removeButton, pressed && styles.removeButtonPressed]}
          >
            <Ionicons name="trash-outline" size={16} color={COLORS.error} />
            <Text style={styles.removeText}>Quitar</Text>
          </Pressable>
        </View>
      </View>
    ),
    [handleRemove]
  );

  const renderEmpty = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Ionicons name="bookmark-outline" size={64} color={COLORS.textMuted} />
        <Text style={styles.emptyTitle}>Sin guardados</Text>
        <Text style={styles.emptySubtitle}>Guarda embarcaciones desde la pantalla principal</Text>
      </View>
    ),
    []
  );

  const keyExtractor = useCallback((item: MarinaItem) => item.id, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={savedItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  listContent: { paddingVertical: SPACING.md, paddingBottom: SPACING.xl },
  emptyContainer: {
    alignItems: 'center', justifyContent: 'center', paddingVertical: SPACING.xl * 2,
    paddingHorizontal: SPACING.lg, gap: SPACING.md,
  },
  emptyTitle: { ...TYPOGRAPHY.title, color: COLORS.textPrimary },
  emptySubtitle: { ...TYPOGRAPHY.body, color: COLORS.textMuted, textAlign: 'center' },
  removeRow: {
    flexDirection: 'row', justifyContent: 'flex-end',
    paddingHorizontal: SPACING.md + SPACING.sm, marginTop: -SPACING.sm, marginBottom: SPACING.xs,
  },
  removeButton: {
    flexDirection: 'row', alignItems: 'center', gap: SPACING.xs,
    paddingVertical: SPACING.xs, paddingHorizontal: SPACING.sm,
  },
  removeButtonPressed: { opacity: 0.6 },
  removeText: { ...TYPOGRAPHY.body, color: COLORS.error, fontWeight: '600' },
});
