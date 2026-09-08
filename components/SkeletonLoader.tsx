import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-48 rounded" />
      <div className="bg-gray-300 h-6 rounded my-2" />
      <div className="bg-gray-300 h-6 rounded" />
    </div>
  );
};

export default SkeletonLoader;