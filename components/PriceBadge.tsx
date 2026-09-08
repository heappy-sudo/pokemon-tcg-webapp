import React from 'react';

const PriceBadge = ({ price }: { price: number }) => {
  let color = 'bg-gray-500';

  if (price < 10) {
    color = 'bg-green-500';
  } else if (price < 50) {
    color = 'bg-yellow-500';
  } else {
    color = 'bg-red-500';
  }

  return (
    <span className={`text-white py-1 px-3 rounded ${color}`}>${price}</span>
  );
};

export default PriceBadge;