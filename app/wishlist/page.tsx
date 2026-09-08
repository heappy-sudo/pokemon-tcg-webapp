import React from 'react';
import { useWishlist } from '../hooks/useWishlist';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Wishlist</h1>
      <ul>
        {wishlist.map(item => (
          <li key={item.id} className="flex justify-between">
            <span>{item.name}</span>
            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishlistPage;