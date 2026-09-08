import React from 'react';

const ToastNotification = ({ message, type }: { message: string; type: 'success' | 'error' | 'info' }) => {
  let bgColor = 'bg-blue-500';
  if (type === 'success') bgColor = 'bg-green-500';
  if (type === 'error') bgColor = 'bg-red-500';

  return (
    <div className={`${bgColor} text-white p-2 rounded`}>{message}</div>
  );
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;