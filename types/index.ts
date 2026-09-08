export interface Card {
  id: string;
  name: string;
  imageUrl: string;
}

export interface CollectionEntry {
  id?: number;
  cardId: string;
}

export interface PriceCache {
  id?: number;
  cardId: string;
  price: number;
}

export interface WishlistEntry {
  id?: number;
  cardId: string;
}

export interface Set {
  name: string;
  cards: Card[];
}