import { useMemo, useCallback, useState } from 'react';
import {
  View, Text, TextInput, FlatList, KeyboardAvoidingView, Platform,
  StyleSheet, ListRenderItemInfo, Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { MarinaItem } from '../types';
import { mockData } from '../data/mockData';
import { HomeStackParamList } from '../navigation/types';
import { COLORS, TYPOGRAPHY, SPACING } from '../theme';
import ItemCard from '../components/ItemCard';

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'HomeList'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return mockData;
    const query = searchQuery.toLowerCase().trim();
    return mockData.filter(
      (item) =>
        item.boatName.toLowerCase().includes(query) ||
        item.ownerName.toLowerCase().includes(query) ||
        item.berthNumber.toLowerCase().includes(query) ||
        item.serviceType.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handlePress = useCallback(
    (item: MarinaItem) => navigation.navigate('Detail', { id: item.id, boatName: item.boatName }),
    [navigation]
  );

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<MarinaItem>) => (
      <ItemCard item={item} onPress={handlePress} />
    ),
    [handlePress]
  );

  const renderEmpty = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Ionicons name="search-outline" size={64} color={COLORS.textMuted} />
        <Text style={styles.emptyTitle}>Sin resultados</Text>
        <Text style={styles.emptySubtitle}>
          No se encontraron embarcaciones para "{searchQuery}"
        </Text>
      </View>
    ),
    [searchQuery]
  );

  const keyExtractor = useCallback((item: MarinaItem) => item.id, []);

  const ItemSeparatorComponent = useCallback(
    () => <View style={styles.separator} />,
    []
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={COLORS.textMuted} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar embarcación..."
          placeholderTextColor={COLORS.textMuted}
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {searchQuery.length > 0 && (
          <Pressable onPress={() => setSearchQuery('')} style={styles.clearButton}>
            <Ionicons name="close-circle" size={20} color={COLORS.textMuted} />
          </Pressable>
        )}
      </View>
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={ItemSeparatorComponent}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    marginHorizontal: SPACING.md,
    marginTop: SPACING.md,
    marginBottom: SPACING.sm,
    borderRadius: 12,
    paddingHorizontal: SPACING.md,
    height: 48,
    elevation: 1,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  searchIcon: {
    marginRight: SPACING.sm,
  },
  searchInput: {
    flex: 1,
    ...TYPOGRAPHY.body,
    color: COLORS.textPrimary,
    height: '100%',
  },
  clearButton: {
    padding: SPACING.xs,
  },
  listContent: {
    paddingVertical: SPACING.sm,
    paddingBottom: SPACING.xl,
  },
  separator: {
    height: 0,
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
    marginBottom: SPACING.xs,
  },
  emptySubtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
});
