# Marina Deportiva

Aplicación móvil desarrollada con **Expo SDK 56** + **React Native 0.85** + **TypeScript** para la gestión y visualización de embarcaciones en una marina deportiva.

---

## Estructura del proyecto

```
MarinaDeportiva/
├── semana-1/     # ScrollView + tarjetas + imágenes + Pressable
├── semana-2/     # FlatList + búsqueda + theme + KeyboardAvoidingView
├── semana-3/     # React Navigation 7 + Tabs + Stack + DetailScreen
├── semana-4/     # Zustand + savedStore + badge + guardar/quitar
└── README.md
```

Cada carpeta es una aplicación independiente y funcional que evoluciona sobre la anterior.

---

## Cómo ejecutar

```bash
cd semana-1   # o semana-2, semana-3, semana-4
pnpm install
pnpm start
```

---

## Semana 1

**Stack:** Expo + React Native + TypeScript

**Características:**
- Header "Marina Deportiva"
- ScrollView con 12 tarjetas de embarcaciones
- Imagen en cada tarjeta (Unsplash)
- Pressable con feedback visual (opacity + scale)
- Estilos con StyleSheet.create
- Interfaces TypeScript (MarinaItem)
- Sin FlatList, sin búsqueda, sin navegación, sin estado global

**Archivos:**
- `App.tsx` → renderiza HomeScreen
- `src/types/index.ts` → interface MarinaItem
- `src/data/mockData.ts` → 12 embarcaciones mock
- `src/components/ItemCard.tsx` → tarjeta reutilizable
- `src/screens/HomeScreen.tsx` → ScrollView con tarjetas

---

## Semana 2

**Stack:** Expo + React Native + TypeScript + @expo/vector-icons

**Características:**
- Todo lo de Semana 1
- FlatList reemplaza ScrollView (virtualización, mejor rendimiento)
- TextInput con búsqueda en tiempo real
- useMemo para filtrado eficiente
- useCallback para renderItem, EmptyState y keyExtractor
- KeyboardAvoidingView para manejo de teclado
- Sistema de tema (COLORS, TYPOGRAPHY, SPACING)
- Iconos Ionicons en las tarjetas
- Sin React Navigation, sin Zustand

**Archivos nuevos:**
- `src/theme/index.ts` → diseño tokens

---

## Semana 3

**Stack:** Expo + React Native + TypeScript + React Navigation 7 + Ionicons

**Características:**
- Todo lo de Semana 2
- React Navigation 7 (API estática)
- Bottom Tab Navigator con 2 pestañas (Home, Favorites)
- Native Stack Navigator anidado (HomeList → Detail)
- HomeScreen con navegación a Detail
- DetailScreen con parámetros tipados (id, boatName)
- FavoritesScreen (placeholder, sin estado aún)
- useRoute tipado con RouteProp
- tabBarActiveTintColor: #61DAFB
- RootTabParamList y HomeStackParamList tipados
- Sin Zustand

**Archivos nuevos:**
- `src/navigation/RootNavigator.tsx` → tabs + stack
- `src/navigation/types.ts` → tipos de navegación
- `src/screens/DetailScreen.tsx` → detalle de embarcación
- `src/screens/FavoritesScreen.tsx` → placeholder de favoritos

---

## Semana 4

**Stack:** Expo + React Native + TypeScript + React Navigation 7 + Zustand 5

**Características:**
- Todo lo de Semana 3
- Zustand 5 para estado global
- savedStore.ts con addItem, removeItem, clearItems
- Guardar/Quitar embarcaciones desde HomeScreen
- Guardar/Quitar desde DetailScreen
- FavoritesScreen conectada al store
- Badge dinámico en el tab (tabBarBadge)
- Selectores Zustand correctos (sin suscripciones innecesarias)
- Sin any

**Archivos nuevos:**
- `src/stores/savedStore.ts` → store Zustand

---

## Licencia

MIT
