import { useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, ListRenderItemInfo } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MarinaItem } from '../types';
import { COLORS, TYPOGRAPHY, SPACING } from '../theme';

const emptyData: MarinaItem[] = [];

export default function FavoritesScreen() {
  const renderEmpty = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Ionicons name="bookmark-outline" size={64} color={COLORS.textMuted} />
        <Text style={styles.emptyTitle}>Sin favoritos</Text>
        <Text style={styles.emptySubtitle}>
          Los favoritos aparecerán aquí en la siguiente semana
        </Text>
      </View>
    ),
    []
  );

  const keyExtractor = useCallback((item: MarinaItem) => item.id, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={emptyData}
        renderItem={() => null}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContent: {
    paddingVertical: SPACING.md,
    paddingBottom: SPACING.xl,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.xl * 2,
    paddingHorizontal: SPACING.lg,
    gap: SPACING.md,
  },
  emptyTitle: {
    ...TYPOGRAPHY.title,
    color: COLORS.textPrimary,
  },
  emptySubtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
});
