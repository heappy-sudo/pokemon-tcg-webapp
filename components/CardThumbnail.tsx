import React from 'react';
import { Card } from '../types';
import { useRouter } from 'next/router';

const CardThumbnail: React.FC<{ card: Card }> = ({ card }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/card/${card.id}`);
  };

  return (
    <div className="cursor-pointer hover:scale-105 transition-transform" onClick={handleClick}>
      <img src={card.imageUrl} alt={card.name} className="rounded" />
      <h3>{card.name}</h3>
    </div>
  );
};

export default CardThumbnail;