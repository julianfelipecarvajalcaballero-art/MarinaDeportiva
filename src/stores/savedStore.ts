import { create } from 'zustand';
import { MarinaItem } from '../types';

interface SavedState {
  savedItems: MarinaItem[];
  addItem: (item: MarinaItem) => void;
  removeItem: (id: string) => void;
  clearItems: () => void;
}

export const useSavedStore = create<SavedState>()((set) => ({
  savedItems: [],
  addItem: (item) =>
    set((state) => ({
      savedItems: state.savedItems.some((i) => i.id === item.id)
        ? state.savedItems
        : [...state.savedItems, item],
    })),
  removeItem: (id) =>
    set((state) => ({
      savedItems: state.savedItems.filter((i) => i.id !== id),
    })),
  clearItems: () => set({ savedItems: [] }),
}));
