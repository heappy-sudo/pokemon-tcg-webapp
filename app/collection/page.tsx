import React from 'react';
import { useCardCollection } from '../hooks/useCardCollection';
import CardThumbnail from '../../components/CardThumbnail';

const CollectionPage = () => {
  const { cards } = useCardCollection();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">My Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(card => (
          <CardThumbnail key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;