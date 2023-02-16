import clsx from 'clsx';
import React from 'react';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({ children, wrapperClass }) => {
  return (
    <div className={clsx(`rounded shadow-md min-w-[100px] min-h-[120px] p-4 ${wrapperClass}`)}>
      {children}
    </div>
  );
};

export default Card;
