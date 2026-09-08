import Dexie from 'dexie';

class AppDB extends Dexie {
  cards: Dexie.Table<Card, number>;
  collection: Dexie.Table<CollectionEntry, number>;
  wishlist: Dexie.Table<WishlistEntry, number>;
  prices: Dexie.Table<PriceCache, number>;

  constructor() {
    super('appDatabase');
    this.version(1).stores({
      cards: '++id,name,imageUrl',
      collection: '++id,cardId',
      wishlist: '++id,cardId',
      prices: '++id,cardId,price',
    });

    this.cards = this.table('cards');
    this.collection = this.table('collection');
    this.wishlist = this.table('wishlist');
    this.prices = this.table('prices');
  }
}

const db = new AppDB();
export default db;