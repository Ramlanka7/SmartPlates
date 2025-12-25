// Data models for Menu Management

export interface MenuCategory {
  id: string;
  name: string;
  sortOrder: number;
}

export interface MenuItem {
  id: string;
  name: string;
  sku: string;
  price: number;
  tax: number;
  cost: number;
  description?: string;
  imageUrl?: string;
  categoryId: string;
  availableTimes?: string[]; // e.g., ["08:00-11:00", "17:00-22:00"]
  modifiers?: string[]; // modifier group IDs
}

export interface ModifierGroup {
  id: string;
  name: string;
  minSelect: number;
  maxSelect: number;
  modifierIds: string[];
}

export interface Modifier {
  id: string;
  name: string;
  price: number;
}
