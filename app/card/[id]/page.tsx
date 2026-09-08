import React from 'react';
import { useCardDetail } from '../../hooks/useCardDetail';
import ConditionSelector from '../../components/ConditionSelector';

const CardDetail = ({ params }: { params: { id: string } }) => {
  const { card, marketPrices } = useCardDetail(params.id);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{card.name}</h1>
      <img src={card.imageUrl} alt={card.name} />
      <h2>Market Prices</h2>
      <ul>{marketPrices.map(price => <li key={price.id}>${price.value}</li>)}</ul>
      <ConditionSelector />
    </div>
  );
};

export default CardDetail;